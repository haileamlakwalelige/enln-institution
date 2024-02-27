// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#025464",
          secondary: "#b3cbd0",
          accent: "#001014",
        },
      },
      "light",
    ],
  },
  plugins: [
    require("daisyui", "prettier-plugin-tailwindcss", "@tailwindcss/line-clamp", "preline/plugin"),
  ],
};
