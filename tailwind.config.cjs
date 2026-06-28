/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050810",
        "bg-deep": "#02040A",
        surface: "#0A0F1C",
        "surface-2": "#0E1424",
        line: "#1B2738",
        "line-soft": "#11192A",
        accent: "#1F7BFF",
        "accent-soft": "#4C97FF",
        "accent-deep": "#145AC1",
        cyan: "#00D4FF",
        ink: "#E8EEF6",
        muted: "#8B97A8",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(31,123,255,0.28), 0 30px 80px -20px rgba(31,123,255,0.45)",
        "glow-cyan": "0 0 0 1px rgba(0,212,255,0.3), 0 30px 80px -20px rgba(0,212,255,0.4)",
      },
      backgroundImage: {
        "ledger-fade":
          "linear-gradient(90deg, transparent 0%, rgba(31,123,255,0.55) 20%, rgba(31,123,255,0.55) 80%, transparent 100%)",
        "grid-fade":
          "linear-gradient(180deg, transparent 0%, rgba(31,123,255,0.08) 50%, transparent 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 rgba(31,123,255,0.6), 0 8px 24px -8px rgba(31,123,255,0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 0 12px rgba(31,123,255,0), 0 8px 24px -8px rgba(31,123,255,0.7)",
          },
        },
        "blink-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "blink-live": "blink-live 1.6s ease-in-out infinite",
        "ticker-scroll": "ticker-scroll 28s linear infinite",
        "float-y": "float-y 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};