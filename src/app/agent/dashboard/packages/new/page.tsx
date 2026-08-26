import { getDestinationsWithCities } from "@/lib/data";
import PackageForm from "@/components/agent/PackageForm";

export default async function NewAgentPackagePage() {
  const destinations = await getDestinationsWithCities();

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">Post a Tour Package — Free</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Your package goes live on the public site and starts receiving enquiries right away.
      </p>
      <div className="mt-4">
        <PackageForm destinations={destinations} />
      </div>
    </div>
  );
}
