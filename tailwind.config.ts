import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryText: "3d3d3d",
        PrincipalBlue: "#3171DE",
        secondaryBg: "#F7F7FD"
      }
    },
  },
  plugins: [],
};
export default config;
