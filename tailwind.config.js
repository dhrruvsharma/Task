/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'btn':'#162d3b',
        'sp':'#3a5c22',
        'bgc':'#368f8b',
        'btn1':'#abe188',
        'bgcc':'#a07178'
      }
    },
    screens:{
      'vsm':'500px',
      'sm':'600px',
      'md':'790px',
      'lg':'1000px'
    }
  },
  plugins: [],
}