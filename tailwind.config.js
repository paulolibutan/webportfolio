/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Inter", "sans-serif"],
      secondary: ["Courier Prime", "monospace"],
    },
  },
  plugins: [],
};
