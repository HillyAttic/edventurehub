import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a2e",
        muted: "#6b7280",
        indigo: {
          DEFAULT: "#4F46E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        purple: {
          DEFAULT: "#7C3AED",
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#EDE9FE",
          300: "#DDD6FE",
          400: "#C4B5FD",
          500: "#A78BFA",
          600: "#9F7AEA",
          700: "#7C3AED",
          800: "#6D28D9",
          900: "#5B21B6",
        },
        violet: "#9F7AEA",
        blue: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        sky: "#93C5FD",
        amber: "#F59E0B",
        green: "#10B981",
        peach: "#FDBCB4",
        "light-purple": "#E8E0F0",
        "light-blue": "#E0F2FE",
      },
      fontFamily: {
        heading: ["Inter", "Poppins", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "heading-lg": ["44px", { lineHeight: "1.15", fontWeight: "700" }],
        "heading-md": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "heading-sm": ["34px", { lineHeight: "1.2", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;