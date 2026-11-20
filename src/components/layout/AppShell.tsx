"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "../navigation/Navbar";
import { Footer } from "./Footer";
import { SearchModal } from "../search/SearchModal";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-transparent text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-coral focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
