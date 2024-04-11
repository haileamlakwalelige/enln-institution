import React from "react";
import Partners from "./Partners";

const Container = () => {
  return (
    <div className="bg-[#D9D9D9] py-10 px-2 sm:px-6 md:px-16 lg:px-36">
      <p className="text-center text-white text-[30px] md:text-[35px] lg:text-[40px]">
        Trusted By
      </p>
      <Partners />
    </div>
  );
};

export default Container;
