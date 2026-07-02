/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleDark: '#0a0a0a',
        appleGlass: 'rgba(255, 255, 255, 0.05)',
        appleBorder: 'rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}