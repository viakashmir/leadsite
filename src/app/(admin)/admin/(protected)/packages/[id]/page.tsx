import { notFound } from "next/navigation";
import Link from "next/link";
import { getDestinationsWithCities } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import AdminPackageForm from "@/components/admin/AdminPackageForm";
import ConfirmDeleteForm from "@/components/admin/ConfirmDeleteForm";
import { deletePackage, fetchPackagePhoto, updateAdminPackage } from "@/lib/adminActions";

export default async function EditAdminPackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [pkg, destinations] = await Promise.all([
    prisma.package.findUnique({ where: { id }, include: { agent: true } }),
    getDestinationsWithCities(),
  ]);
  if (!pkg) notFound();

  const boundUpdate = updateAdminPackage.bind(null, pkg.id);
  const boundDelete = deletePackage.bind(null, pkg.id);
  const boundFetchPhoto = fetchPackagePhoto.bind(null, pkg.id);

  return (
    <div className="max-w-xl">
      <div className="flex items-center justify-between">
        <Link href="/admin/packages" className="text-sm text-blue-700">
          ← All packages
        </Link>
        <ConfirmDeleteForm
          action={boundDelete}
          confirmText={`Delete "${pkg.title}"? This can't be undone.`}
        />
      </div>
      <h1 className="mt-2 text-lg font-semibold text-zinc-900">{pkg.title}</h1>
      <p className="text-xs text-zinc-500">
        /packages/{pkg.slug}
        {pkg.agent ? ` · Submitted by ${pkg.agent.companyName}` : " · Curated"}
      </p>

      <div className="mt-4">
        <AdminPackageForm
          action={boundUpdate}
          destinations={destinations}
          initial={pkg}
          fetchPhotoAction={boundFetchPhoto}
        />
      </div>
    </div>
  );
}
