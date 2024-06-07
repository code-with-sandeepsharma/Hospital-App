/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        buttonBgColorChange: {
          '0%': { backgroundColor: '#84cc16' }, // lime-400
          '50%': { backgroundColor: '#f87171' }, // red-400
          '100%': { backgroundColor: '#84cc16' }, // lime-400
        },
      },
      animation: {
        buttonBgColorChange: 'buttonBgColorChange 5s infinite',
      },
    },
  },
  plugins: [],
}