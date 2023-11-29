import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        league_spartan: ["var(--font-league-spartan)"],
      },
      colors: {
        blue: "#007CE2",
        blueTint: "#0083FC",
        lightBlue: "#63B2D9",
        darkBlue: "#2104D3",
        navy: "#05010D",
        green: "#04D361",
        lightGreen: "#79dba5",
        purple: "#8257E6",
        lightPurple: "#A895D3",
        orange: "#D36704",
        red: "#380C1D",
        pink: "#AF3069",
        lightGray: "#FEFEFE",
        gray: "#CACACA",
        transparent_black: "rgba(0, 0, 0, 0.20);",
        transparent_white: "rgba(255, 255, 255, 0.05)",
        gradient_blue: "#54A7E4",
        gradient_purple: "#8067C7",
        about_gcolor1: "#8A5DF3CC",
        about_gcolor2: "#8A5DF333",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
