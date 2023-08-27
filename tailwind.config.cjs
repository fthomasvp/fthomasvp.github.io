/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(216, 100%, 99%)",
        "black-rich": "hsl(216 100% 4%)",
        gunmetal: "#2b2d42",
        "blue-oxford": "hsl(211 100% 12%)",
        "blue-yale": "hsl(209 100% 20%)",
        'blue-yale-dark': '#002e59',
        'blue-yale-dark2': '#00284d',
        'blue-yale-light': '#e6f3ff',
        'blue-yale-light2': '#d9edff',
        gold: "hsl(50 100% 52%)",
        "yellow-mikado": "hsl(46 100% 50%)",
      },
      screens: {
        sm: "30em", // 480px
        md: "48em", // 768px
        lg: "62em", // 992px
        xl: "80em", // 1280px
        "2xl": "96em", // 1536px
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "cursive"],
      },
      dropShadow: {
        basic: "4px 8px 8px hsl(0deg 0% 0% / 0.38)",
        focused: "0 0 0 3px hsl(46 100% 50%)",
      },
    },
  },
  plugins: [],
};
