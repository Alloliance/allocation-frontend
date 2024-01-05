/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        hover: "hover 10s ease-in-out infinite",
        spin: "spin 10s linear infinite",
      },
      keyframes: {
        hover: {
          "0%, 100%": { transform: "translatey(0px) rotate(0deg)" },
          "50%": { transform: "translatey(-15px) rotate(-1deg)" },
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundColor: {
        black: {
          transparent: "#00000073",
        },
      },
      colors: {
        purple: {
          700: "#3a1757",
          800: "#2b1140",
          900: "#170922",
        },
        pink: {
          800: "#4f0d30",
          900: "#310A1F",
        },
      },
      boxShadow: {
        neon: "inset 0px 0px 10px rgba(255,100,250)",
      },
    },
    textShadow: {
      neon: "0px 0px 10px rgba(255,100,250)",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
