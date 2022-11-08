/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js', './src/**/*.{html,js}'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundCreate: "url('/src/public/background_sea.jpg')",
      },
      scale: {
        'icon': '2.5',
      },
    },
    
  },

};
