import React from 'react'
import back from "../../assets/back.png";
import tom from "../../assets/tom.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const CoursesHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
      }}
    >
      <div className="flex justify-center items-center min-h-[70vh] pt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 sm:px-4 md:px-8 lg:px-20 justify-center items-center flex-wrap gap-10 lg:flex-nowrap">
          <div>
            <div>
              <p className="text-primary text-center text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold nun pb-3">
                The Complete Nutrition Course
              </p>
              <p className="text-primary text-[14px] lg:text-[16px] font-medium py-4">
                Unlock the secrets to optimal health with our Complete Nutrition
                Course, designed for individuals seeking a holistic
                understanding of nutrition.
              </p>
            </div>
            <div className="flex gap-2 text-primary flex-wrap">
              <p>4.6</p>
              <div className="flex gap-1 mt-1">
                <FaStar className="text-primary" />
                <FaStar className="text-primary" />
                <FaStar className="text-primary" />
                <FaStar className="text-primary" />
                <FaStarHalfAlt className="text-primary" />
              </div>
              <p>(110, 456)</p>
              <p className="text-[#7E7E7E]">25</p>
              <p className="text-[#7E7E7E]">total hour</p>
              <p className="text-[#7E7E7E]">All Level</p>
              <p>1.356,345 students</p>
            </div>
            <p className="py-5 text-primary text-[16pxx]">
              Created by Bekele Sewasew
            </p>
            <div className="flex justify-start items-center gap-10">
              <p className="merb text-black text-[18px] md:text-[20px] lg:text-[22px] text-center font-bold">
                Birr 1,500
              </p>
              <button className="bg-primary text-white min-w-[150px]    px-10  py-2 rounded font-semibold border-primary border-2">
                Add To Cart
              </button>
            </div>
          </div>
          <div>
            <img src={tom} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHero