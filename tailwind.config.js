/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      "sans": "'Lato', sans-serif"
    },
    backgroundImage: {
      "me": "url('../assets/me.png')",
      "social-media": "url('../assets/social-media.png')",
      "web": "url('../assets/web.png')"
    },
    width: {
      "width-card": "23rem",
    },
    height: {
      "height-card": "33rem",
    },
    borderRadius: {
      "extra-large": "40px",
      "large": "1.5rem"
    },
    extend: {
      colors: {
        "blue-btn": "#19BEFA",
        "gray-btn": "#666"
      }
    },
  },
  plugins: [],
}
