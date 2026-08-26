import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DestinationForm from "@/components/admin/DestinationForm";
import CityManager from "@/components/admin/CityManager";
import { createCity, updateDestination } from "@/lib/adminActions";

export default async function EditDestinationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = await prisma.destination.findUnique({
    where: { id },
    include: {
      cities: { orderBy: { name: "asc" } },
      packages: { orderBy: { createdAt: "desc" } },
    },
  });
  if (!destination) notFound();

  const boundUpdate = updateDestination.bind(null, destination.id);
  const boundCreateCity = createCity.bind(null, destination.id);

  return (
    <div className="max-w-3xl">
      <Link href="/admin/destinations" className="text-sm text-blue-700">
        ← All destinations
      </Link>
      <h1 className="mt-2 text-lg font-semibold text-zinc-900">{destination.name}</h1>
      <p className="text-xs text-zinc-500">/destinations/{destination.slug}</p>

      <div className="mt-4">
        <DestinationForm action={boundUpdate} initial={destination} />
      </div>

      <section className="mt-6 rounded-lg border border-zinc-200 bg-white p-5">
        <h2 className="font-semibold text-zinc-900">Cities</h2>
        <div className="mt-3">
          <CityManager cities={destination.cities} createCityAction={boundCreateCity} />
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-zinc-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-zinc-900">Packages in {destination.name}</h2>
          <Link href={`/admin/packages/new?destinationId=${destination.id}`} className="text-xs font-medium text-blue-700">
            + New Package
          </Link>
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          {destination.packages.map((p) => (
            <li key={p.id} className="flex items-center justify-between">
              <Link href={`/admin/packages/${p.id}`} className="text-blue-700">
                {p.title}
              </Link>
              <span className={`text-xs ${p.published ? "text-green-600" : "text-zinc-400"}`}>
                {p.published ? "Published" : "Unpublished"}
              </span>
            </li>
          ))}
          {destination.packages.length === 0 && <p className="text-zinc-500">No packages yet.</p>}
        </ul>
      </section>
    </div>
  );
}
