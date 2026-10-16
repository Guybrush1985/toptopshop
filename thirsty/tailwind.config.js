/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#fff8eb", 100: "#feecc7", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 900: "#78350f" },
      },
    },
  },
  plugins: [],
};
