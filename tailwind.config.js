/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'backgroundCreate' : "url('/src/public/background_sea.jpg')"
            }
        },
    },
  }



