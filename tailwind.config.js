/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "special-font" : 'Nanum Pen Script'
      },
      colors: {
        "main-dark" : "#202020"
      },
      keyframes: {
        scream : {
          "0%, 100%" : {transform: "scale(1)"},
          "50%" : {transform: "scale(1.04)"}
        }
      },
      animation: {
        scream : "scream 2s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

