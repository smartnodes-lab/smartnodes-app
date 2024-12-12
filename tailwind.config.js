/** @type {import('tailwindcss').Config} */

const defaultTheme = "light";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "rgba(0, 60, 255, 0.05)",
        dark: "rgba(0, 0, 15, 1)",
        secondary: "rgba(26, 82, 255, 0.91)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "400px",
      ss: "550px",
      sm: "670px",
      md: "860px",
      lg: "1250px",
      xl: "1500px",
      xxl: "1900px"
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["responsive"]
    },
  },
};