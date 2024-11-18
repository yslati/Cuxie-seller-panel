/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00509B',
        button: '#A8C8FF',
        text: '#06305F',
        input: '#43474E',
        input_bg: '#E1E2E9',
      },
      fontFamily: {
        lato_700: ['Lato-700', 'sans-serif'],
        lato_400: ['Lato-400', 'sans-serif'],
      },
    },
  },
  plugins: [],
}