import { formatDate } from "@/lib/format";

const TYPE_LABEL: Record<string, string> = {
  TALKED: "Talked",
  INFO: "Info",
  LOGIN: "Login",
  REGISTRATION: "Registration",
  STATUS_CHANGE: "Status Change",
  RM_ASSIGNED: "RM Assigned",
  CREATED: "Created",
  VERIFIED: "Verified",
  UNLOCKED: "Unlocked",
};

export default function Timeline({
  items,
}: {
  items: { id: string; type: string; actor: string; detail: string; createdAt: Date }[];
}) {
  if (items.length === 0) {
    return <p className="text-sm text-zinc-500">No activity yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="border-l-2 border-zinc-200 pl-3">
          <p className="text-sm font-medium text-zinc-900">
            {TYPE_LABEL[item.type] ?? item.type}
            <span className="ml-2 text-xs font-normal text-zinc-400">by {item.actor}</span>
          </p>
          <p className="text-sm text-zinc-600">{item.detail}</p>
          <p className="text-xs text-zinc-400">{formatDate(item.createdAt)}</p>
        </li>
      ))}
    </ul>
  );
}
