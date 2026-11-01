// Phone or email shown in full for admins, as a tap-to-call / tap-to-email link.
export default function ContactLink({ value, className = "" }: { value: string; className?: string }) {
  const href = value.includes("@") ? `mailto:${value}` : `tel:${value.replace(/[^\d+]/g, "")}`;
  return (
    <a href={href} className={`text-zinc-800 hover:text-blue-700 hover:underline ${className}`}>
      {value}
    </a>
  );
}
