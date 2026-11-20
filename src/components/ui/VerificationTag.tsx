import React from "react";
import clsx from "clsx";

const STATUS: Record<
  string,
  { label: string; color: string; dot: string }
> = {
  official: { label: "Confirmed", color: "text-teal", dot: "bg-teal" },
  confirmed: { label: "Confirmed", color: "text-teal", dot: "bg-teal" },
  observed: { label: "Observed", color: "text-gold", dot: "bg-gold" },
  "community-reported": { label: "Reported", color: "text-gold", dot: "bg-gold" },
  unverified: { label: "Unverified", color: "text-faint", dot: "bg-faint" },
  speculation: { label: "Rumor", color: "text-violet", dot: "bg-violet" },
};

export function VerificationTag({
  status,
  showLabel = true,
  className,
}: {
  status: string;
  showLabel?: boolean;
  className?: string;
}) {
  const info = STATUS[status] ?? {
    label: "Unverified",
    color: "text-faint",
    dot: "bg-faint",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em]",
        info.color,
        className
      )}
      title={`Evidence tier: ${info.label}`}
    >
      <span className={clsx("h-1 w-1 rounded-full", info.dot)} />
      {showLabel && info.label}
    </span>
  );
}

export function VerificationLegend({ className }: { className?: string }) {
  const tiers = [
    ["Confirmed", "bg-teal", "Rockstar or direct official material"],
    ["Observed", "bg-gold", "Visible in official footage or screenshots"],
    ["Reported", "bg-gold", "Credible outlet or community record"],
    ["Rumor", "bg-violet", "Unverified — not presented as fact"],
  ];
  return (
    <div className={clsx("grid gap-2 sm:grid-cols-2", className)}>
      {tiers.map(([label, dot, desc]) => (
        <div key={label} className="flex items-baseline gap-2">
          <span className={clsx("h-1 w-1 shrink-0 rounded-full", dot)} />
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.12em] text-paper-dim">
              {label}
            </span>
            <span className="ml-2 text-[11px] text-muted">{desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
