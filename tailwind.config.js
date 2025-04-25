// tailwind.config.js
export const content = ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    keyframes: {
      underline: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
    animation: {
      underline: "underline 0.3s ease-in-out forwards",
    },
  },
};
export const plugins = [];
