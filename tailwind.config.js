/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0E11",
          secondary: "#181A20",
          tertiary: "#1E2329",
          elevated: "#2B3139",
          muted: "#14171C",
        },
        ink: {
          DEFAULT: "#EAECEF",
          secondary: "#B7BDC6",
          tertiary: "#848E9C",
          muted: "#5E6673",
          subtle: "#474D57",
        },
        bnb: {
          DEFAULT: "#F0B90B",
          yellow: "#F0B90B",
          gold: "#F0B90B",
          soft: "#FCD535",
          deep: "#C9980A",
          dim: "#7D6709",
          light: "#F5E3A2",
          faint: "#2A2615",
        },
        border: {
          DEFAULT: "#2B3139",
          subtle: "#23282F",
          strong: "#474D57",
        },
        success: "#0ECB81",
        danger: "#F6465D",
        emerald: "#0ECB81",
      },
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans", "system-ui", "sans-serif"],
        display: ["IBM Plex Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-gold": "0 0 40px -8px rgba(240, 185, 11, 0.45)",
        "glow-gold-lg": "0 0 60px -6px rgba(240, 185, 11, 0.55)",
        "card": "0 1px 2px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
        "card-hover": "0 12px 40px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,185,11,0.25)",
      },
      letterSpacing: {
        "tightest": "-0.035em",
        "tighter": "-0.025em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "radial-gold":
          "radial-gradient(circle at center, rgba(240,185,11,0.20), transparent 60%)",
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-med": "float 5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-gold": "pulseGold 2.6s ease-in-out infinite",
        "marquee-x": "marqueeX 28s linear infinite",
        "tilt": "tilt 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(4px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(240,185,11,0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(240,185,11,0)" },
        },
        marqueeX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};
