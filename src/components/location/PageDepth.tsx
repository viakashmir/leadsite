import { DayList, Section } from "@/components/location/blocks";
import { pageDepth } from "@/data/page-depth";

// Long-form sections written for one page path (data/page-depth). Rendered in
// the page's own design; FAQs are merged into the page's FAQ list by the
// caller so there is one FAQPage block per page.
export default function PageDepth({ path }: { path: string }) {
  const d = pageDepth(path);
  if (!d) return null;
  return (
    <>
      {d.sections.map((s) => (
        <Section key={s.h} title={s.h}>
          <div className="space-y-3">
            {s.p?.map((t, i) => (
              <p key={i} className="leading-relaxed text-ink">
                {t}
              </p>
            ))}
            {s.list && s.list.length > 0 && (
              <ul className="list-disc space-y-1.5 pl-5 leading-relaxed text-ink">
                {s.list.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {s.days && s.days.length > 0 && <DayList days={s.days} />}
          </div>
        </Section>
      ))}
    </>
  );
}
