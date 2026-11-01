import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

// Public lead pages are cached (ISR). Refresh the ones showing this lead so a
// new enquiry, or a lead selling out, shows at once instead of after the cache
// window.
export async function refreshPublicLeadPages(leadId: string) {
  const lead = await prisma.lead.findUnique({
    where: { id: leadId },
    select: { destination: { select: { slug: true } }, city: { select: { slug: true } } },
  });
  if (!lead) return;
  revalidatePath("/");
  revalidatePath("/leads");
  revalidatePath(`/leads/${lead.destination.slug}`);
  if (lead.city) revalidatePath(`/leads/${lead.destination.slug}/${lead.city.slug}`);
}
