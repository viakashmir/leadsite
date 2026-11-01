import JsonLd from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/location/blocks";
import { webPageSchema } from "@/lib/schema";

// Shell for the trust pages (About, Contact, Editorial Policy): one H1,
// breadcrumb, page schema and readable prose width.
export default function InfoPage({
  path,
  title,
  description,
  type,
  children,
}: {
  path: string;
  title: string;
  description: string;
  type: "AboutPage" | "ContactPage" | "WebPage";
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={webPageSchema({ path, name: title, description, type })} />
      <Breadcrumbs items={[{ name: title, href: path }]} />
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">{title}</h1>
      <p className="mt-2 text-ink-soft">{description}</p>
      <div className="mt-8 space-y-8 text-[15px] leading-7 text-ink [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_a]:text-brand [&_a]:underline">
        {children}
      </div>
    </article>
  );
}
