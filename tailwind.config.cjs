/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#FE0000",
      onPrimary: "#FFFFFF",
      primaryLighter: "#FF3333",
      onPrimaryLighter: "FFFFFF",
      primaryDarker: "#E00000",
      onPrimaryDarker: "#FFFFFF",
      secondary: "#FEBB1B",
      onSecondary: "#4C4C4C",
      secondaryLighter: "#FEC848",
      onSecondaryLighter: "#4C4C4C",
      secondaryDarker: "#F4AB01",
      onSecondaryDarker: "#4C4C4C",
      surface: "#FFFFFF",
      onSurface: "#535353",
      surfaceLighter: "#FAFAFA",
      onSurfaceLighter: "#535353",
      surfaceDarker: "#F5F5F5",
      onSurfaceDarker: "#C0C0C0",
      background: "#C0C0C0",
      onBackground: "#535353",
    },
  },
  plugins: [],
};
