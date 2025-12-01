module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#051628', // Deep Navy from the screenshots
          blue: '#132C4A', // Lighter Navy for cards/sections
          yellow: '#FFAB40', // The accent/tape color
          gray: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Matches the clean typography
      }
    },
  },
  plugins: [],
}