import React from "react";
import SoftwareDevIcon from "@/app/_assets/document-code.svg";
import QAIcon from "@/app/_assets/setting-5.svg";
import AIIcon from "@/app/_assets/data.svg";
import UXIcon from "@/app/_assets/brush.svg";
import MobAppIcon from "@/app/_assets/mobile.svg";
import PlatformIcon from "@/app/_assets/shapes.svg";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      Icon: SoftwareDevIcon,
      Title: "Custom Software Development",
      Description:
        "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
    },
    {
      Icon: QAIcon,
      Title: "QA and Testing",
      Description:
        "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
    },
    {
      Icon: AIIcon,
      Title: "AI and Data Science",
      Description:
        "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
    },
    {
      Icon: UXIcon,
      Title: "UX/UI Design",
      Description:
        "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
    },
    {
      Icon: MobAppIcon,
      Title: "Mobile App Development",
      Description:
        "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
    },
    {
      Icon: PlatformIcon,
      Title: "Platform and Infrastructure",
      Description:
        "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
    },
  ];
  return (
    <div className="px-6 md:px-20 mt-28 flex flex-col items-center">
      <h2 className="font-medium md:text-left w-[65%] md:w-auto leading-relaxed text-3xl">
        Empowering Your Digital Vision: Our <br />
        Comprehensive Tech Services.
      </h2>
      <div className="grid md:grid-cols-3 w-full overflow-x-scroll  overflow-y-visible md:grid-flow-row grid-flow-col mt-10 no-scrollbar">
        {services.map((Service) => (
          <div
            key={Service.Title}
            className="flex h-auto md:h-80 justify-between flex-col shadow-xl rounded-3xl py-8 gap-5 px-6 w-64 md:w-auto mx-3 md:mx-10 my-6"
          >
            <Image alt={Service.Title} src={Service.Icon} />
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-medium whitespace-pre-wrap w-full">{Service.Title}</h2>
              <p className="text-DescriptiveText">{Service.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
