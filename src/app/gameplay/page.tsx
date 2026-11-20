import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import {
  Gamepad2,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Crosshair,
  Smartphone,
  Car,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/gameplay" },
  title: "GTA VI Gameplay, Plot & Story Breakdown: Vice City, Lucia & Jason",
  description:
    "Comprehensive guide to Grand Theft Auto VI gameplay, story narrative, Bonnie & Clyde dynamic, dual protagonists Lucia & Jason, and next-generation mechanics.",
};

export default function GameplayPage() {
  const gameplayFeatures = [
    {
      title: "Bonnie & Clyde Dynamic",
      desc: "Lucia and Jason operate under a mutual pact of trust and criminal ambition. Players switch seamlessly between both characters during free-roam and coordinated heist operations.",
      icon: Users,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    },
    {
      title: "Tactical Trunk & Holster Inventory",
      desc: "Inspired by Red Dead Redemption 2, players carry a limited sidearm and long gun loadout on their person. Heavy weaponry, extra ammunition, and specialized tactical gear must be stashed inside your personal vehicle trunk.",
      icon: Crosshair,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
    {
      title: "Nine1F Social Media & Livestreams",
      desc: "A fully integrated smartphone platform parodies modern viral culture. Watch vertical streams, witness environmental chaos reported by in-game NPCs, and track public reactions to your criminal exploits.",
      icon: Smartphone,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Dynamic Law Enforcement AI",
      desc: "Police pursuit tactics feature roadblock coordination, PIT maneuvers, license plate tracking, and perimeter containment searches that adapt realistically to your evasion routes.",
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "Story & Gameplay", href: "/gameplay" }]} />

      {/* Header */}
      <header className="pb-6 border-b border-[#222233] space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OFFICIAL GAMEPLAY &amp; STORY OVERVIEW</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          The Plot, Story &amp; Gameplay of Grand Theft Auto VI
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
          Grand Theft Auto VI marks an explosive return to Vice City, Rockstar&apos;s fictionalized
          vision of Miami. Discover the narrative depth, dual protagonists, and groundbreaking mechanics.
        </p>
      </header>

      {/* Main Narrative Section with Real High-Res Asset */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">The Story</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              An Outlaw Partnership in Modern Vice City
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                Grand Theft Auto VI centers on dual protagonists <strong>Lucia</strong> and <strong>Jason</strong>,
                drawing thematic inspiration from the infamous American criminal duo Bonnie and Clyde.
              </p>
              <p>
                Lucia becomes the first female protagonist in a mainline Grand Theft Auto title since the original 1997 game.
                Introduced in the debut trailer clad in prison attire at the Leonida Department of Corrections, her story
                follows her return to freedom and an escalating series of high-stakes robberies alongside Jason.
              </p>
              <p>
                Set in contemporary times, the storyline explores themes of social media virality, modern cartel operations,
                and the relentless pursuit of the American dream against the sun-drenched, neon-lit backdrop of Leonida.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/characters/lucia"
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30"
              >
                Meet Lucia Caminos
              </Link>
              <Link
                href="/characters/jason-duval"
                className="px-4 py-2 rounded-xl bg-[#44234f] hover:bg-[#54305f] text-zinc-200 text-xs font-bold border border-zinc-700 transition-all"
              >
                Meet Jason Duval
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[260px] sm:h-[340px] relative rounded-xl overflow-hidden border border-[#2a2a3c]">
            <Image
              src="/images/characters/lucia-caminos-01-1920.webp"
              alt="Lucia in Vice City"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs font-semibold text-zinc-200">
              Official Trailer 1 &bull; In-Game Engine Capture
            </div>
          </div>
        </div>
      </section>

      {/* Core Gameplay Features Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-purple-400" />
          <span>Next-Generation Gameplay Innovations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gameplayFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${feat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{feat.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* World Exploration Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#351b42] to-pink-950/40 border border-[#3b2555] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Expansive Setting</span>
          <h3 className="text-xl font-black text-white">The State of Leonida</h3>
          <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
            From the bustling nightlife avenues of Ocean Beach to the winding bayous of Grassrivers
            and the serene waters of the Leonida Keys, explore over six distinct regional ecosystems.
          </p>
        </div>
        <Link
          href="/map"
          className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30 flex items-center gap-2 shrink-0"
        >
          <span>Explore Interactive Map</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
