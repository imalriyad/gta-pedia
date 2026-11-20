"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, ShieldCheck, Sparkles, Eye, EyeOff } from "lucide-react";

export function CountdownBanner() {
  const launchTimestamp = new Date("2026-11-19T00:00:00Z").getTime();
  const released = Date.now() >= launchTimestamp;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [spoilerMode, setSpoilerMode] = useState(false);

  useEffect(() => {
    // Official target date: Nov 19 2026 · PS5 · Xbox Series X|S
    const targetDate = new Date("2026-11-19T00:00:00Z").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full my-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#120a1c] via-[#10101b] to-[#0c1322] border border-[#2d1f45] shadow-2xl relative overflow-hidden">
      {/* Background neon ambient flare */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Release Status & Tag */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300">
              NOV 19, 2026 &bull; PS5 &bull; XBOX SERIES X|S
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {released ? "Grand Theft Auto VI Is Out Now" : "Grand Theft Auto VI Launch Countdown"}
          </h2>
          <p className="text-xs text-zinc-400 max-w-md">
            {released
              ? "Released November 19, 2026 for PlayStation 5 and Xbox Series X|S."
              : "Confirmed for PlayStation 5 and Xbox Series X|S. Track release milestones."}
          </p>
        </div>

        {/* Live Countdown Clock */}
        {!released && <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#181224]/90 border border-pink-500/30 shadow-[0_0_15px_rgba(244,63,133,0.15)]">
            <span className="text-lg sm:text-xl font-black text-white font-mono leading-none">
              {timeLeft.days}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-pink-400 mt-1">
              Days
            </span>
          </div>

          <span className="text-pink-500 font-bold text-lg">:</span>

          <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#181224]/90 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="text-lg sm:text-xl font-black text-white font-mono leading-none">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-purple-400 mt-1">
              Hours
            </span>
          </div>

          <span className="text-purple-500 font-bold text-lg">:</span>

          <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#181224]/90 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="text-lg sm:text-xl font-black text-white font-mono leading-none">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-cyan-400 mt-1">
              Mins
            </span>
          </div>

          <span className="text-cyan-500 font-bold text-lg">:</span>

          <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#181224]/90 border border-pink-500/30 shadow-[0_0_15px_rgba(244,63,133,0.15)]">
            <span className="text-lg sm:text-xl font-black text-pink-400 font-mono leading-none">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mt-1">
              Secs
            </span>
          </div>
        </div>}

        {/* Quick Links & Spoiler Filter Badge */}
        <div className="flex items-center gap-3">
          <Link
            href="/timeline"
            className="px-3.5 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </Link>

          <button
            onClick={() => setSpoilerMode(!spoilerMode)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
              spoilerMode
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-zinc-800/60 border-zinc-700/60 text-zinc-300 hover:text-white"
            }`}
          >
            {spoilerMode ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Spoilers Hidden</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Spoiler Safe</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
