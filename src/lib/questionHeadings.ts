// Question-led H2s for answer engines: AI Overviews and chat assistants match
// a reader's question to the heading that answers it. Rewrites are
// deterministic and cover only heading shapes that read naturally as a
// question. Query-shaped headings ("Where to stay in Gulmarg") keep their
// words and gain a question mark, so they still match the search exactly.

const RULES: [RegExp, (m: RegExpMatchArray) => string][] = [
  // "How to reach Gurez", "Where to stay in Pahalgam", "What to pack", "When to go"
  [/^(How|Where|What|When|Which) to (.+)$/i, (m) => `${m[0]}?`],
  // "How long to stay in Pahalgam", "How many nights in Srinagar"
  [/^How long to .+$/i, (m) => `${m[0]}?`],
  [/^How many (nights|days)(( (in|to|for|by) .+)|, and where)?$/i, (m) => `${m[0]}?`],
  // "Who should choose a houseboat", "What is open in May", "Is Gulmarg worth it"
  [/^(Is|Are|Can|Do|Does|Should|Will|Who should|What is|What are|When is|Where is|Where are) .+$/i, (m) => `${m[0]}?`],
  // "Why visit Keran", "Why choose offbeat Kashmir"
  [/^Why (visit|choose|start|go|book|stay|pick) .+$/i, (m) => `${m[0]}?`],
  // "Best time to visit Gulmarg" -> "When is the best time to visit Gulmarg?"
  [/^(?:The )?Best time to (.+)$/i, (m) => `When is the best time to ${m[1]}?`],
  // "Getting to Pahalgam", "Getting around Srinagar", "Getting there"
  [/^Getting (to|around) (.+)$/i, (m) => `How do you get ${m[1]} ${m[2]}?`],
  [/^Getting there$/i, () => "How do you get there?"],
  // "Gulmarg vs Pahalgam" -> "Gulmarg vs Pahalgam: which is better?"
  [/^([^:]+ vs\.? [^:]+)$/i, (m) => `${m[1]}: which is better?`],
  // "Cost of a winter trip" -> "How much does a winter trip cost?"
  [/^Cost of ((?:a|an|the) .+|adding .+)$/i, (m) => `How much does ${m[1]} cost?`],
  // "Mistakes to avoid in May" -> "What mistakes should you avoid in May?"
  [/^(?:Common )?Mistakes to avoid(.*)$/i, (m) => `What mistakes should you avoid${m[1]}?`],
  // "Things to do in Sonamarg" -> "What are the best things to do in Sonamarg?"
  [/^Things to do (.+)$/i, (m) => `What are the best things to do ${m[1]}?`],
];

// Shapes the rules would turn into broken questions.
const SKIP = [/ and what /i, / and how /i, / and food$/i, / by place$/i];

export function questionHeading(h: string): string {
  const t = h.trim();
  if (t.includes("?") || SKIP.some((rx) => rx.test(t))) return h;
  if (t.includes(":") && !/ vs\.? /i.test(t)) return h;
  for (const [rx, fn] of RULES) {
    const m = t.match(rx);
    if (m) return fn(m).replace(/\s+/g, " ");
  }
  return h;
}

// A bullet list whose every item is "Label: value" (seasons, distances,
// places by month) is tabular data; rendered as a two-column table it is
// easier to scan and easier for answer engines to lift. Same words, no new copy.
export function tableRows(list: string[] | undefined): [string, string][] | null {
  if (!list || list.length < 3) return null;
  const rows: [string, string][] = [];
  for (const item of list) {
    const m = item.match(/^([^:]{2,45}):\s+(.+)$/);
    if (!m || m[2].split(/\s+/).length > 22) return null;
    rows.push([m[1].trim(), m[2].trim()]);
  }
  return rows;
}
