import React from "react";
import C1Image from "@/app/_assets/C1.png";
import C2Image from "@/app/_assets/C2.png";
import C3Image from "@/app/_assets/C3.png";
import C4Image from "@/app/_assets/C4.png";
import C5Image from "@/app/_assets/C5.png";
import Image from "next/image";
const Crew = () => {
  return (
    <>
      <div className="flex justify-center pl-12 flex-wrap px-5">
        <Image
          alt="Software Developers"
          className="h-56 w-auto ml-[-3rem]"
          src={C1Image}
        />
        <Image
          alt="QA Engineers"
          className="h-56 w-auto ml-[-3rem]"
          src={C2Image}
        />
        <Image
          alt="UX Designers"
          className="h-56 w-auto ml-[-3rem]"
          src={C3Image}
        />
        <Image
          alt="Data Scientists"
          className="h-56 w-auto ml-[-3rem]"
          src={C4Image}
        />
        <Image
          alt="Project Managers"
          className="h-56 w-auto ml-[-3rem]"
          src={C5Image}
        />
      </div>
      <h2 className="text-3xl text-center my-16">Let&apos;s Form Your Crew.</h2>
      <div className="bg-PrincipalBlue w-64 text-center rounded-3xl py-2  text-white mx-auto">
        Schedule a Call
      </div>
    </>
  );
};

export default Crew;
