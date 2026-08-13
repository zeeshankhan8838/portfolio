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
          press: "#0F1318",
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
          line: "#23262B",
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
      borderRadius: {
        "2xs": "4px",
        "xs": "6px",
        "sm": "8px",
        "md": "10px",
        "lg": "12px",
        "xl": "14px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        "glow-gold": "0 0 32px -8px rgba(240, 185, 11, 0.40)",
        "glow-gold-lg": "0 0 48px -6px rgba(240, 185, 11, 0.50)",
        "card": "0 1px 2px rgba(0,0,0,0.40), 0 2px 6px -2px rgba(0,0,0,0.25)",
        "card-hover":
          "0 8px 28px -12px rgba(0,0,0,0.70), 0 0 0 1px rgba(240,185,11,0.22)",
        "card-2":
          "0 1px 0 rgba(255,255,255,0.03) inset, 0 1px 2px rgba(0,0,0,0.35), 0 4px 14px -4px rgba(0,0,0,0.30)",
        "inner-line": "inset 0 0 0 1px rgba(255,255,255,0.025)",
        "focus-bnb": "0 0 0 3px rgba(240,185,11,0.18)",
      },
      letterSpacing: {
        "tightest": "-0.038em",
        "tighter": "-0.028em",
        "tight": "-0.018em",
        "display": "-0.012em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        "radial-gold":
          "radial-gradient(circle at center, rgba(240,185,11,0.18), transparent 62%)",
        "panel":
          "linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0) 60%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-med": "float 5.5s ease-in-out infinite",
        "shimmer": "shimmer 3.2s linear infinite",
        "pulse-gold": "pulseGold 2.8s ease-in-out infinite",
        "marquee-x": "marqueeX 32s linear infinite",
        "tilt": "tilt 11s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.55s cubic-bezier(0.22,1,0.36,1) both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-12px) translateX(3px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(240,185,11,0.40)" },
          "50%": { boxShadow: "0 0 0 10px rgba(240,185,11,0)" },
        },
        marqueeX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
