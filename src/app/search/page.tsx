"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, ShieldAlert } from "lucide-react";
import { searchWiki } from "@/lib/search/client";
import { VerificationBadge } from "@/components/wiki/VerificationBadge";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      setResults(searchWiki(initialQuery, category));
    }
  }, [initialQuery]);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchWiki(query, category));
    } else {
      setResults([]);
    }
  }, [query, category]);

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "characters", label: "Characters" },
    { id: "locations", label: "Locations" },
    { id: "guides", label: "Guides" },
    { id: "secrets", label: "Secrets" },
    { id: "vehicles", label: "Vehicles" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Breadcrumbs items={[{ label: "Search", href: "/search" }]} />

      <h1 className="text-3xl font-black text-white mt-4 mb-6">Search GTA6Pedia</h1>

      {/* Search Input Box */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search characters, locations, vehicles, and more..."
          className="w-full bg-[#2c2853] text-white placeholder-zinc-500 pl-12 pr-4 py-3.5 rounded-2xl border border-[#60416c] focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-md text-sm sm:text-base"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
              category === c.id
                ? "bg-pink-600 text-white shadow-sm"
                : "bg-[#351b42] text-zinc-400 hover:text-white hover:bg-[#452452]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div className="space-y-3">
        {query.trim() === "" ? (
          <p className="text-zinc-500 text-sm py-8 text-center">
            Enter a search term above to explore verified records across Vice City.
          </p>
        ) : results.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#2c2853] border border-[#60416c] text-center text-zinc-400 text-sm">
            No matching wiki articles found for &quot;{query}&quot;. Try a different keyword or category.
          </div>
        ) : (
          results.map((item) => (
            <Link
              key={item.id}
              href={`/${item.category}/${item.slug}`}
              className="group block p-4 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/50 hover:bg-[#3b1e48] transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <VerificationBadge status={item.verificationStatus} />
                    {item.spoilerLevel > 1 && (
                      <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30">
                        <ShieldAlert className="w-3 h-3" />
                        <span>Spoiler Level {item.spoilerLevel}</span>
                      </span>
                    )}
                  </div>
                  <h2 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-zinc-500">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}

