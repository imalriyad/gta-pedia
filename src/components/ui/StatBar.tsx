import clsx from "clsx";

export function StatBar({
  label,
  value,
  max = 100,
  accent = "#58c9c1",
}: {
  label: string;
  value: number;
  max?: number;
  accent?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="grid grid-cols-[5.5rem_1fr_2rem] items-center gap-3">
      <span className="mono text-[9px] uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
      <div className="relative h-[3px] w-full bg-paper/10">
        <span
          className="absolute inset-y-0 left-0"
          style={{ width: `${pct}%`, background: accent }}
        />
      </div>
      <span className="mono text-right text-[10px] tabular-nums text-paper-dim">
        {value}
      </span>
    </div>
  );
}

export function StatBlock({
  stats,
  accent = "#58c9c1",
  note,
  className,
}: {
  stats: Record<string, number | string | undefined>;
  accent?: string;
  note?: string;
  className?: string;
}) {
  const keys = [
    ["speed", "Speed"],
    ["acceleration", "Accel."],
    ["braking", "Braking"],
    ["handling", "Handling"],
    ["durability", "Durability"],
    ["damage", "Damage"],
    ["accuracy", "Accuracy"],
    ["range", "Range"],
    ["fireRate", "Fire rate"],
    ["reloadSpeed", "Reload"],
    ["magazine", "Magazine"],
  ] as const;
  const rows = keys.filter(([k]) => typeof stats[k] === "number");
  if (!rows.length) return null;
  return (
    <div className={clsx("space-y-3", className)}>
      {rows.map(([key, label]) => (
        <StatBar
          key={key}
          label={label}
          value={stats[key] as number}
          max={key === "magazine" ? 40 : 100}
          accent={accent}
        />
      ))}
      {note && (
        <p className="pt-1 text-[10px] leading-relaxed text-faint">{note}</p>
      )}
    </div>
  );
}
