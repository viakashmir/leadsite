import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, QuoteBox } from "@/components/location/blocks";
import { webPageSchema } from "@/lib/schema";
import { formatDate } from "@/lib/format";

// Shell for the trust pages (About, Contact, Editorial Policy): one H1,
// breadcrumb, page schema and readable prose width.
export default function InfoPage({
  path,
  title,
  description,
  type,
  updated,
  children,
}: {
  path: string;
  title: string;
  description: string;
  type: "AboutPage" | "ContactPage" | "WebPage";
  updated?: string; // ISO date the page copy was last reviewed
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:py-10 lg:grid-cols-3">
      <article className="min-w-0 lg:col-span-2">
        <JsonLd
          data={webPageSchema({ path, name: title, description, type, dateModified: updated ? new Date(updated) : undefined })}
        />
        <Breadcrumbs items={[{ name: title, href: path }]} />
        <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-ink-soft">{description}</p>
        {updated && (
          <p className="mt-2 text-xs text-ink-soft">
            Last updated <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        )}
        <div className="mt-8 space-y-8 text-[15px] leading-7 text-ink [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_li]:ml-5 [&_li]:list-disc [&_a]:text-brand [&_a]:underline">
          {children}
        </div>
      </article>
      <aside className="hidden lg:block">
        <QuoteBox title="Plan a trip with a local expert" />
      </aside>
    </div>
  );
}
