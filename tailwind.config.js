/** @type {import('tailwindcss').Config} */
module.exports = {
    // plugins: [
    //     require('flowbite/plugin')
    // ],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        // './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

    ],
    theme: {
        extend: {
            backgroundImage: {
                'backgroundCreate' : "url('/src/public/background_sea.jpg')"
            }
        },
    },
  }



