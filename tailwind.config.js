/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#475531",
        "secondary": "#FFCB3A",
        "dark": "#1E1E1E",
        "dark-light": "#686868",
        "light": "#E4E4E4",
      },
      fontFamily: {
        "anton": ["Anton", "sans-serif"],
        "inter": ["Inter Variable", "sans-serif"],
      },
      spacing: {
        "2/12": "162px",
        "4/12": "323px",
      },
      fontSize: {
        "large": "64px",
        "extra-large": "128px",
        "small": "40px"
      },
    },
    plugins: [],
  }
}	