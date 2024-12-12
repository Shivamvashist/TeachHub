/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        satisfy: ["Satisfy", "cursive"],
        marker: ["Permanent Marker", 'cursive'],
        atomic: ["Atomic Age", "serif"]
      }
    },
  },
  plugins: [],
}

