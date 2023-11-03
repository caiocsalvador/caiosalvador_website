import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#007CE2",
      blueTint: "#005CA8",
      lightBlue: "#63B2D9",
      darkBlue: "#2104D3",
      navy: "#05010D",
      green: "#04D361",
      lightGreen: "#8BFDBE",
      purple: "#8257E6",
      lightPurple: "#A895D3",
      orange: "#D36704",
      red: "#380C1D",
      pink: "#AF3069",
      lightGray: "#FEFEFE",
      transparent_white: "rgba(255, 255, 255, 0.1)",
      gradient_blue: "#54A7E4",
      gradient_purple: "#8067C7",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
