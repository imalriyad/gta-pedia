import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import {
  Image as ImageIcon,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/media" },
  title: "GTA 6 Screenshots, Artwork & Media Gallery",
  description:
    "Browse a visual gallery for Grand Theft Auto VI featuring Vice City, Leonida locations, Lucia, Jason, and other character and map imagery.",
};

export default function MediaPage() {
  const mediaGallery = [
    {
      title: "Vice City Sunset Rooftop",
      category: "Locations",
      image: "/images/locations/vice-city-02-1920.webp",
      caption: "Panoramic sunset view overlooking the Vice City beachfront, rooftop infinity pool, and coastal skyscrapers.",
    },
    {
      title: "Lucia Caminos Portrait",
      category: "Characters",
      image: "/images/characters/lucia-caminos-01-1920.webp",
      caption: "In-engine character render of Lucia navigating Vice City nightlife.",
    },
    {
      title: "Ambrosia Country Roads",
      category: "Locations",
      image: "/images/locations/ambrosia-04-1920.webp",
      caption: "Rural industrial corridor in Ambrosia featuring sugar refineries and country routes.",
    },
    {
      title: "Jason Duval Action Sequence",
      category: "Characters",
      image: "/images/characters/jason-duval-02-1920.webp",
      caption: "Jason during an armed tactical confrontation in suburban Leonida.",
    },
    {
      title: "Vice City Ocean Drive Nightlife",
      category: "Locations",
      image: "/images/locations/vice-city-01-1920.webp",
      caption: "Vibrant neon lighting, sports cars, and bustling pedestrian crowds along Ocean Drive.",
    },
    {
      title: "State of Leonida Cartography",
      category: "Map",
      image: "/images/map/leonida-state-map-1920.webp",
      caption: "High-resolution map of the State of Leonida detailing all six distinct geographic regions.",
    },
    {
      title: "Port Gellhorn Industrial Docks",
      category: "Locations",
      image: "/images/locations/port-gellhorn-01-1920.webp",
      caption: "Shipping container yards, freight rail lines, and coastal warehouses in western Leonida.",
    },
    {
      title: "The Grassrivers Wetlands",
      category: "Locations",
      image: "/images/locations/grassrivers-01-1920.webp",
      caption: "Dense cypress mangroves, sawgrass marshes, and airboat channels in the heart of Leonida.",
    },
    {
      title: "The Leonida Keys Overseas Highway",
      category: "Locations",
      image: "/images/locations/leonida-keys-01-1920.webp",
      caption: "Turquoise ocean bridges and stilt shacks connecting the southern island archipelago.",
    },
    {
      title: "Mount Kalaga Summit Wilderness",
      category: "Locations",
      image: "/images/locations/mount-kalaga-01-1920.webp",
      caption: "Rugged northern forest trails and observation peaks overlooking the Leonida state border.",
    },
    {
      title: "Lucia – Prison Release",
      category: "Characters",
      image: "/images/characters/lucia-caminos-05-1920.webp",
      caption: "Debut reveal trailer still of Lucia Caminos at the Leonida Department of Corrections.",
    },
    {
      title: "Lucia – Heist Infiltration",
      category: "Characters",
      image: "/images/characters/lucia-caminos-04-1920.webp",
      caption: "Lucia during a coordinated tactical heist approach in downtown Vice City.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "Media Gallery", href: "/media" }]} />

      {/* Header */}
      <header className="pb-6 border-b border-[#222233] space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wide">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>OFFICIAL 1920P HIGH-RESOLUTION SCREENSHOTS &bull; PS5 EXTENDED LOOK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Grand Theft Auto VI Official Screenshot Gallery
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
          High-definition 1920p official screenshots and in-engine visual assets captured directly
          on PlayStation 5 hardware. Zero compressed watermarks or low-resolution crops.
        </p>
      </header>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaGallery.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 overflow-hidden transition-all flex flex-col justify-between shadow-lg"
          >
            <div className="relative w-full h-[220px] bg-[#201b3d] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2853] via-transparent to-transparent opacity-60" />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-pink-400 border border-zinc-700">
                {item.category}
              </div>
            </div>

            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono text-[11px] text-zinc-500">1920 &times; 1080 &bull; WebP</span>
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Full Res</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
