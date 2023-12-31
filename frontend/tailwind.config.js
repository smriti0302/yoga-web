/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        yblue: {
          50: "#f5f6fa",
          100: "#eaedf4",
          200: "#d1d8e6",
          300: "#a8b6d1",
          400: "#798eb7",
          500: "#58709f",
          600: "#455984",
          700: "#39486b",
          800: "#323e5a",
          900: "#283044",
          950: "#1e2433",
        },
        ylightblue: {
          50: "#f4f8fa",
          100: "#e6eff3",
          200: "#d3e2ea",
          300: "#b5d0db",
          400: "#91b7c9",
          500: "#78a1bb",
          600: "#648cac",
          700: "#597a9c",
          800: "#4c6581",
          900: "#405468",
          950: "#2a3541",
        },
        ygreen: {
          50: "#f4f9f6",
          100: "#ebf5ee",
          200: "#cde5d4",
          300: "#a6cfb3",
          400: "#77b189",
          500: "#539468",
          600: "#417853",
          700: "#356043",
          800: "#2e4d39",
          900: "#274030",
          950: "#112217",
        },
        ypeach: {
          50: "#f9f8f7",
          100: "#f3efed",
          200: "#eae2de",
          300: "#dacdc7",
          400: "#bfa89e",
          500: "#ad9286",
          600: "#96796c",
          700: "#7c6459",
          800: "#68544c",
          900: "#594a43",
          950: "#2e2521",
        },
        ybrown: {
          50: "#f4f3f2",
          100: "#e4e1dd",
          200: "#ccc4bc",
          300: "#aea196",
          400: "#968579",
          500: "#8b786d",
          600: "#74625a",
          700: "#5e4e4a",
          800: "#514442",
          900: "#483c3b",
          950: "#282020",
        },
      },
    },
  },
  plugins: [],
};
