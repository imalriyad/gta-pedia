"use client";

import React, { useState } from "react";
import { AlertOctagon, Eye, EyeOff } from "lucide-react";
import { getSpoilerWarningText } from "@/lib/utils";

interface SpoilerShieldProps {
  spoilerLevel: number;
  children: React.ReactNode;
}

export function SpoilerShield({ spoilerLevel, children }: SpoilerShieldProps) {
  const [revealed, setRevealed] = useState(spoilerLevel < 2);
  const warning = getSpoilerWarningText(spoilerLevel);

  if (spoilerLevel === 0) {
    return <>{children}</>;
  }

  return (
    <div className="my-6 rounded-2xl border border-amber-500/30 bg-[#14121b] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-amber-500/10 border-b border-amber-500/20 text-xs">
        <div className="flex items-center gap-2 text-amber-300 font-semibold">
          <AlertOctagon className="w-4 h-4 text-amber-400" />
          <span>{warning} (Level {spoilerLevel})</span>
        </div>
        <button
          onClick={() => setRevealed(!revealed)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-medium transition-colors"
        >
          {revealed ? (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              <span>Hide Spoilers</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>Reveal Content</span>
            </>
          )}
        </button>
      </div>

      <div className={`p-4 transition-all duration-300 ${!revealed ? "blur-md select-none pointer-events-none opacity-40 max-h-48 overflow-hidden" : ""}`}>
        {children}
      </div>
    </div>
  );
}

