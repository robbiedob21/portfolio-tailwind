/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        light: "#F7F7F7",
        sage: {
          100: "#E9E6E2",
          400: "#C1C2AD",
          500: "#B6B79E",
          700: "#3A4234",
        },
        cognac: {
          400: "#BFB1B0",
          600: "#5D4D4C",
          700: "#4F4140",
          800: "#413635",
        },
        dark: "#1F132A",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
