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
        DescriptiveText: "#525252",
        PrincipalBlue: "#3171DE",
        PrincipalGreen: "#66B066",
        secondaryBg: "#F7F7FD",
        secondaryText: "#F3BC4C"

      },
      backgroundImage: {
        principalBlueGradient: "linear-gradient(180deg, #3171DE 0%, #704AF2 100%)",
        secondaryBlueGradient: "linear-gradient(180deg, #3171DE 0%, #4AC0F2 100%)",
        GreenGradient: "linear-gradient(232.88deg, #62AE6E 28.46%, #EDE14F 162.02%)"
      }
    },
  },
  plugins: [],
};
export default config;
