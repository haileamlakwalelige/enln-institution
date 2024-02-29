import React from "react";
import org from "../../assets/orga.png";

const Hero = () => {
  return (
    <div className="min-h-[60vh] bg-gray-300">
      <div className="flex justify-center gap-0 flex-col-reverse lg:flex-row items-center px-2 sm:px-6 md:px-12 lg:px-32 pt-0 lg:pt-6 py-10 lg:py-0">
        <div className="lg:w-1/2 w-full justify-center lg:justify-between items-center lg:items-start flex flex-col gap-10 md:gap-20 lg:gap-32">
          <div>
            <p className="text-primary text-[36px] md:text-[42px] lg:text-[45px]  nun font-extrabold">
              Empowering Leaders, <br /> Transforming Communities
            </p>
            <p className="font-medium text-primary mer leading-8 mt-3">
              Harness &nbsp; the &nbsp; strength &nbsp; of &nbsp; collaboration
              &nbsp; and &nbsp; align <br /> yourself &nbsp; with &nbsp; a
              &nbsp; network &nbsp; deeply &nbsp; committed &nbsp; to &nbsp; the{" "}
              <br />
              cultivation &nbsp; of &nbsp; healthier &nbsp; communities.
            </p>
          </div>
          <div>
            <button className="text-white bg-primary font-semibold text-xl py-2 px-10 rounded">
              Contact Sales
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end items-start">
          <img src={org} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
