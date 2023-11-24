/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        dark: "#0f172a",
        light: "#f8fafc",
      },
      fontFamily: {
        display: "Merriweather, serif",
        body: "Montserrat, sans-serif",
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
      },
      rotate: "rotate 8s ease infinite",
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%;" },
        },
      },
    },
  },
  plugins: [],
};
