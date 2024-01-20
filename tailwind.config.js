module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        gray: {
          100: "#f7f7f7",
          200: "#ebebeb",
          600: "#777777",
          700: "#606666",
          800: "#693911",
          900: "#1c1c1c",
          "600_19": "#75757519",
          "800_01": "#693912",
          "800_00": "#69391200",
          "200_01": "#f1eee8",
          "800_4c": "#6939114c",
        },
        lime: { 100: "#f7e1c8", 900: "#8c5222" },
        blue_gray: { "400_3f": "#8e8e8e3f" },
        orange: { 300: "#ffad4c", 400: "#ffa131", "400_01": "#ffa132" },
        white: { A700_bc: "#ffffffbc", A700_01: "#fffdfd", A700: "#ffffff" },
        black: { "900_35": "#00000035" },
      },
      boxShadow: {
        bs1: "0px 4px  10px 0px #8e8e8e3f",
        bs: "0px 4px  10px 0px #75757519",
      },
      fontFamily: { nunito: "Nunito", montserrat: "Montserrat" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#6939114c,#6939114c)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
