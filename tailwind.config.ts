import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces & text (Cohere system)
        primary: "#17171c", // near-black — primary CTAs, footer, dark cards
        ink: "#212121", // default body / heading text
        canvas: "#ffffff",
        mist: "#f4f3ef", // warm subtle fill / hover
        stone: "#eeece7", // soft-stone surface blocks
        line: "#d9d9dd", // hairline rule
        cardline: "#e5e7eb",
        muted: "#93939f",
        bodymuted: "#616161",

        // Brand bands & accents
        green: {
          deep: "#003c33",
          dark: "#00302a",
          pale: "#edfce9"
        },
        navy: "#071829",
        coral: {
          DEFAULT: "#ff7759",
          soft: "#ffad9b",
          pale: "#fff1ee"
        },
        action: "#1863dc",
        focus: "#4c6ee6",
        paleblue: "#f1f5ff",

        // Legacy token remaps so existing classes adopt the Cohere palette.
        // `teal-*` now reads as enterprise green.
        teal: {
          50: "#edfce9",
          100: "#d7f3cf",
          500: "#0a5c50",
          600: "#003c33",
          700: "#00302a"
        },
        // `amber-*` now reads as warm coral.
        amber: {
          50: "#fff1ee",
          100: "#ffd9d0",
          500: "#ff7759",
          700: "#c4452f"
        }
      },
      fontFamily: {
        sans: ["Inter", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em"
      },
      borderRadius: {
        sm: "8px",
        card: "16px",
        media: "22px",
        pill: "9999px"
      },
      boxShadow: {
        // Cohere is flat — depth comes from borders & surface alternation.
        panel: "none"
      }
    }
  },
  plugins: []
};

export default config;
