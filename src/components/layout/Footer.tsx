import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink-2/60">
      <div className="container-x py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="serif text-5xl italic leading-none text-coral">VI</span>
              <span className="font-display text-xl font-semibold tracking-tight text-paper">
                GTA6Pedia
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[12px] leading-relaxed text-muted">
              The Ultimate GTA VI Encyclopedia: an independent field guide to Grand Theft Auto VI.
              Confirmed, observed and reported are kept apart on every page — because
              a rumour is not a fact with better lighting.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag">Est. 2024</span>
              <span className="tag">Fan-made</span>
              <span className="tag">No leaks used</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {siteConfig.footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="mono text-[9px] uppercase tracking-[0.16em] text-faint">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-[12px] text-paper-dim transition-colors hover:text-coral"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-[10px] leading-relaxed text-faint sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-3xl">{siteConfig.disclaimer}</p>
          <p className="mono shrink-0 uppercase tracking-[0.12em]">
            © {new Date().getFullYear()} GTA6Pedia
          </p>
        </div>
      </div>
    </footer>
  );
}
