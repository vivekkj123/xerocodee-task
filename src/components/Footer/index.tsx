import Image from "next/image";
import React from "react";
import ArrowImage from "@/app/_assets/arrow-right-head.svg";
import LinkedinLogo from "@/app/_assets/Linkedin.svg";
import FBLogo from "@/app/_assets/Facebook.svg";
import TwitterLogo from "@/app/_assets/Twitter.svg";
import logo from "@/app/_assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 px-14 md:px-28">
        <div className="order-2 md:order-1">
          <h2 className="font-medium my-4">Product</h2>
          <ul className="opacity-50 leading-loose  text-FooterText">
            <li>Employee database</li>
            <li>Payroll</li>
            <li>Absences</li>
            <li>Time tracking</li>
            <li>Shift planner</li>
            <li>Recruiting</li>
          </ul>
        </div>
        <div className="flex md:gap-40 gap-20 order-1 md:order-2">
          <div>
            <h2 className="font-medium my-4">Information</h2>
            <ul className="opacity-50 text-FooterText leading-loose ">
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium my-4 md:order-3">Company</h2>
            <ul className="opacity-50 text-FooterText leading-loose ">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Lift Media</li>
            </ul>
          </div>
        </div>

        <div className=" bg-secondaryBg px-6 md:px-10 w-full py-10 rounded-3xl order-3 md:order-4">
          <h2>Subscribe</h2>
          <span className="flex flex-col justify-center">
            <div className="flex items-center">
              <input
                className="px-4 py-3 my-4 outline outline-1 outline-[#E7E8F2] rounded-3xl w-[80%]"
                type="text"
                placeholder="Email address"
              />
              <div className="bg-PrincipalBlue rounded-full h-12 w-12 flex justify-center items-center relative left-[-3rem]">
                <Image alt="Arrow" className="h-4 w-auto" src={ArrowImage} />
              </div>
            </div>
            <p className="text-DescriptiveText text-sm opacity-60">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </span>
        </div>
      </div>
      <hr className="my-10 w-[90%] mx-auto" />
      <div className="flex flex-col md:flex-row justify-between px-10 md:px-20 py-4">
        <div className="flex w-[60%] justify-between items-center order-2 md:order-1 gap-10">
          <Image className="h-10 w-auto" alt="Logo" src={logo} />
          <div>
            <ul className="flex justify-between items-center gap-10">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 order-1 mb-8 md:mb-0 md:order-2">
          <Image alt="Linkedin" src={LinkedinLogo} />
          <Image alt="Facebook" src={FBLogo} />
          <Image alt="Twitter" src={TwitterLogo} />
        </div>
      </div>
    </>
  );
};

export default Footer;
