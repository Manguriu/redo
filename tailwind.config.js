/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px)
        // Small devices (landscape phones, 576px and up)

        md: "768px",
        // => @media (min-width: 768px)
        // Medium devices (tablets, 768px and up)

        lg: "992px",
        // => @media (min-width: 1024px)
        // Large devices (desktops, 992px and up)

        xl: "1200px",
        // => @media (min-width: 1280px)
        // X-Large devices (large desktops, 1200px and up)

        "2xl": "1400px",
        // => @media (min-width: 1536px)
        // XX-Large devices (larger desktops, 1400px and up)
      },
    },
  },
  plugins: [],
};
