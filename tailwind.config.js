const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        metal: ["'Metal Mania'", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
