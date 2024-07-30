import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url('/images/background.png')",
      },
      colors: {
        main: "#6EBEB5",
        main_text: "#85C8C0",
      },
      height: {
        main: "calc(100vh - 80px - 54px)",
      },
    },
  },
  plugins: [],
};
export default config;
