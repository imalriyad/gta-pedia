"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Sparkles, ArrowRight, Disc } from "lucide-react";

interface HeroBannerProps {
  onSearchSubmit?: (query: string) => void;
}

export function HeroBanner({ onSearchSubmit }: HeroBannerProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearchSubmit) {
        onSearchSubmit(searchQuery.trim());
      } else {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  return (
    <section className="relative w-full rounded-2xl overflow-hidden my-4 border border-[#2a233d] shadow-2xl bg-[#0d0d17]">
      {/* Background artwork: Real 1920p Vice City Sunset Rooftop */}
      <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[520px]">
        <Image
          src="/images/locations/vice-city-02-1920.webp"
          alt="Vice City at sunset, rooftop pool overlooking beach"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        />

        {/* Gradient dark overlays for high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090d]/95 via-[#09090d]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-black/30 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-center">
          <div className="max-w-xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[11px] font-bold tracking-wide backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span>GRAND THEFT AUTO VI &bull; NOV 19, 2026 &bull; PS5 &bull; XBOX SERIES X|S</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Vice City <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-400 drop-shadow-[0_0_25px_rgba(244,63,133,0.7)]">
                Returns
              </span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg drop-shadow-md">
              Your complete, evidence-tiered guide to Grand Theft Auto VI.
              Explore verified characters, weapons, vehicles, the Leonida map, and gameplay analysis.
            </p>

            {/* In-hero Search form */}
            <form
              onSubmit={handleSearch}
              className="pt-1 flex items-center gap-2 max-w-md w-full"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search characters, weapons, locations..."
                  className="w-full bg-[#2a1536]/90 text-white placeholder-zinc-400 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-zinc-700/80 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_15px_rgba(244,63,133,0.4)] transition-all cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/editions"
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30 flex items-center gap-1.5"
              >
                <Disc className="w-3.5 h-3.5" />
                <span>Pre-Order Guide</span>
              </Link>
              <a
                href="#explore"
                className="px-4 py-2 rounded-xl bg-[#44234f]/80 hover:bg-[#54305f] text-zinc-300 hover:text-white text-xs font-bold border border-zinc-700 transition-all flex items-center gap-1.5"
              >
                <span>Explore the Wiki</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* "Vice City Awaits" script text matching mockup */}
        <div className="hidden md:block absolute right-8 lg:right-16 bottom-12 z-20 pointer-events-none select-none transform rotate-[-6deg]">
          <span className="font-script text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-500 drop-shadow-[0_0_25px_rgba(244,63,133,0.85)] tracking-wide">
            Vice City Awaits
          </span>
        </div>
      </div>
    </section>
  );
}
