import { Roboto_Flex } from "next/font/google";
import React from "react";
import styles from "@/components/Hero/styles.module.css";
const RobotoFlex = Roboto_Flex({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={`${styles.HeroCol1} grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 py-10 md:py-20 items-center`}
    >
      <div>
        <h2
          className={`text-secondaryText uppercase font-extrabold md:font-semibold ${RobotoFlex.className}`}
        >
          Tech Services
        </h2>
        <h1 className="md:text-PrimaryText text-white md:font-semibold font-extrabold text-5xl md:w-96 w-[65%] leading-tight mt-6">
          TechSynergy: Innovate, Create, Elevate
        </h1>
        <p className="mt-10 text-lg md:text-PrimaryText text-white ">
          Unlocking Possibilities, One Code at a Time
        </p>
        <div className="bg-PrincipalGreen mt-8 text-white py-3 px-5 w-40 flex justify-center rounded-full">
          See Projects
        </div>
      </div>
      <div className={`hidden md:block ${styles.HeroBg}`}></div>
    </div>
  );
};

export default Hero;
