/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
         sans: ['Inter', 'sans-serif'],
         heading: ['Sora', 'sans-serif'],
      },
      colors: {
         red: {
           400: '#ff4d4d',
           500: '#ff0000',
           600: '#d90000',
           900: '#5c0000',
         },
         orange: {
           500: '#FFA500', // A standard orange
           600: '#ED8900', // A slightly darker orange
         }
      }
    },
  },
  plugins: [],
}
