import React from "react";
import { Source } from "@/content/schemas/entity";
import { ExternalLink, Bookmark } from "lucide-react";

interface SourceCitationsProps {
  sources: Source[];
}

export function SourceCitations({ sources }: SourceCitationsProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="my-8 p-4 rounded-xl bg-[#281333] border border-[#222232] text-xs">
      <div className="flex items-center gap-2 text-zinc-300 font-semibold mb-3">
        <Bookmark className="w-4 h-4 text-purple-400" />
        <span>Verified Sources & Citations</span>
      </div>
      <ul className="space-y-2">
        {sources.map((src) => (
          <li key={src.id} className="flex items-start justify-between gap-3 text-zinc-400">
            <div>
              <span className="text-zinc-200 font-medium">{src.title}</span>
              {src.publisher && <span className="text-zinc-500"> — {src.publisher}</span>}
              {src.notes && <p className="text-[11px] text-zinc-500 mt-0.5">{src.notes}</p>}
            </div>
            {src.url && (
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 flex items-center gap-1 shrink-0 font-medium"
              >
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

