module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffc222",
        secondary: "#00a149",
        border: "#e5e5e5",
        heading: "#1e1d23",
        primary_hover: "#eeac00",
      },
      height: {
        "screen-85": "85vh"
      },
      fontFamily: {
        JosefinSans: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        "hero": "url('https://i.ibb.co/grmgsSZ/React-App.png')",
      },
      container: {
        center: true,
        padding: "1 rem"
      }
    },
  },
  plugins: [],
}