/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#5f4b85",
        secundario: "#FF5C8F",
        terciario: "#B892FF",
        cuaternario: "#FFD6EB",
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
    },

    screens: {
      sm: "300px",
      md: "600px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
