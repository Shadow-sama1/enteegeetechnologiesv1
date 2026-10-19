import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--brand-navy)",
          blue: "var(--brand-blue)",
          sky: "var(--brand-sky)",
          pale: "var(--brand-pale)",
          ink: "var(--brand-ink)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 36px rgba(10, 42, 102, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
