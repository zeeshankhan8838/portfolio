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
          DEFAULT: "#FAFAFA",
          secondary: "#FFFFFF",
          tertiary: "#F5F6F8",
          elevated: "#FFFFFF",
          muted: "#F0F1F3",
          dark: "#0B0D12",
        },
        ink: {
          DEFAULT: "#0B0D12",
          secondary: "#2A2E35",
          tertiary: "#5B6170",
          muted: "#8A8F9B",
          subtle: "#B3B7C1",
        },
        accent: {
          DEFAULT: "#2563EB",
          soft: "#3B82F6",
          light: "#DBEAFE",
          faint: "#EFF6FF",
          dark: "#1D4ED8",
        },
        border: {
          DEFAULT: "#E5E7EB",
          subtle: "#EEF0F3",
          strong: "#D1D5DB",
        },
        success: "#059669",
        danger: "#DC2626",
        gold: "#C89B3C",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        "card": "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        "card-hover": "0 8px 24px -8px rgba(16, 24, 40, 0.12), 0 4px 12px -4px rgba(16, 24, 40, 0.08)",
        "glow": "0 0 0 4px rgba(37, 99, 235, 0.10)",
      },
      letterSpacing: {
        "tightest": "-0.03em",
        "tighter": "-0.02em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
