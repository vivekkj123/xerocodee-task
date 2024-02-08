import Image from "next/image";
import React from "react";
import TestimonialImage from "@/app/_assets/Intersect.png";
import R1Image from "@/app/_assets/R1.svg";
import R2Image from "@/app/_assets/R2.png";
import R3Image from "@/app/_assets/R3.svg";
import ArrowRight from "@/app/_assets/arrow-right.svg";
import ArrowLeft from "@/app/_assets/arrow-left.svg";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"] });
const Testimonials = () => {
  const testimonials = [
    {
      Stars: 5,
      Title: "Exceptional Solutions, Exceeded Expectations!",
      Description:
        "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
      UserImage: R1Image,
      UserName: "Mary Johnson",
      Position: "CEO of TechCraft Solutions",
    },
    {
      Stars: 5,
      Title: "Transformed Our Business with Innovative Tech!",
      Description:
        "We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
      UserImage: R2Image,
      UserName: "Mark Williams",
      Position: "COO of InnovateNow Inc",
    },
    {
      Stars: 5,
      Title: "Sculpted User Experiences Beyond Imagination!",
      Description:
        "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
      UserImage: R3Image,
      UserName: "Emily Clark",
      Position: "CMO of Visionary Apps",
    },
    {
      Stars: 5,
      Title: "Sculpted User Experiences Beyond Imagination!",
      Description:
        "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
      UserImage: R3Image,
      UserName: "Emily Clark",
      Position: "CMO of Visionary Apps",
    },
  ];
  return (
    <>
      <div className="px-10 md:px-20 mt-10 grid md:grid-cols-2">
        <Image
          alt="Stock image denoting testimonials"
          className="h-68 md:h-[30rem] w-auto"
          src={TestimonialImage}
        />
        <div className="mx-10">
          <h2 className="text-4xl text-center md:text-left  font-medium leading-normal md:w-[75%]">
            We&apos;ve stopped counting. <br className="md:block hidden" /> Over 500 brands count on us.
          </h2>
          <p className="mt-10 text-center md:text-left md:text-xl  md:w-[85%]">
            Our 4,000+ team has expertise in almost everyprogramming language.
          </p>
        </div>
      </div>
      <div
        className={`CardHolder flex-1 flex overflow-x-scroll no-scrollbar md:p-10 p-4 relative md:top-[-12rem] ${DMSans.className}`}
      >
        {testimonials.map((review) => (
          <div
            key={review.Description}
            className="Card mx-2 md:mx-7 min-w-[24rem] leading-relaxed px-10 py-4 bg-white rounded-xl shadow-lg"
          >
            <p>
              {new Array(review.Stars).fill(null).map((i) => (
                <span key={i}>⭐️️</span>
              ))}
            </p>

            <h3 className="mt-6 font-bold text-xl">
              &quot;{review.Title}&quot;
            </h3>
            <p className="mt-4">&quot;{review.Description}&quot;</p>
            <hr className="my-5" />
            <div className="flex items-center gap-6">
              <Image
                alt={review.UserName}
                className="h-8 w-auto"
                src={review.UserImage}
              />
              <div>
                <h2 className="font-bold text-lg">{review.UserName}</h2>
                <p className="text-sm">{review.Position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-8 justify-center relative md:top-[-10rem]">
        <div className="bg-secondaryBg flex justify-center items-center h-14 w-14 rounded-full">
          <Image alt="Arrow Left Icon" src={ArrowLeft} />
        </div>
        <div className="bg-secondaryBg flex justify-center items-center h-14 w-14 rounded-full">
          <Image alt="Arrow Right Icon" src={ArrowRight} />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
