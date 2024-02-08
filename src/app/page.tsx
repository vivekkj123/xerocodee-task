import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import Navbar from "@/components/Navbar";
import React from "react";
import Services from "@/components/Services";
import Organizations from "@/components/Organizations";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="text-PrimaryText">
      <Navbar />
      <Hero />
      <Teams />
      <Services />
      <Organizations />
      <Testimonials />
    </div>
  );
};

export default Home;
