/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hblue1:'#245DA5',
        hblue2:'#023E8A',
        blue3:'#DCEEFF'
      },
      fontFamily: {
        rubik: ['Rubik'],
      },
    },
  },
  plugins: [],
}