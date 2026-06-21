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
        ink: "#161611",
        mist: "#f4f0e7",
        line: "#ded7c9",
        teal: {
          50: "#edf8ec",
          100: "#d5efd2",
          500: "#367b44",
          600: "#246532",
          700: "#174d27"
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          700: "#b45309"
        }
      },
      boxShadow: {
        panel: "0 18px 46px rgba(22, 22, 17, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
