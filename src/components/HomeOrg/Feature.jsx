import React from "react";
import cerfi from "../../assets/certi.png";

const Feature = () => {
  return (
    <div>
      <div>
        <p className="text-[20px] text-black md:text-[22px] lg:text-[24px] xl:text-[30px] font-bold merb text-center py-10">
          Feature
        </p>
        <div className="flex flex-wrap  gap-10 lg:gap-20 justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20">
          {/* Feature one */}
          <div className=" w-[300px] min-h-[200px] shadow-gray-500 border-gray-400 border-2 shadow-inner py-4 px-5">
            <div className="text-end flex justify-end">
              <img src={cerfi} alt="" className="w-[43px] h-[37px]" />
            </div>
            <p className="text-primary text-[18px] md:text-[20px] lg:text-[22px] merb font-bold px-5">
              Expert Faculty:{" "}
            </p>
            <p className="text-black text-[14px] amir font-semibold mt-4 px-5">
              Accomplished faculty with extensive nutrition experience.
            </p>
          </div>

          {/* Feature two */}
          <div className=" w-[300px] min-h-[200px] shadow-gray-500 border-gray-400 border-2 shadow-inner py-4 px-5">
            <div className="text-end flex justify-end">
              <img src={cerfi} alt="" className="w-[43px] h-[37px]" />
            </div>
            <p className="text-primary text-[18px] md:text-[20px] lg:text-[22px] merb font-bold px-5">
              Expert Faculty:{" "}
            </p>
            <p className="text-black text-[14px] amir font-semibold mt-4 px-5">
              Accomplished faculty with extensive nutrition experience.
            </p>
          </div>

          {/* Feature Three */}
          <div className=" w-[300px] min-h-[200px] shadow-gray-500 border-gray-400 border-2 shadow-inner py-4 px-5">
            <div className="text-end flex justify-end">
              <img src={cerfi} alt="" className="w-[43px] h-[37px]" />
            </div>
            <p className="text-primary text-[18px] md:text-[20px] lg:text-[22px] merb font-bold px-5">
              Expert Faculty:{" "}
            </p>
            <p className="text-black text-[14px] amir font-semibold mt-4 px-5">
              Accomplished faculty with extensive nutrition experience.
            </p>
          </div>

          {/* Feature Four */}
          <div className=" w-[300px] min-h-[200px] shadow-gray-500 border-gray-400 border-2 shadow-inner py-4 px-5">
            <div className="text-end flex justify-end">
              <img src={cerfi} alt="" className="w-[43px] h-[37px]" />
            </div>
            <p className="text-primary text-[18px] md:text-[20px] lg:text-[22px] merb font-bold px-5">
              Expert Faculty:{" "}
            </p>
            <p className="text-black text-[14px] amir font-semibold mt-4 px-5">
              Accomplished faculty with extensive nutrition experience.
            </p>
          </div>

          {/* Feature Five */}
          <div className=" w-[300px] min-h-[200px] shadow-gray-500 border-gray-400 border-2 shadow-inner py-4 px-5">
            <div className="text-end flex justify-end">
              <img src={cerfi} alt="" className="w-[43px] h-[37px]" />
            </div>
            <p className="text-primary text-[18px] md:text-[20px] lg:text-[22px] merb font-bold px-5">
              Expert Faculty:{" "}
            </p>
            <p className="text-black text-[14px] amir font-semibold mt-4 px-5">
              Accomplished faculty with extensive nutrition experience.
            </p>
          </div>

          {/* Feature Five */}
          <div className=" w-[300px] min-h-[200px] shadow-gray-500 border-gray-400 border-2 shadow-inner py-4 px-5">
            <div className="text-end flex justify-end">
              <img src={cerfi} alt="" className="w-[43px] h-[37px]" />
            </div>
            <p className="text-primary text-[18px] md:text-[20px] lg:text-[22px] merb font-bold px-5">
              Expert Faculty:{" "}
            </p>
            <p className="text-black text-[14px] amir font-semibold mt-4 px-5">
              Accomplished faculty with extensive nutrition experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
