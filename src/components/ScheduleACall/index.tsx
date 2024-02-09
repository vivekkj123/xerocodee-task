import React from "react";
import ContactUsImage from "@/app/_assets/ContactUsImage.png";
import Image from "next/image";

const ScheduleACall = () => {
  return (
    <>
      <div className="mt-20 min-h-[30rem] rounded-2xl bg-secondaryBlueGradient py-20 mx-8 md:mx-20">
        <h2 className="text-white px-[12%] md:px-[30%] leading-relaxed text-center font-semibold text-3xl">
          Ready to Transform Your Vision into Reality? Let&apos;s Get Started!
        </h2>
        <div className="bg-white w-44 text-center rounded-3xl py-2  text-PrincipalBlue mx-auto my-10">
          Schedule a Call
        </div>
      </div>
      <Image
        alt="Contact Us"
        className="md:h-80 h-56 w-auto relative top-[-6rem] mx-auto md:top-[-10rem]"
        src={ContactUsImage}
      />
    </>
  );
};

export default ScheduleACall;
