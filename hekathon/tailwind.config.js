// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db', // Replace with your primary color code
        secondary: '#2ecc71', // Replace with your secondary color code
        fec-green: '#78E038',
      },
    },
  },
  plugins: [],
};
