/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#D9D9D9'
      },
      fontFamily: {
        pro: "GFS Didot",
        per: "GFS Neohellenic",
      }
    },
  },
  plugins: [],
}