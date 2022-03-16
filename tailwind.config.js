module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./images/loginbg.jpg')",
        hero: "url('./images/pizza-hero.jpg')",
      },
      colors: {
        btnprimary: "#d79914",
        btnsecondary: "#ffe964",
        facebook: "#4267B2",
        navbar: "#242424",
      },
      fontFamily: {
        header: "'Kaushan Script', cursive",
        secondary: "'Caveat Brush', cursive",
      },
    },
  },
  plugins: [],
}