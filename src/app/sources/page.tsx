import { Metadata } from "next";
import { ALL_SOURCES } from "@/content/repositories";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import { ExternalLink, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/sources" },
  title: "GTA 6 Wiki Sources & Verification Policy",
  description:
    "Our editorial standards, verification hierarchy, citation methodology, and confirmed sources for GTA VI.",
};

export default function SourcesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Breadcrumbs items={[{ label: "Sources & Editorial Policy", href: "/sources" }]} />

      <header className="my-6 pb-6 border-b border-[#222233] space-y-2">
        <h1 className="text-3xl font-black text-white">Editorial Standards & Sources</h1>
        <p className="text-sm text-zinc-400">
          Transparency and verifiable accuracy form the foundation of our encyclopedia.
        </p>
      </header>

      {/* Verification Hierarchy */}
      <section className="p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-4 mb-8">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Verification Quality Hierarchy</span>
        </h2>
        <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-400 w-28 shrink-0">1. Official:</span>
            <span>Direct materials published by Rockstar Games, Take-Two Interactive, official trailers, and developer releases.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-cyan-400 w-28 shrink-0">2. Confirmed:</span>
            <span>Unambiguously visible frame-by-frame trailer details and verifiable in-game data.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-purple-400 w-28 shrink-0">3. Observed:</span>
            <span>Visual features or audio cues noted in official clips, awaiting expanded clarification.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-amber-400 w-28 shrink-0">4. Community:</span>
            <span>Peer-reviewed cartography, landmark triangulation, and reproducible community research.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-rose-400 w-28 shrink-0">5. Speculation:</span>
            <span>Clearly labeled hypotheses, theories, or rumors—never presented as factual reality.</span>
          </li>
        </ul>
      </section>

      {/* Citations List */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Documented Citations</h2>
        <div className="space-y-3">
          {ALL_SOURCES.map((src) => (
            <div
              key={src.id}
              className="p-4 rounded-xl bg-[#351b42] border border-[#232334] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
            >
              <div>
                <h3 className="font-bold text-zinc-200">{src.title}</h3>
                <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1">
                  <span>Publisher: {src.publisher || "Official"}</span>
                  {src.publishedAt && <span>&bull; Date: {src.publishedAt}</span>}
                </div>
                {src.notes && <p className="text-xs text-zinc-400 mt-1.5">{src.notes}</p>}
              </div>
              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 text-xs font-semibold self-start sm:self-center transition-colors"
                >
                  <span>Source URL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

