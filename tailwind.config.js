/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 5px 10px rgba(0, 0, 0, 0.6)',
        '4xl': [
          '8px 8px 10px rgba(0, 0, 0, 0.6)',
          '10px 10px 30px rgba(0, 0, 0, 0.4)'
        ]
        },
    },
  },
  plugins: [],
}
