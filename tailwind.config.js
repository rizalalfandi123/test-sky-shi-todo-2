/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        error: "#ED4C5C",
        "secondary-text": "rgb(136, 136, 136)"
      },

      boxShadow: {
        card: "rgba(0, 0, 0, 0.1) 0px 6px 10px",
      },
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
