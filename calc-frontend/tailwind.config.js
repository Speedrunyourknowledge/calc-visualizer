import defaultTheme from "tailwindcss/defaultTheme";

const  config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/app.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans], 
      },
    },
  },
  plugins: [],
};

export default config;


// tailwind.config.js
module.exports = {
  theme: {},
  plugins: [require('tailwindcss-font-inter')]
}

// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true, // Set to false if you want to import Inter from elsewhere
    })
  ]
}