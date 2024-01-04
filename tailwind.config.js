/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "my-y":"#ffde59"
      },
      spacing: {
        '50': '50px',
        '200': '200px',
      },
      width:{
        "200":"200px"
      },
      height:{
        "200":"200px",
        "500":"500px"
      }
    },
  },
  plugins: [],
}