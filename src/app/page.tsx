import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="text-PrimaryText">
      <Navbar />
      <Hero />
      <Teams/>
    </div>
  );
};

export default Home;
