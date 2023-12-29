/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundColor: {},
      colors: {
        "purple-neon": {
          900: "#0A0922",
        },
      },
      boxShadow: {
        neon: "inset 0px 0px 10px 0px rgba(255,100,250,0.58)",
      },
    },
  },
  plugins: [],
};
