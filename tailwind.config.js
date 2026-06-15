/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        pixel: ["VT323", "monospace"],
      },
      colors: {
        // Minecraft obsidian / deepslate themes
        obsidian: {
          950: "#0b0b0c",
          900: "#121214",
          800: "#1b1b1f",
          700: "#26262b",
          600: "#36363d",
          500: "#4e4e57",
        },
        deepslate: {
          900: "#18181c",
          800: "#222228",
          700: "#2e2e36",
        }
      },
    },
  },
  plugins: [],
}