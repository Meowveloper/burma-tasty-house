/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs", // Path to your EJS files
    "./src/views/**/*.html",
    "./src/**/*.js", // Path to your JavaScript files if needed
    "./src/**/*.ts", // Path to your TypeScript files if needed
  ],
  theme: {
    extend: {
      fontSize : {
        "h1" : "30px"
      }
    },
  },
  plugins: [],
}
