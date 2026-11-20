import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Disc,
  ArrowRight,
  CreditCard,
  Tag,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/editions" },
  title: "GTA 6 Editions: Standard vs Ultimate Edition",
  description:
    "Compare the Standard and Ultimate editions of Grand Theft Auto VI and review the available edition details and platform information.",
};

export default function EditionsPage() {
  const editions = [
    {
      name: "Standard Edition",
      price: "$79.99",
      badge: "Base Game",
      badgeColor: "bg-zinc-800 text-zinc-300 border-zinc-700",
      description: "The complete Grand Theft Auto VI experience featuring the full story campaign and GTA Online next-generation access.",
      features: [
        "Full Grand Theft Auto VI Base Game",
        "Dual Protagonist Campaign (Lucia & Jason)",
        "State of Leonida & Vice City Map Access",
        "Pre-Order Bonus: Vice City Cash Pack ($500,000 in-game currency)",
        "Day One Next-Gen Console Optimization (PS5 & Xbox Series X|S)",
      ],
      isPopular: false,
    },
    {
      name: "Ultimate Edition",
      price: "$99.99",
      badge: "Most Popular",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      description: "The premier collectors package including exclusive weapon blueprints, custom vehicles, and premium styling packs.",
      features: [
        "Full Grand Theft Auto VI Base Game",
        "Dual Protagonist Campaign (Lucia & Jason)",
        "Pre-Order Bonus: Vice City Cash Pack ($1,500,000 in-game currency)",
        "Exclusive Bravado Banshee 'Sunset Vice' Custom Livery",
        "Ammu-Nation Combat Blueprint Pack (Custom Duke 556 & Pistol)",
        "Lucia & Jason 'Outlaw Duo' Exclusive Outfit Collection",
        "Digital Map & Expanded Soundtrack Download Token",
        "Day One Next-Gen Console Optimization",
      ],
      isPopular: true,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "Pre-Order & Editions", href: "/editions" }]} />

      {/* Header Banner */}
      <header className="pb-6 border-b border-[#222233] space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRE-ORDERS OPEN AT $79.99 &bull; TWO EDITIONS, ONE LAUNCH DAY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Grand Theft Auto VI Editions & Pre-Order Guide
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
          Rockstar opened Grand Theft Auto VI pre-orders featuring a Standard Edition at $79.99 and
          an Ultimate Edition at $99.99, both targeting PlayStation 5 and Xbox Series X|S for November 19, 2026.
        </p>
      </header>

      {/* Hero Showcase Image */}
      <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-[#2a2a3c] bg-[#2c2853]">
        <Image
          src="/images/locations/vice-city-02-1920.webp"
          alt="GTA VI Vice City Skyline Sunset"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Target Launch Date</span>
            <div className="text-2xl sm:text-3xl font-black text-white">November 19, 2026</div>
            <div className="text-xs text-zinc-300 mt-1">PlayStation 5 &bull; Xbox Series X|S &bull; PC to follow</div>
          </div>
          <Link
            href="/release-date"
            className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30 flex items-center gap-1.5 shrink-0"
          >
            <span>View Release Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Editions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editions.map((ed) => (
          <div
            key={ed.name}
            className={`p-6 sm:p-8 rounded-2xl bg-[#2c2853] border flex flex-col justify-between transition-all ${
              ed.isPopular
                ? "border-pink-500 shadow-[0_0_30px_rgba(244,63,133,0.15)] ring-1 ring-pink-500/50"
                : "border-[#60416c] hover:border-zinc-700"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${ed.badgeColor}`}>
                  {ed.badge}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white">{ed.price}</span>
              </div>

              <h2 className="text-2xl font-bold text-white">{ed.name}</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">{ed.description}</p>

              <div className="pt-4 border-t border-zinc-800 space-y-2.5">
                <span className="text-xs font-bold text-zinc-300 block mb-2">What is included:</span>
                {ed.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80">
              <a
                href="https://www.rockstargames.com/VI"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  ed.isPopular
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-lg shadow-pink-600/30"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Pre-Order on Official Channels</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pre-Order FAQs */}
      <section className="p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Frequently Asked Pre-Order Questions</span>
        </h2>
        <div className="space-y-3 text-xs text-zinc-300 divide-y divide-zinc-800/60">
          <div className="pt-2">
            <strong className="text-white block mb-1">Does the Standard Edition include the complete story?</strong>
            Yes, both the Standard ($79.99) and Ultimate ($99.99) editions contain the full uncompromised Grand Theft Auto VI single-player storyline with Lucia and Jason.
          </div>
          <div className="pt-3">
            <strong className="text-white block mb-1">When will the PC version become available for pre-order?</strong>
            Rockstar has historically released PC ports 12 to 18 months after initial console release. Official PC pre-orders have not yet opened.
          </div>
          <div className="pt-3">
            <strong className="text-white block mb-1">Will physical disc editions be produced?</strong>
            Yes, physical boxed copies for PlayStation 5 and Xbox Series X|S will be stocked by authorized global retailers.
          </div>
        </div>
      </section>
    </div>
  );
}
