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
        PrimaryText: "#3d3d3d",
        PrincipalBlue: "#3171DE",
        PrincipalGreen: "#66B066",
        secondaryBg: "#F7F7FD",
        secondaryText: "#F3BC4C"

      }
    },
  },
  plugins: [],
};
export default config;
