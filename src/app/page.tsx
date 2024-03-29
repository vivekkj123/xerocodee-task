import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import Navbar from "@/components/Navbar";
import React from "react";
import Services from "@/components/Services";
import Organizations from "@/components/Organizations";
import Testimonials from "@/components/Testimonials";
import ChooseUs from "@/components/ChooseUs";
import Crew from "@/components/Crew";
import ScheduleACall from "@/components/ScheduleACall";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="text-PrimaryText">
      <Navbar />
      <Hero />
      <Teams />
      <Services />
      <Organizations />
      <Testimonials />
      <ChooseUs />
      <Crew />
      <ScheduleACall />
      <Footer />
    </div>
  );
};

export default Home;
