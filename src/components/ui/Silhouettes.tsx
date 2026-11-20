import React from "react";
import clsx from "clsx";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

export function WeaponSilhouette({
  kind,
  className,
}: {
  kind: string;
  className?: string;
}) {
  const k = kind.toLowerCase();
  const common = clsx("h-full w-full", className);

  if (k.includes("revolver")) {
    return (
      <svg viewBox="0 0 360 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M70 78h150v16H70z" />
          <path d="M214 78h64v18h-64z" />
          <path d="M70 94h16v34H70z" />
          <circle cx="152" cy="88" r="25" />
          <circle cx="152" cy="88" r="9" />
          <path d="M96 104c-8 20-16 36-22 48h26c7-14 16-28 26-42" />
          <path d="M128 110c4 18 6 32 6 42" />
          <path d="M222 78V66h12v12" />
          <path d="M240 96v10" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M70 60h208M70 132h208" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("smg")) {
    return (
      <svg viewBox="0 0 380 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M96 72h136v24H96z" />
          <path d="M232 76h64v12h-64z" />
          <path d="M110 96h26v50h-26z" />
          <path d="M146 96h18v34h-18z" />
          <path d="M96 72V60h44v12" />
          <path d="M64 82h32v12H64z" />
          <path d="M296 70h24v12h-24z" />
          <path d="M128 96h8v18" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M60 52h252M60 156h252" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("shotgun")) {
    return (
      <svg viewBox="0 0 440 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M52 82h244v14H52z" />
          <path d="M296 78h92v18h-92z" />
          <path d="M52 96h30v22H52z" />
          <path d="M86 96h44v18H86z" />
          <path d="M150 96h20v28h-20z" />
          <path d="M190 96h58v16h-58z" />
          <path d="M286 86h20v16h-20z" />
          <path d="M322 96v26h24" />
          <path d="M64 78V66h112v12" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M48 52h332M48 156h332" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("launcher")) {
    return (
      <svg viewBox="0 0 420 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M84 66h224v42H84z" />
          <circle cx="196" cy="87" r="30" />
          <circle cx="196" cy="87" r="12" />
          <path d="M308 76h44v22h-44z" />
          <path d="M84 70V56h42v14" />
          <path d="M152 108h26v40h-26z" />
          <path d="M112 108h24v28h-24z" />
          <path d="M260 108h24v26h-24z" />
          <path d="M352 82h24" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M72 46h312M72 156h312" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("sniper")) {
    return (
      <svg viewBox="0 0 500 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M44 88h150v12H44z" />
          <path d="M194 76h150v28H194z" />
          <path d="M344 82h34v10h-34z" />
          <path d="M378 74h84v16h-84z" />
          <path d="M210 104h22v24h-22z" />
          <path d="M244 104h28v18h-28z" />
          <path d="M286 104h30v22h-30z" />
          <path d="M320 94l24-12v26z" />
          <path d="M230 76V58h84v18" />
          <circle cx="252" cy="48" r="12" />
          <circle cx="296" cy="48" r="12" />
          <path d="M244 48h16M288 48h20" />
          <path d="M210 128l-12 14M232 128l12 14" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M40 36h424M40 156h424" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("rifle") || k.includes("carbine") || k.includes("assault")) {
    return (
      <svg viewBox="0 0 460 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M78 76h196v26H78z" />
          <path d="M274 82h62v12h-62z" />
          <path d="M336 78h76v14h-76z" />
          <path d="M114 102h26v42h-26z" />
          <path d="M150 102h34v30h-34z" />
          <path d="M78 76V62h52v14" />
          <path d="M60 84h18v14H60z" />
          <path d="M204 102h20v34h-20z" />
          <path d="M240 60h44v10h-44z" />
          <path d="M356 92v26h22" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M56 44h360M56 156h360" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("bat") || k.includes("melee")) {
    return (
      <svg viewBox="0 0 360 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M86 122l112-64c18-10 38-2 44 14 8 20-2 38-20 46L132 156c-14 6-30 0-36-12-6-10-6-16-10-22z" />
          <path d="M118 132l46-26" />
          <path d="M96 110l-22 12" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M60 56h240M60 160h240" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  if (k.includes("knife") || k.includes("blade")) {
    return (
      <svg viewBox="0 0 360 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M76 96l150-44c18-5 34 4 38 18 3 12-4 22-16 26L98 138z" />
          <path d="M86 128l-18 24 34 8 14-28" />
          <path d="M140 106l52-16" />
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity=".35">
          <path d="M60 56h240M60 160h240" strokeDasharray="4 8" />
        </g>
      </svg>
    );
  }

  // pistol default
  return (
    <svg viewBox="0 0 360 180" className={common} aria-hidden>
      <g {...strokeProps}>
        <path d="M84 70h168v26H84z" />
        <path d="M252 78h44v12h-44z" />
        <path d="M104 96h28v58h-28z" />
        <path d="M132 102h30l-6 30h-24z" />
        <path d="M84 70V58h42v12" />
        <path d="M92 96c10 6 20 8 30 8" />
        <path d="M150 96h10v12h-10z" />
      </g>
      <g stroke="currentColor" strokeWidth="1" opacity=".35">
        <path d="M72 52h224M72 160h224" strokeDasharray="4 8" />
      </g>
    </svg>
  );
}

function Wheels({ x1, x2, y = 124, r = 18 }: { x1: number; x2: number; y?: number; r?: number }) {
  return (
    <>
      <circle cx={x1} cy={y} r={r} />
      <circle cx={x1} cy={y} r={r * 0.45} />
      <circle cx={x2} cy={y} r={r} />
      <circle cx={x2} cy={y} r={r * 0.45} />
    </>
  );
}

export function VehicleSilhouette({
  kind,
  className,
}: {
  kind: string;
  className?: string;
}) {
  const k = kind.toLowerCase();
  const common = clsx("h-full w-full", className);

  if (k.includes("motorcycle")) {
    return (
      <svg viewBox="0 0 400 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <circle cx="96" cy="128" r="30" />
          <circle cx="96" cy="128" r="10" />
          <circle cx="310" cy="128" r="30" />
          <circle cx="310" cy="128" r="10" />
          <path d="M96 128l52-44h54l30 44" />
          <path d="M202 84l14-26h36l-4 26" />
          <path d="M148 84h58" />
          <path d="M250 84l24 44" />
          <path d="M206 58h44" />
          <path d="M176 104l30-20 22 30" />
        </g>
      </svg>
    );
  }

  if (k.includes("boat") || k.includes("watercraft")) {
    return (
      <svg viewBox="0 0 420 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M60 112h300l-44 34H104z" />
          <path d="M104 112V84h120l34 28" />
          <path d="M120 92h72l24 20" />
          <path d="M238 84h28v28" />
          <path d="M262 64h6v20" />
          <path d="M60 112h300" />
          <path d="M44 150c14 6 28 6 42 0s28-6 42 0 28 6 42 0 28-6 42 0 28 6 42 0 28-6 42 0 28 6 42 0" />
        </g>
      </svg>
    );
  }

  if (k.includes("helicopter") || k.includes("chopper")) {
    return (
      <svg viewBox="0 0 420 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M140 92c0-20 18-34 46-34h70c24 0 40 12 44 30h34v16h-38c-6 20-24 32-48 32h-50c-28 0-46-14-48-32h-10z" />
          <path d="M260 108l76 18M320 118v14M120 82h-34" />
          <path d="M78 82h30" />
          <path d="M66 82l-14-10M66 82l-14 10M96 82l14-10M96 82l14 10" />
          <path d="M152 136v10M286 136v10" />
          <circle cx="196" cy="92" r="10" />
        </g>
      </svg>
    );
  }

  if (k.includes("aircraft") || k.includes("plane") || k.includes("jet")) {
    return (
      <svg viewBox="0 0 440 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M50 96c40-8 90-14 140-16l30-34 22 32 110 4 42 10-42 10-110 6-22 30-30-32c-50 0-100-2-140-10z" />
          <path d="M190 80l-20-40 20 6 28 32" />
          <path d="M50 96h318" />
        </g>
      </svg>
    );
  }

  if (k.includes("commercial") || k.includes("van") || k.includes("truck") || k.includes("bus")) {
    return (
      <svg viewBox="0 0 460 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M54 72h180v62H54z" />
          <path d="M234 92h90l50 24v18H234z" />
          <path d="M252 104h52l24 12" />
          <path d="M84 72V56h64v16" />
          <path d="M302 96h40v14" />
          <Wheels x1={112} x2={358} />
        </g>
      </svg>
    );
  }

  if (k.includes("suv") || k.includes("off-road") || k.includes("offroad")) {
    return (
      <svg viewBox="0 0 440 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M60 106V80l36-26h150l34 26h72v40H60z" />
          <path d="M104 80V66h58v14M174 66h62l24 14" />
          <path d="M60 96h300" />
          <path d="M72 70h-14v18" />
          <Wheels x1={126} x2={334} y={122} r={24} />
          <path d="M352 106h28v-6" />
        </g>
      </svg>
    );
  }

  if (k.includes("compact") || k.includes("coupe")) {
    return (
      <svg viewBox="0 0 440 180" className={common} aria-hidden>
        <g {...strokeProps}>
          <path d="M58 110V92l48-8 40-28h104l48 28 62 8v22H58z" />
          <path d="M116 86h44V66h-38zM172 66h60l36 20H172z" />
          <path d="M58 104h330" />
          <Wheels x1={122} x2={330} y={122} r={22} />
        </g>
      </svg>
    );
  }

  // car default (sports / muscle / sedan)
  return (
    <svg viewBox="0 0 440 180" className={common} aria-hidden>
      <g {...strokeProps}>
        <path d="M52 110V96l58-8 34-26h124l40 26 66 8v18H52z" />
        <path d="M112 90h48V70h-40zM174 70h74l34 20H174z" />
        <path d="M52 104h344" />
        <path d="M78 94h-14v10M72 78h40" />
        <Wheels x1={126} x2={334} y={122} r={23} />
      </g>
    </svg>
  );
}
