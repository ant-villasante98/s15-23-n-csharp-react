/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  colors: {
    'custom-fdfafc': '#fdfafc',
  },

  theme: {
    extend: {
      colors: {
        primario: "#5f4b85",
        secundario: "#FF5C8F",
        terciario: "#B892FF",
        cuaternario: "#FFD6EB",
      },
    },
   screens:{
    'sm': '300px',
    'md': '600px',
    'lg': '1024px',
    'xl': '1200px',
    '2xl': '1536px',
   }
    
  },
  plugins: [],
};
