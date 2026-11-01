// Keyword coverage gate for docs/keyword-research/keyword-map.csv.
//
// Every keyword must land on a page that is live (200), indexable (no noindex)
// and actually answers the query: all of the keyword's significant words appear
// in the page's title, H1-H3 headings or FAQ questions. Anything else is listed
// as a miss, so no keyword can drop out silently.
//
//   npx tsx scripts/check-keyword-coverage.ts [baseUrl] [--all]
//
// baseUrl defaults to http://localhost:3000. By default excluded rows
// (fit X-*) are reported separately; --all fails on them too.

import { existsSync, readFileSync, writeFileSync } from "node:fs";

const base = (process.argv.find((a) => a.startsWith("http")) ?? "http://localhost:3000").replace(/\/$/, "");
const strict = process.argv.includes("--all");
const MAP = "docs/keyword-research/keyword-map.csv";
const REPORT = "docs/keyword-research/coverage-report.csv";
// keyword,url rows that move a keyword to the page that best answers it,
// overriding the automatic mapping in keyword-map.csv.
const OVERRIDES = "docs/keyword-research/url-overrides.csv";
// keyword,reason rows the owner has decided not to target (wrong meaning,
// illegal topic...). Listed in the report with the reason, never dropped.
const EXCLUSIONS = "docs/keyword-research/exclusions.csv";

function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\n") { row.push(cell.replace(/\r$/, "")); rows.push(row); row = []; cell = ""; }
    else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])));
}

const STOP = new Set(["in", "the", "a", "an", "of", "to", "for", "and", "on", "at", "from", "by", "with", "is", "me", "my", "between"]);
// Plural and singular count as the same word, as they do for search engines.
const stem = (w: string) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w);
// Years ("rohtang pass in may 2018") are freshness signals, not topics: the
// current page answers them, so they are not required in headings.
const words = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((w) => w && !STOP.has(w) && !/^(19|20)\d\d$/.test(w))
    .map(stem);

type PageCheck = { status: number; indexable: boolean; text: string };

async function inspect(path: string): Promise<PageCheck> {
  const res = await fetch(base + path, { redirect: "follow" });
  const html = await res.text();
  const robots = /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i.exec(html)?.[1] ?? "";
  const pick = (re: RegExp) => [...html.matchAll(re)].map((m) => m[1].replace(/<[^>]+>/g, " ")).join(" ");
  const faq = [...html.matchAll(/"@type":"Question","name":"([^"]*)"/g)].map((m) => m[1]).join(" ");
  const text = [pick(/<title>([\s\S]*?)<\/title>/gi), pick(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi), faq].join(" ");
  return { status: res.status, indexable: !/noindex/i.test(robots), text: words(text).join(" ") };
}

async function main() {
  const overrides = new Map(
    (existsSync(OVERRIDES) ? parseCsv(readFileSync(OVERRIDES, "utf8")) : []).map((o) => [o.keyword, o.url]),
  );
  const exclusions = new Map(
    (existsSync(EXCLUSIONS) ? parseCsv(readFileSync(EXCLUSIONS, "utf8")) : []).map((o) => [o.keyword, o.reason]),
  );
  const rows = parseCsv(readFileSync(MAP, "utf8")).map((r) =>
    overrides.has(r.keyword) ? { ...r, url: overrides.get(r.keyword)!, fit: r.fit.startsWith("X-") ? "B-planning" : r.fit } : r,
  );
  const urls = [...new Set(rows.map((r) => r.url).filter(Boolean))];
  const pages = new Map<string, PageCheck>();
  for (let i = 0; i < urls.length; i += 8) {
    await Promise.all(urls.slice(i, i + 8).map(async (u) => pages.set(u, await inspect(u))));
  }

  const out = rows.map((r) => {
    const excluded = r.fit.startsWith("X-") || exclusions.has(r.keyword);
    let result: string;
    if (exclusions.has(r.keyword)) result = `EXCLUDED:${exclusions.get(r.keyword)}`;
    else if (!r.url) result = "MISSING_PAGE";
    else {
      const p = pages.get(r.url)!;
      const have = new Set(p.text.split(" "));
      const missing = words(r.keyword).filter((w) => !have.has(w));
      if (p.status !== 200) result = `HTTP_${p.status}`;
      else if (!p.indexable) result = "NOINDEX";
      else if (missing.length) result = `KEYWORD_NOT_IN_HEADINGS:${missing.join(" ")}`;
      else result = "OK";
    }
    return { ...r, excluded, result } as Record<string, string> & { excluded: boolean; result: string };
  });

  const inScope = out.filter((r) => strict || !r.excluded);
  const ok = inScope.filter((r) => r.result === "OK");
  const byResult = new Map<string, number>();
  for (const r of inScope) {
    const key = r.result.split(":")[0];
    byResult.set(key, (byResult.get(key) ?? 0) + 1);
  }

  const cols = ["keyword", "url", "result", "volume", "kd", "fit", "excluded"] as const;
  const esc = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;
  writeFileSync(REPORT, [cols.join(","), ...out.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n");

  console.log(`Base: ${base}  pages checked: ${urls.length}`);
  console.log(`Covered: ${ok.length}/${inScope.length} keywords${strict ? " (including excluded)" : ""}`);
  for (const [k, n] of [...byResult].sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(26)} ${n}`);
  console.log(`Excluded (brand/utility/local navigation): ${out.filter((r) => r.excluded && !exclusions.has(r.keyword)).length}`);
  console.log(`Excluded by decision (see ${EXCLUSIONS}): ${exclusions.size}`);
  console.log(`Full report: ${REPORT}`);
  process.exit(ok.length === inScope.length ? 0 : 1);
}

main();
