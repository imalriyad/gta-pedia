import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Flame, ArrowRight } from "lucide-react";
import {
  getLatestUpdates,
  getFeaturedGuide,
  getPopularPages,
} from "@/content/repositories";

export function HomeContentGrid() {
  const updates = getLatestUpdates();
  const featured = getFeaturedGuide();
  const popular = getPopularPages();

  return (
    <div className="w-full my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Column 1: Latest Updates (lg:col-span-3) */}
      <section className="lg:col-span-3 flex flex-col justify-between p-4 rounded-2xl bg-[#2c2853] border border-[#60416c] shadow-sm">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-white tracking-wide">
              Latest Updates
            </h2>
            <Link
              href="/updates"
              className="text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1 font-medium transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {updates.map((item) => (
              <Link
                key={item.id}
                href={item.slug ? `/${item.category}/${item.slug}` : `/${item.category}`}
                className="group flex items-center gap-3 p-2 rounded-xl bg-[#3d376f]/60 hover:bg-[#1f1f30] border border-[#28283a]/50 hover:border-pink-500/40 transition-all duration-200"
              >
                <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-pink-300 truncate">
                    <span className="text-pink-400 font-bold">{item.type}: </span>
                    {item.title}
                  </p>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">
                    {item.timeAgo}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Column 2: Featured Guide (lg:col-span-6) */}
      <section className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#2c2442] shadow-md bg-[#281333] group flex flex-col justify-end min-h-[280px] p-6">
        {/* Background Image of Ferris Wheel & Skyline */}
        <div className="absolute inset-0 z-0">
          <Image
            src={featured?.thumbnail || "/images/guides/featured-100-guide.png"}
            alt="100% Completion Guide"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover group-hover:scale-102 transition-transform duration-500"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090d]/80 via-transparent to-transparent" />
        </div>

        {/* Top badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3d376f]/80 backdrop-blur-sm border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Featured Guide</span>
        </div>

        {/* Content bottom */}
        <div className="relative z-10 space-y-2 max-w-lg">
          <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-pink-200 transition-colors">
            100% Completion Guide
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
            Get every achievement, collect every item, and uncover all secrets
            in GTA VI.
          </p>

          <div className="pt-2">
            <Link
              href="/guides/100-percent-completion-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-pink-300 bg-[#3b1e48]/90 hover:bg-[#202035] border border-pink-500/40 hover:border-pink-500 shadow-[0_0_12px_rgba(244,63,133,0.25)] transition-all"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Column 3: Popular Pages (lg:col-span-3) */}
      <section className="lg:col-span-3 p-4 rounded-2xl bg-[#2c2853] border border-[#60416c] shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400/20" />
            <h2 className="text-sm font-bold text-white tracking-wide">
              Popular Pages
            </h2>
          </div>

          <div className="space-y-2">
            {popular.map((item) => (
              <Link
                key={item.rank}
                href={`/${item.category}/${item.slug}`}
                className="group flex items-center justify-between p-2 rounded-xl bg-[#3d376f]/60 hover:bg-[#1f1f30] border border-[#28283a]/40 hover:border-purple-500/40 transition-all duration-200"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-pink-400 w-4 text-center">
                    {item.rank}
                  </span>
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-zinc-200 group-hover:text-white truncate">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

