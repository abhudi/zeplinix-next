/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63946", // This is your custom red color
        secondary: "#303030",
        "bg-card": "#4949494F",
        "banner-button": "#424242A6",
      },
      fontSize: {
        "fs-20": "20px", // Custom font size of 20px
        "fs-16": "16px", // Custom font size of 20px
        "fs-54": "54px", // Custom font size of 20px
      },
      spacing: {
        "custom-pt": "92px", // Custom padding-top value
      },
      height: {
        80: "23rem", // Custom height for h-80
      },
    },
  },
  plugins: [],
  compilerOptions: {
    typeRoots: ["node_modules/@types", "src/types"],
  },
};
