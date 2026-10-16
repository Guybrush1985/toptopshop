/** @type {import('tailwindcss').Config} */
// Dunkles Farbschema: Die Graustufen (stone) sind umgedreht, damit Portal und Formulare ohne Umbau dunkel werden.
// 50 = dunkelste Fläche, 900 = hellste Schrift.
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b0b0d", 2: "#141417", 3: "#1d1d21" },
        cream: "#f6efe4",
        lime: { DEFAULT: "#d4ff3a", soft: "#e6ff8c", deep: "#a8d400" },
        hot: { DEFAULT: "#ff4d1f", soft: "#ff8a66" },
        pink: { DEFAULT: "#ff3d8b" },
        stone: {
          50: "#0f0f12", 100: "#17171b", 200: "#2a2a30", 300: "#3a3a42", 400: "#6e6e78",
          500: "#9a9aa4", 600: "#bdbdc4", 700: "#d9d6d0", 800: "#ebe6dd", 900: "#f6efe4",
        },
        brand: {
          50: "#1a2008", 100: "#2b360a", 500: "#d4ff3a", 600: "#d4ff3a", 700: "#e6ff8c", 900: "#f2ffc7",
        },
        red: { 50: "#2a0f0a", 100: "#3a140c", 200: "#5a1e12", 300: "#7a2a18", 700: "#ff8a66", 800: "#ffa588", 900: "#ffc2ad" },
        green: { 50: "#0d2112", 100: "#12301a", 200: "#1d4a29", 300: "#2a6a3b", 800: "#8ff0a8", 900: "#b8f7c8" },
        amber: { 50: "#241c08", 100: "#2e230a", 300: "#6b5214", 900: "#ffe08a" },
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        sans: ["'Bricolage Grotesque Variable'", "system-ui", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        rise: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
