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
        ink: "#111827",
        mist: "#f6f8f9",
        line: "#dbe2e5",
        teal: {
          50: "#ecfdf9",
          100: "#ccfbef",
          500: "#0f9f8f",
          600: "#0b7f74",
          700: "#0a645d"
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          700: "#b45309"
        }
      },
      boxShadow: {
        panel: "0 18px 50px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
