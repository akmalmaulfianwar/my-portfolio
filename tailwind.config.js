/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#8b5cf6",
        dark: "#1e293b",
        secondary: "#64748b",
        gelap: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
