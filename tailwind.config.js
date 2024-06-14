/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // fontFamily: {
      //   customFont: ['"Custom Font"', "Lucida Handwriting"],
      //   // Add more custom font families as needed
      // },
      colors: {
        jwhite: "var(--white)",
        jyellow: "var(--yellow)",
        jblack: "var(--black)",
        jorange: "var(--orange)",
        joff: "var(--offwhite)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
