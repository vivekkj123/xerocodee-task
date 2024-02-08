import React from "react";
import FrontendIcon from "@/app/_assets/monitor.svg";
import BackendIcon from "@/app/_assets/simcard.svg";
import DataAnalystsIcon from "@/app/_assets/driver.svg";
import Image from "next/image";

const Teams = () => {
  const Teams = [
    {
      Icon: FrontendIcon,
      Title: "Front-end",
      Description:
        "Our frontend developers understand the delicate balance between aesthetics and functionality. ",
    },
    {
      Icon: BackendIcon,
      Title: "Back-end",
      Description:
        "Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.",
    },
    {
      Icon: DataAnalystsIcon,
      Title: "Data Analysts",
      Description:
        "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.",
    },
  ];
  return (
    <div className="Teams mt-10">
      <h2 className="md:text-center w-[65%] px-8 leading-loose text-2xl font-medium">
        We have multidisciplinary teams to meet any{" "}
        <span className="bg-principalBlueGradient text-transparent bg-clip-text">
          challenge.
        </span>
      </h2>

      <div className="grid md:grid-cols-3 mt-10 px-6 md:px-20 py-10 shadow-xl md:mx-20 mx-4 rounded-3xl gap-6">
        {Teams.map((Team) => (
          <div key={Team.Title} className="flex flex-col gap-5 px-6">
            <Image alt={Team.Title} src={Team.Icon} />
            <h2 className="text-xl font-medium">{Team.Title}</h2>
            <p className="text-DescriptiveText">{Team.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
