/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      }, //end of fontFamily
      colors: {
        green: {
          DEFAULT: "#C4F000",
        },
        black: {
          DEFAULT: "#191919",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("flowbite/plugin")],
};
