import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import { CountdownBanner } from "@/components/home/CountdownBanner";
import {
  Calendar,
  Gamepad2,
  Monitor,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/release-date" },
  title: "GTA 6 Release Date: November 19, 2026 & Platforms",
  description:
    "Grand Theft Auto VI released on November 19, 2026 for PlayStation 5 and Xbox Series X|S. See the launch date, platforms, and related updates.",
};

export default function ReleaseDatePage() {
  const platforms = [
    {
      name: "PlayStation 5",
      type: "Released November 19, 2026",
      status: "Available now",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      specs: "Confirmed launch platform for Grand Theft Auto VI.",
    },
    {
      name: "Xbox Series X | S",
      type: "Released November 19, 2026",
      status: "Available now",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      specs: "Confirmed launch platform for Grand Theft Auto VI.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "Release Date", href: "/release-date" }]} />

      {/* Header */}
      <header className="pb-6 border-b border-[#222233] space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wide">
          <Calendar className="w-3.5 h-3.5" />
          <span>RELEASED NOVEMBER 19, 2026 &bull; PS5 &bull; XBOX SERIES X|S</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Grand Theft Auto VI Release Date & Platforms
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
          Grand Theft Auto VI launched on PlayStation 5 and Xbox Series X|S on November 19, 2026.
          This page collects the release date and currently confirmed platform information.
        </p>
      </header>

      {/* Countdown Module */}
      <CountdownBanner />

      {/* Platform Breakdown Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-pink-400" />
          <span>Launch Platforms & Technical Specifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="p-5 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 transition-all flex flex-col justify-between space-y-3 shadow-lg"
            >
              <div className="space-y-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${p.statusColor}`}>
                  {p.status}
                </span>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <span className="text-xs text-zinc-500 block">{p.type}</span>
                <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-zinc-800">
                  {p.specs}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 text-xs text-zinc-400">
                Official Rockstar Confirmation
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Rockstar Timeline Context */}
      <section className="p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-400" />
          <span>Understanding the Rockstar Release Cadence</span>
        </h2>
        <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
          <p>
            Rockstar has not announced a Windows PC release date for Grand Theft Auto VI. The dates below
            show past release timing for earlier games and do not predict a PC version for GTA VI.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#171724] border border-[#60416c]">
              <span className="text-xs font-bold text-pink-400 block mb-1">Grand Theft Auto V Cadence</span>
              Console Release: September 17, 2013<br />
              PC Release: April 14, 2015 (~19 months after console)
            </div>
            <div className="p-3.5 rounded-xl bg-[#171724] border border-[#60416c]">
              <span className="text-xs font-bold text-purple-400 block mb-1">Red Dead Redemption 2 Cadence</span>
              Console Release: October 26, 2018<br />
              PC Release: November 5, 2019 (~12 months after console)
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order CTA Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-950/40 via-[#351b42] to-purple-950/40 border border-[#3b214c] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Explore GTA VI Editions</h3>
          <p className="text-xs text-zinc-400 mt-1">
            Review the Standard and Ultimate editions and their published details.
          </p>
        </div>
        <Link
          href="/editions"
          className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30 flex items-center gap-2 shrink-0"
        >
          <span>View Editions</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
