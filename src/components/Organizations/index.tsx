import React from "react";
import SamsungLogo from "@/app/_assets/samsung-logo.svg";
import MicrosoftLogo from "@/app/_assets/microsoft-logo.svg";
import GoogleLogo from "@/app/_assets/google-logo.svg";
import SlackLogo from "@/app/_assets/slack-logo.svg";
import LGLogo from "@/app/_assets/lg-logo.svg";
import SonyLogo from "@/app/_assets/sony-logo.svg";
import Image from "next/image";

const Organizations = () => {
  return (
    <div className="my-32 flex flex-col gap-10 mx-4 md:mx-20 bg-secondaryBg rounded-2xl px-10 md:px-20 py-10 z-10 overflow-clip">
      <h2 className="leading-relaxed text-center text-3xl font-medium">
        Trusted by Leading Organizations
      </h2>
      <p className="mx-auto text-center  md:w-[35%]">
        Our 4,000+ team has expertise in almost everyprogramming language.
      </p>
      <div className="flex justify-center md:flex-nowrap flex-wrap  mt-10 gap-16 md:gap-28 md:mx-[-15rem]">
        <Image
          className="h-6 md:h-10 w-auto"
          alt="Samsung Logo"
          src={SamsungLogo}
        />
        <Image
          className="h-6 md:h-10 w-auto"
          alt="Microsoft Logo"
          src={MicrosoftLogo}
        />
        <Image
          className="h-6 md:h-10 w-auto"
          alt="Google Logo"
          src={GoogleLogo}
        />
        <Image
          className="h-6 md:h-10 w-auto"
          alt="Slack Logo"
          src={SlackLogo}
        />
        <Image className="h-6 md:h-10 w-auto" alt="LG Logo" src={LGLogo} />
        <Image className="h-6 md:h-10 w-auto" alt="Sony Logo" src={SonyLogo} />
      </div>
      <div className="bg-PrincipalBlue w-64 text-center rounded-3xl py-2  text-white mx-auto">
        Our full repertorie
      </div>
    </div>
  );
};

export default Organizations;
