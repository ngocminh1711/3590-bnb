/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  plugins: [

  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundCreate: "url('/src/public/background_sea.jpg')",
        
      },
      scale: {
        'icon': '2.5',
      },

      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.5)',
      },

    },
    
  },

};
