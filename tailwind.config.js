/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primary:"#3758f9",
      },
      screens: {
        'sm-md': '1030px', // Custom breakpoint at 790px
      },
    },
  },
  plugins: [],
}