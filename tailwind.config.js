const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#45b549",
      black: "#000000",
      white: "#ffffff"
    },
    extend: {
      fontFamily: {
        metal: ["'Metal Mania'", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      filter: ["hover"]
    }
  },
  plugins: []
}
