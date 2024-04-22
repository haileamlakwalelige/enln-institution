import React from "react";
import VerticalCardsTrying from "../try/VerticalCardsTrying";
import VerticalCardTryings from "../try/VerticalCardTryings";

const BroadSelection = () => {
  // Check if the screen width is less than lg breakpoint (1024px)
  const isMobileScreen = window.innerWidth <= 1023;

  return (
    <div>
      <div className="px-2 sm:px-6 md:px-12 lg:px-32">
        <h1 className="heading py-5 text-center lg:text-start">
          Broad Selection of Courses
        </h1>
        <p className="text-[21px] font-semibold text-black merb py-3">
          Expand your career opportunities with Nutrition Leadership
        </p>
        <p className="tex-black text-[16px] amir">
          Enhance your career prospects by delving into Nutrition Leadership.
          This program is designed to broaden your knowledge and skills in
          nutrition, providing valuable insights into leadership within the
          field. Elevate your career trajectory with a focus on nutrition
          leadership.
        </p>
      </div>
      <div>
        {isMobileScreen ? <VerticalCardTryings /> : <VerticalCardsTrying />}
      </div>
    </div>
  );
};

export default BroadSelection;
