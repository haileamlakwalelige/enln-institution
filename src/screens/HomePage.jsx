// import React from "react";
import Hero from "../components/HomeInd/Hero";
import Companies from "../components/Reusable/Companies";
import WhatWeOffer from "../components/HomeInd/WhatWeOffer";
import Benefits from "../components/HomeInd/Benefit";
import FAQ from "../components/HomeInd/FAQ";
import Testimonial from "../components/HomeInd/Testimonials";
import RegisterToday from "../components/Reusable/RegisterToday";
import BroadSelection from "../components/HomeInd/BroadSelection";


const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Companies />
      <WhatWeOffer />
      <BroadSelection />
      <Benefits />
      <FAQ />
      <Testimonial />
      <RegisterToday />
    </div>
  );
};

export default HomePage;
