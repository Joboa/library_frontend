/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'lib-bg': "url('/src/images/unsplash2.jpg')",
      }
    },
  },
  plugins: [],
}
