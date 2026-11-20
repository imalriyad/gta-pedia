import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

export function SectionHead({
  index,
  eyebrow,
  title,
  dek,
  href,
  linkLabel = "View all",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  dek?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-wrap items-end justify-between gap-6 pb-5 border-b border-line", className)}>
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {index && <span className="mono text-[9px] tracking-[0.16em] text-faint">{index}</span>}
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="mt-2 display text-[clamp(1.7rem,3.4vw,2.6rem)] text-paper">
          {title}
        </h2>
        {dek && (
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted">
            {dek}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-coral"
        >
          {linkLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
