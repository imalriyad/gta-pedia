"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { searchWiki } from "@/lib/search/client";
import { categoryMeta } from "@/lib/categories";
import clsx from "clsx";

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setFilter("all");
      setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const results = useMemo(
    () => (query.trim() ? searchWiki(query, filter).slice(0, 24) : []),
    [query, filter]
  );

  const filters = [
    ["all", "Everything"],
    ["characters", "Characters"],
    ["locations", "Locations"],
    ["vehicles", "Vehicles"],
    ["weapons", "Weapons"],
    ["guides", "Guides"],
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[75] flex items-start justify-center bg-ink/80 px-4 pt-[8vh] backdrop-blur-md sm:pt-[12vh]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search the archive"
    >
      <div className="w-full max-w-2xl border border-line bg-ink-2 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
          <Search className="h-4 w-4 shrink-0 text-coral" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search characters, vehicles, weapons, places…"
            className="w-full bg-transparent text-[14px] text-paper outline-none placeholder:text-faint"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search" className="text-faint hover:text-paper">
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="mono border border-line px-1.5 py-0.5 text-[9px] text-faint">ESC</kbd>
        </div>

        <div className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line px-3 py-2">
          {filters.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={clsx(
                "shrink-0 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors",
                filter === id
                  ? "bg-coral text-ink"
                  : "text-muted hover:bg-paper/5 hover:text-paper"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div className="px-5 py-10">
              <p className="eyebrow">Try a name</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Lucia", "Vice City", "Banshee", "Cheetah", "Girardi ES9", "Leonida Keys"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="border border-line px-3 py-1.5 text-[11px] text-paper-dim transition-colors hover:border-coral hover:text-coral"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <p className="font-display text-lg text-paper">No record found.</p>
              <p className="mt-1 text-[12px] text-muted">
                Try a broader term, or browse the{" "}
                <button onClick={() => { onClose(); router.push("/vehicles"); }} className="text-coral underline">
                  full index
                </button>
                .
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-line-soft">
              {results.map((item) => {
                const meta = categoryMeta(item.category);
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onClose();
                        router.push(`/${item.category}/${item.slug}`);
                      }}
                      className="group flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-paper/[0.04]"
                    >
                      <span
                        className="mono w-16 shrink-0 text-[8px] uppercase tracking-[0.12em]"
                        style={{ color: meta.accent }}
                      >
                        {meta.label}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-[15px] text-paper group-hover:text-coral">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block truncate text-[11px] text-muted">
                          {item.summary}
                        </span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-faint transition-transform group-hover:translate-x-1 group-hover:text-coral" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
          <span className="mono text-[8px] uppercase tracking-[0.14em] text-faint">
            {results.length} {results.length === 1 ? "record" : "records"}
          </span>
          <span className="mono text-[8px] uppercase tracking-[0.14em] text-faint">
            Evidence-tiered · no leaks
          </span>
        </div>
      </div>
    </div>
  );
}
