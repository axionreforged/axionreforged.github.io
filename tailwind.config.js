/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/*.{js,ts,jsx,tsx}",
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            600: '#2563eb',
            700: '#1d4ed8',
          },
          secondary: {
            500: '#f59e0b',
            600: '#d97706',
          },
        },
      },
    },
    plugins: [],
  }