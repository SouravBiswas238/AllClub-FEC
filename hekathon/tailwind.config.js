module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "cmyk"],
  },
  plugins: [require("daisyui")],
 
};
