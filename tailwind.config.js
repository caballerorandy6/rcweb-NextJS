/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "san-serif"],
        mono: ["var(--font-geist-mono)", "san-serif"],
      },
      colors: {
        mineshaft: "#2D2A2A",
        dune: "#312F2D",
        donkeybrown: "#A49781",
        gurkha: "#929874",
        slategray: "#7A8C95",
        gold: "#CBB26A",
      },
    },
  },
  plugins: [],
};
