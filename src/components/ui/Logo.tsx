import Link from "next/link";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="GTA6Pedia — home"
      className={clsx("group flex shrink-0 items-center", className)}
    >
      <span className="block w-[48px] shrink-0 transition-transform duration-300 group-hover:scale-[1.06] sm:w-[54px]" aria-hidden="true">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full drop-shadow-[0_4px_14px_rgba(240,91,199,.28)]">
          <defs>
            <linearGradient id="pedia-sunset" x1="17" y1="9" x2="60" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F65BCB" />
              <stop offset=".52" stopColor="#9D68DE" />
              <stop offset="1" stopColor="#F5A05F" />
            </linearGradient>
          </defs>
          <path d="M40 3 72 15v24c0 19-12 31-32 38C20 70 8 58 8 39V15L40 3Z" fill="#11192A" stroke="#F2A4E6" strokeWidth="2.5" />
          <path d="M14 19 40 9l26 10v20c0 15-9 25-26 32-17-7-26-17-26-32V19Z" fill="url(#pedia-sunset)" />
          <path d="M14 42c8-4 17-5 26-2 9 3 17 2 26-2v8c-9 4-17 5-26 2-9-3-18-2-26 2v-8Z" fill="#F5A05F" fillOpacity=".9" />
          <path d="M14 53c8-4 17-5 26-2 9 3 17 2 26-2v6c-9 4-17 5-26 2-9-3-18-2-26 2v-6Z" fill="#25214A" fillOpacity=".94" />
          <path d="M47 53c-1-12 1-22 7-32M53 28l-9-7m9 7 9-10m-12 3-9-9m12 9 8-12m-13 7-7 2m14-2 9 2" stroke="#17152D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 35h19" stroke="#FFF8FC" strokeWidth="2" strokeLinecap="round" />
          <text x="33.5" y="33" fill="#FFF8FC" fontFamily="Georgia,serif" fontSize="17" fontWeight="700" letterSpacing="-2">VI</text>
        </svg>
      </span>
    </Link>
  );
}
