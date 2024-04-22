// import React from "react";
import { FaNutritionix } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";

function EnhanceExperience() {
  return (
    <>
      <div className="mx-auto  my-auto grid w-full grid-cols-1 items-center justify-center space-y-5 bg-secondary py-10 lg:grid-cols-2  lg:space-y-0">
        {/* first div */}
        <div className="mx-auto my-auto">
          <div className=" items-start  space-y-3 p-6 lg:p-20">
            <h1 className="orgsubheading">
              Enhance Your Campus Learning Experience
            </h1>
            <p className="orgtext">
              Deliver practical, job-relevant learning experiences with
              professional content and courses from university and industry
              experts
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-center px-2 sm:px-6 md:grid-cols-2 md:px-12 lg:px-0 lg:pl-16">
          {/* Second column */}
          <div className="mx-auto my-auto space-y-5 px-5  lg:py-10">
            <div className="flex flex-col items-start space-y-3 ">
              <div className="text-5xl text-primary  ">
                <FaNutritionix />
              </div>
              <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
              <p className="orgsmalltext ">
                Expand your academic offerings with a nutrition-focused
                curriculum.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 ">
              <div className="text-5xl text-primary  ">
                <GiTeacher />
              </div>
              <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
              <p className="orgsmalltext ">
                Expand your academic offerings with a nutrition-focused
                curriculum.
              </p>
            </div>
          </div>
          {/* Third div */}
          <div className="mx-auto my-auto space-y-5 px-5 py-4  lg:py-10">
            <div className="flex flex-col items-start space-y-3 ">
              <div className="text-5xl text-primary  ">
                <GiBullseye />
              </div>
              <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
              <p className="orgsmalltext ">
                Expand your academic offerings with a nutrition-focused
                curriculum.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 ">
              <div className="text-5xl text-primary  ">
                <GiTeacher />
              </div>
              <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
              <p className="orgsmalltext ">
                Expand your academic offerings with a nutrition-focused
                curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnhanceExperience;
