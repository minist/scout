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
        background: "#0A0A0B",
        surface: "#121316",
        elevated: "#1B1D22",
        ink: "#FFFFFF",
        mist: "#121316",
        line: "rgba(255,255,255,0.08)",
        teal: {
          50: "rgba(94,139,255,0.12)",
          100: "rgba(94,139,255,0.18)",
          500: "#5E8BFF",
          600: "#5E8BFF",
          700: "#6DD6FF"
        },
        amber: {
          50: "rgba(165,141,255,0.12)",
          100: "rgba(165,141,255,0.18)",
          500: "#A58DFF",
          700: "#A58DFF"
        }
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.02)"
      }
    }
  },
  plugins: []
};

export default config;
