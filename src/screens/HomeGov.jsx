import React from "react";
import HeroGov from "../components/HomeGov/HeroGov";
import Companies from "../components/Reusable/Companies";
import WhyUs from "../components/HomeGov/WhyUs";
import Testimonial from "../components/HomeInd/Testimonials";
import GovHub from "../components/HomeGov/GovHub";

const HomeGov = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroGov />
      <Companies />
      <WhyUs />
      <GovHub />
      <Testimonial />
    </div>
  );
};

export default HomeGov;
