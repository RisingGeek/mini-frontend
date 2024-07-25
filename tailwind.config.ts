import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: {
          default: "rgb(127, 128, 132)"
        },
        default: "rgb(127, 128, 132)",
        "cgray-50": "rgb(127, 128, 132)",
        "cgray-100": "rgba(53, 55, 59, 1)",
        "cgray-200": "rgb(25, 25, 32)"
      }
    },
  },
  plugins: [],
};
export default config;
