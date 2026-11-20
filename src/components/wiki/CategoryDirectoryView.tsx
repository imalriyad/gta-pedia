"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CategoryMeta } from "@/lib/categories";
import { VerificationLegend } from "@/components/ui/VerificationTag";
import { VehicleSilhouette, WeaponSilhouette } from "@/components/ui/Silhouettes";
import {
  CharacterCard,
  CollectibleCard,
  GenericCard,
  GuideCard,
  LocationCard,
  VehicleCard,
  WeaponCard,
} from "./EntityCards";
import { Breadcrumbs } from "./Breadcrumbs";

type Entity = any;

export function CategoryDirectoryView({
  meta,
  entities,
  stats,
  note,
}: {
  meta: CategoryMeta;
  entities: Entity[];
  stats?: { label: string; value: string }[];
  note?: string;
}) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");

  const groupKey =
    meta.key === "vehicles"
      ? "vehicleClass"
      : meta.key === "weapons"
      ? "weaponClass"
      : meta.key === "guides"
      ? "difficulty"
      : null;

  const groups = useMemo(() => {
    if (!groupKey) return [];
    const map = new Map<string, number>();
    entities.forEach((e) => {
      const g = e[groupKey] || "Other";
      map.set(g, (map.get(g) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [entities, groupKey]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      if (group !== "all" && (e[groupKey!] || "Other") !== group) return false;
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        (e.summary || "").toLowerCase().includes(q) ||
        (e.manufacturer || "").toLowerCase().includes(q) ||
        (e.realWorldInspiration || "").toLowerCase().includes(q) ||
        (e.tags || []).join(" ").toLowerCase().includes(q)
      );
    });
  }, [entities, query, group, groupKey]);

  const isVisual = ["characters", "locations", "vehicles", "weapons", "wildlife"].includes(meta.key);

  return (
    <div>
      {/* Editorial header */}
      <header className="relative overflow-hidden border-b border-line">
        {isVisual && meta.image ? (
          <>
            <Image
              src={meta.image}
              alt=""
              fill
              sizes="100vw"
              quality={68}
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 grid-lines opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink" />
            <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-[520px] items-center justify-center text-paper/[0.06] md:flex">
              {meta.key === "vehicles" ? (
                <VehicleSilhouette kind="supercar" />
              ) : meta.key === "weapons" ? (
                <WeaponSilhouette kind="rifle" />
              ) : null}
            </div>
          </>
        )}

        <div className="container-x relative py-10 md:py-14">
          <Breadcrumbs items={[{ label: meta.label, href: meta.href }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="mono text-[10px] tracking-[0.16em]" style={{ color: meta.accent }}>
                  {meta.index}
                </span>
                <span className="eyebrow">{meta.eyebrow}</span>
              </div>
              <h1 className="mt-3 display text-[clamp(2.8rem,7vw,5.6rem)] text-paper">
                {meta.label}
              </h1>
              <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-paper-dim/85">
                {meta.description}
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-5 border-t border-line pt-4 lg:min-w-[320px]">
              {(stats || [
                { label: "Records", value: String(entities.length) },
                { label: "Tier", value: "Evidence-led" },
                { label: "Updated", value: "Nov 2026" },
              ]).map((s) => (
                <div key={s.label}>
                  <dt className="mono text-[8px] uppercase tracking-[0.14em] text-faint">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-[19px] font-semibold text-paper">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="sticky top-[72px] z-30 border-b border-line bg-ink/95 backdrop-blur-xl">
        <div className="container-x flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar -mx-1 flex items-center gap-1 overflow-x-auto px-1">
            <button
              onClick={() => setGroup("all")}
              className={clsx(
                "shrink-0 px-3 py-1.5 mono text-[9px] uppercase tracking-[0.1em] transition-colors",
                group === "all" ? "bg-paper text-ink" : "text-muted hover:text-paper"
              )}
            >
              All <span className="opacity-60">{entities.length}</span>
            </button>
            {groups.map(([g, count]) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={clsx(
                  "shrink-0 px-3 py-1.5 mono text-[9px] uppercase tracking-[0.1em] transition-colors",
                  group === g
                    ? "bg-paper text-ink"
                    : "text-muted hover:bg-paper/5 hover:text-paper"
                )}
              >
                {g} <span className="opacity-60">{count}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative min-w-0 flex-1 sm:w-64">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-faint" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Filter ${meta.label.toLowerCase()}…`}
                className="h-9 w-full border border-line bg-transparent pl-8 pr-8 text-[11px] text-paper outline-none placeholder:text-faint focus:border-paper/40"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear filter"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-faint hover:text-paper"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-faint sm:flex">
              <SlidersHorizontal className="h-3 w-3" />
              {filtered.length} shown
            </span>
          </div>
        </div>
      </div>

      <div className="container-x py-8 md:py-12">
        {filtered.length === 0 ? (
          <div className="border border-line py-24 text-center">
            <p className="font-display text-2xl text-paper">Nothing in this cut.</p>
            <p className="mt-2 text-[12px] text-muted">
              Clear the filter, or try a different spelling.
            </p>
            <button onClick={() => { setQuery(""); setGroup("all"); }} className="btn btn-ghost mt-5">
              Reset filters
            </button>
          </div>
        ) : meta.key === "characters" ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((e, i) => (
              <CharacterCard key={e.id} item={e} index={i} />
            ))}
          </div>
        ) : meta.key === "locations" ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((e, i) => (
              <LocationCard key={e.id} item={e} index={i} />
            ))}
          </div>
        ) : meta.key === "vehicles" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((e, i) => (
              <VehicleCard key={e.id} item={e} index={i} />
            ))}
          </div>
        ) : meta.key === "weapons" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e, i) => (
              <WeaponCard key={e.id} item={e} index={i} />
            ))}
          </div>
        ) : meta.key === "collectibles" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e, i) => (
              <CollectibleCard key={e.id} item={e} index={i} />
            ))}
          </div>
        ) : meta.key === "guides" ? (
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              {filtered.map((e, i) => (
                <GuideCard key={e.id} item={e} index={i} />
              ))}
            </div>
            <aside className="h-fit border border-line p-5 lg:sticky lg:top-32">
              <span className="eyebrow text-teal">How to read this</span>
              <p className="mt-3 text-[12px] leading-relaxed text-muted">
                Every guide separates what Rockstar has confirmed from what is reported
                or still unknown. None of these pages repeat fabricated code lists or
                stat sheets.
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <VerificationLegend />
              </div>
            </aside>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((e, i) => (
              <GenericCard key={e.id} item={e} index={i} />
            ))}
          </div>
        )}

        {note && (
          <p className="mt-12 max-w-3xl border-l-2 border-coral pl-4 text-[11px] leading-relaxed text-faint">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
