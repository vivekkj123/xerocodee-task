"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/_assets/logo.png";
import CaretDown from "@/app/_assets/CaretDown.svg";

const Navbar = () => {
  const [NavHidden, setNavHidden] = useState(true);
  return (
    <nav className="py-8 px-2 md:px-10 flex flex-col md:flex-row  items-center justify-between">
      <div className="flex md:w-auto w-full px-6 items-center justify-between">
        <Image alt="Logo" className="h-10 w-auto" src={logo} />
        <svg
          className=" md:hidden"
          onClick={() => {
            setNavHidden((s) => !s);
          }}
          height={"30px"}
          width={"30px"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <ul
          className={`md:flex flex-col mt-10 md:mt-0 md:flex-row gap-20 bg-secondaryBg px-32 py-10 md:py-3 rounded-xl md:rounded-full ${
            NavHidden ? "hidden" : "flex"
          }`}
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <span
        className={`md:flex mt-8 md:mt-0 gap-10 items-center md:gap-4 ${
          NavHidden ? "hidden" : "flex"
        }`}
      >
        <p className="flex items-center gap-2">
          EN <Image alt="Caret Down" src={CaretDown} />
        </p>
        <div className="bg-PrincipalBlue text-white px-8 py-3 rounded-full">
          Schedule a Call
        </div>
      </span>
    </nav>
  );
};

export default Navbar;
