import React from "react";
import Image from "next/image";
import ArrowRight from "@/app/_assets/arrow-right.svg";
import ArrowLeft from "@/app/_assets/arrow-left.svg";

const ChooseUs = () => {
  let stories = [
    {
      Title: "Expertise Across the Tech Spectrum",
      Description:
        "Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
      bgClass: "bg-white",
      textClass: "text-primaryText",
    },
    {
      Title: "Proven Track Record of Success:",
      Description:
        "Our portfolio is a testament to our ability to deliver impactful results.",
      bgClass: "bg-GreenGradient",
      textClass: "text-white",
    },
    {
      Title: "Collaborative Approach, Transparent Communication:",
      Description: "We believe in working hand-in-hand with our clients.",
      bgClass: "bg-white",
      textClass: "text-primaryText",
    },
    {
      Title: "Tailored Solutions for Your Unique Needs:",
      Description: "We understand that no two projects are alike.",
      bgClass: "bg-secondaryBlueGradient",
      textClass: "text-white",
    },
  ];
  return (
    <div className="my-32 flex flex-col gap-10 mx-4 md:mx-20 bg-secondaryBg rounded-2xl px-10 md:px-20 py-10 z-10 overflow-clip">
      <h2 className="leading-relaxed text-center text-3xl mx-10 md:mx-72 font-medium">
        Choose Us: Your Path to Innovation and &nbsp;
        <span className="bg-secondaryBlueGradient text-transparent bg-clip-text">
          success
        </span>{" "}
      </h2>
      <div className="flex mt-10 mx-[-3rem] md:mx-[-5rem] overflow-x-scroll no-scrollbar">
        {/* cards here */}
        {stories.map((story) => (
          <div
            key={story.Title}
            className={`min-w-[24rem] w-[12rem] rounded-2xl shadow-md ${story.bgClass} ${story.textClass} mx-5 px-6 py-6`}
          >
            <h2 className="font-medium text-xl">{story.Title} </h2>
            <p className="mt-6 text-base">{story.Description} </p>
          </div>
        ))}
      </div>
      <div className="flex gap-8 justify-center">
        <div className="bg-white flex justify-center items-center h-14 w-14 rounded-full">
          <Image alt="Arrow Left Icon" src={ArrowLeft} />
        </div>
        <div className="bg-white flex justify-center items-center h-14 w-14 rounded-full">
          <Image alt="Arrow Right Icon" src={ArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
