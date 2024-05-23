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
    },
  },
  plugins: [],
};
