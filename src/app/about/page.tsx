import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About the GTA 6 Wiki & Encyclopedia",
  description: "Learn about GTA6Pedia, an independent encyclopedia and guide for Grand Theft Auto VI.",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <header className="pb-6 border-b border-[#222233] space-y-2">
        <h1 className="text-3xl font-black text-white">About GTA6Pedia</h1>
        <p className="text-sm text-zinc-400">
          Independent fan-made encyclopedia and guide for Grand Theft Auto VI.
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6">
        <section className="p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-3">
          <h2 className="text-lg font-bold text-white">Our Mission</h2>
          <p>
            GTA6Pedia was built to provide Grand Theft Auto enthusiasts with
            a lightning-fast, meticulously researched, and aesthetic reference manual. We emphasize
            verifiable facts over clickbait rumors, presenting accurate character biographies,
            cartographic landmarks, flight spawn points, and achievement walkthroughs.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-3">
          <h2 className="text-lg font-bold text-white">Engineering & Philosophy</h2>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-zinc-400">
            <li><strong>Static-First Architecture:</strong> Instant page responses and zero runtime database bloat.</li>
            <li><strong>Strict Verification:</strong> Every factual entry cites official trailers, press statements, or verified cartography.</li>
            <li><strong>Zero Invasive Tracking:</strong> No tracking scripts or profile harvesting.</li>
            <li><strong>Accessibility & Visual Polish:</strong> Designed with high-contrast Vice City synthwave aesthetics that respect readability.</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-[#14121a] border border-amber-500/30 space-y-3">
          <h2 className="text-lg font-bold text-amber-300">Legal Disclaimer</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {siteConfig.disclaimer}
          </p>
        </section>
      </div>
    </div>
  );
}

