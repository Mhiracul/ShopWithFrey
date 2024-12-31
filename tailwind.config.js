/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Custom font
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(to right, #131313, #191919)",
        "text-gradient":
          "linear-gradient(to right, #b57e10, #f9df7b, #f9df7b, #b57e10, #b57e10)",
      },
      backgroundClip: {
        text: true,
      },
      textFillColor: {
        transparent: "transparent",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.4)", // Custom text shadow
        md: "4px 4px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
