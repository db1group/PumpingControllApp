/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        'm': {'max': '767px'},
        'hhd': {'min': '1024px', 'max': '1300px'}
      },
    },
    colors: {
      "pumping-900": "#0A0A0A",
      "pumping-800": "#191624",
      "pumping-700": "#202021",
      "pumping-primary": "#E30076",
      "pumping-secondary": "#7BEFFC",
      "pumping-100": "#F8F8F8",
    },
  },
  plugins: [],
};
