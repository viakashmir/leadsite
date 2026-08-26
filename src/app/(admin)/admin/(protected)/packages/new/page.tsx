import { getDestinationsWithCities } from "@/lib/data";
import AdminPackageForm from "@/components/admin/AdminPackageForm";
import { createAdminPackage } from "@/lib/adminActions";

export default async function NewAdminPackagePage({
  searchParams,
}: {
  searchParams: Promise<{ destinationId?: string }>;
}) {
  const { destinationId } = await searchParams;
  const destinations = await getDestinationsWithCities();

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">New Package</h1>
      <div className="mt-4">
        <AdminPackageForm
          action={createAdminPackage}
          destinations={destinations}
          defaultDestinationId={destinationId}
        />
      </div>
    </div>
  );
}
