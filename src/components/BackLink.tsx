import Link from "next/link";

export default function BackLink({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <header className="text:black mx-auto max-w-2xl px-4 py-6">
      <Link
        href={href}
        className={`text:sm font-bold hover:underline ${className ?? ""}`}
      >
        « Back
      </Link>
    </header>
  );
}
