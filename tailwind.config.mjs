/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      blue: {
        50: "#e8f5ff",
        100: "#d5edff",
        200: "#b3dbff",
        300: "#85c1ff",
        400: "#5698ff",
        500: "#2f6eff",
        600: "#0c3fff",
        700: "#0033ff",
        800: "#0631cd",
        900: "#10329f",
        950: "#0a1c5c",
      },
      keyframes: {
        bounceAstro: {
          "0%": {
            transform: "translate(2px,30px)",
          },
          "100%": {
            transform: "translate(-2px,0px)",
          },
        },
      },
      animation: {
        bounceAstro: "bounceAstro 3s ease infinite alternate both",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
