/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "rgba(0, 60, 255, 0.05)",
        dark: "rgba(0, 0, 35, 1)",
        secondary: "rgba(26, 82, 255, 0.91)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "380px",
      ss: "520px",
      sm: "768px",
      md: "1060px",
      lg: "1300px",
      xl: "1700px",
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["responsive"]
    },
  },
};