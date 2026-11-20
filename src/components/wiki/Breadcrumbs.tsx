import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint"
    >
      <Link href="/" className="transition-colors hover:text-coral">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-2">
          <span aria-hidden>/</span>
          {i === items.length - 1 ? (
            <span className="text-muted">{item.label}</span>
          ) : (
            <Link href={item.href} className="transition-colors hover:text-coral">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
