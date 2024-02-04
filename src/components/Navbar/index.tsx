import Image from "next/image";
import React from "react";
import logo from "@/app/_assets/logo.png";
const Navbar = () => {
  return (
    <nav className="py-8 px-12 flex items-center justify-between">
      <Image alt="Logo" className="h-10 w-auto" src={logo} />
      <div>
        <ul className="flex gap-20 bg-secondaryBg px-16 py-3 rounded-full">
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
      <span className="flex items-center gap-4">
        <p>EN ⇩</p>
        <div className="bg-PrincipalBlue text-white px-8 py-3 rounded-full">
          Schedule a Call
        </div>
      </span>
    </nav>
  );
};

export default Navbar;
