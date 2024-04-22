import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";
import HorizontalCard from "../Reusable/HorizontalCard";

function AllCoursesList() {
  const num = [2, 3, 4, 5];
  return (
    <div>
      <div className="mt-12 flex flex-col justify-center items-center">
        <p className="text flex lg:w-full w-10/12 justify-end font-semibold py-5 px-4">
          1000 results
        </p>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
      <div>
        <div className="py-12 flex justify-center items-center md:gap-1 ">
          <button className="bg-primary rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-white font-bold text-xl">
            <FaLessThan />
          </button>
          <button className="bg-primary rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-white font-medium md:font-bold text-xl mx-2">
            1
          </button>
          <div className="py-12 flex justify-center items-center gap-1 ">
            {num.map((item, index) => (
              <button
                key={index}
                className="rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-black hover:bg-primary hover:text-white hover:text-xl font-medium text-base md:hover:font-bold hover:mx-2"
              >
                {item}
              </button>
            ))}
          </div>
          <p>. . .</p>
          <button className="rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-black font-medium text-base hover:bg-primary hover:text-white hover:text-xl md:hover:font-bold hover:mx-2">
            56
          </button>
          <button className="bg-primary rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-white font-bold text-xl">
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllCoursesList;
