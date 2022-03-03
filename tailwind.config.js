module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      0: "0px",
      32: "32px",
      40: "40px",
      300: "300px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
