import React from "react";
import Link from "next/link";
import { BaseEntity } from "@/content/schemas/entity";
import { ArrowRight } from "lucide-react";
import { VerificationBadge } from "./VerificationBadge";

interface RelatedContentProps {
  entities: BaseEntity[];
}

export function RelatedContent({ entities }: RelatedContentProps) {
  if (!entities || entities.length === 0) return null;

  return (
    <section className="my-10 pt-6 border-t border-[#222233]">
      <h3 className="text-base font-bold text-white mb-4">Related Articles & Topics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {entities.map((item) => (
          <Link
            key={item.id}
            href={`/${item.category}/${item.slug}`}
            className="group p-4 rounded-xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 hover:bg-[#3d376f] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <VerificationBadge status={item.verificationStatus} />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-zinc-800/50 flex items-center justify-between text-xs text-pink-400 font-medium">
              <span>Read entry</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

