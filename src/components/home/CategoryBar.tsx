import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  MapPin,
  Users,
  MessageSquare,
} from "lucide-react";

export function CategoryBar() {
  const categories = [
    {
      title: "Complete Guides",
      subtitle: "Walkthroughs & Tips",
      href: "/guides",
      icon: BookOpen,
      color: "text-fuchsia-400 group-hover:text-pink-300",
      bgGlow: "group-hover:border-fuchsia-500/50",
    },
    {
      title: "Secrets & Easter Eggs",
      subtitle: "Hidden Content",
      href: "/secrets",
      icon: Sparkles,
      color: "text-pink-400 group-hover:text-pink-300",
      bgGlow: "group-hover:border-pink-500/50",
    },
    {
      title: "Locations",
      subtitle: "Map & Landmarks",
      href: "/locations",
      icon: MapPin,
      color: "text-purple-400 group-hover:text-purple-300",
      bgGlow: "group-hover:border-purple-500/50",
    },
    {
      title: "Characters",
      subtitle: "Profiles & Lore",
      href: "/characters",
      icon: Users,
      color: "text-purple-400 group-hover:text-purple-300",
      bgGlow: "group-hover:border-purple-500/50",
    },
    {
      title: "Community",
      subtitle: "Join the Wiki",
      href: "#community",
      icon: MessageSquare,
      color: "text-pink-400 group-hover:text-pink-300",
      bgGlow: "group-hover:border-pink-500/50",
    },
  ];

  return (
    <div className="w-full my-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group flex items-center gap-3 p-3 rounded-xl bg-[#2c2853] border border-[#60416c] ${cat.bgGlow} transition-all duration-200 hover:bg-[#3d376f] hover:shadow-card-glow hover:-translate-y-0.5`}
            >
              <div className="p-2 rounded-lg bg-[#1a1a28] group-hover:bg-[#252538] transition-colors shrink-0">
                <Icon className={`w-5 h-5 ${cat.color} transition-colors`} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-zinc-200 group-hover:text-white truncate">
                  {cat.title}
                </div>
                <div className="text-[11px] text-zinc-400 group-hover:text-zinc-300 truncate">
                  {cat.subtitle}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

