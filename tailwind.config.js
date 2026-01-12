/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#ff2153", // Warna khas DramaBox (pink/merah)
      }
    },
  },
  plugins: [],
}
