import DestinationForm from "@/components/admin/DestinationForm";
import { createDestination } from "@/lib/adminActions";

export default function NewDestinationPage() {
  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">New Destination</h1>
      <div className="mt-4">
        <DestinationForm action={createDestination} />
      </div>
    </div>
  );
}
