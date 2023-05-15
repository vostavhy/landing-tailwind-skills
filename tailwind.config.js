/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1980px",
      md: "992px",
      sm: "768px",
      xs: "480px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(94.59deg, #4923B4 2.39%, #E878CF 97.66%)",
        logo: "url('/images/logo.svg')",
      },
      colors: {
        primary: "#5027B5",
        secondary: "#666768",
      },
    },
    plugins: [],
  },
};
