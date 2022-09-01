/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "login.html",
    "register.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "light-dark": "#151515",
        "light-dark-100": "#1B1B1B",
        "light-dark-200": "#1D1D1D4D",
      },
    },
  },
  plugins: [],
};
