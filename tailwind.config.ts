import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#201b3d",
        "ink-2": "#2c2853",
        "ink-3": "#3d376f",
        paper: "#fff5fa",
        "paper-dim": "#e9ddf5",
        muted: "#c5badf",
        faint: "#998fb8",
        coral: "#f05bc7",
        "coral-deep": "#bd43ab",
        sun: "#ff9fbe",
        teal: "#8fc8ff",
        gold: "#ffd2a6",
        violet: "#aa96ff",
        line: "rgba(231,219,255,0.19)",
        "line-soft": "rgba(231,219,255,0.11)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        reading: "70ch",
        container: "1320px",
      },
      letterSpacing: {
        tightest: "-0.055em",
        widest2: "0.22em",
      },
      transitionTimingFunction: {
        cinema: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise .8s cubic-bezier(0.22,1,0.36,1) both",
        ticker: "ticker 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
