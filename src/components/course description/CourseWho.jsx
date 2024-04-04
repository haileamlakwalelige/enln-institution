import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CourseWho = () => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div className="min-h-[8vh] px-10 py-4 w-full mt-4">
      <div className="flex flex-col justify-center items-start">
        <p className="text-primary text-start text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold merb py-3">
          Who is this Course is for
        </p>
        <p
          className={`text-black font-normal text-[14px] amir text-justify ${
            showAll ? "line-clamp-none" : "line-clamp-4"
          }`}
        >
          This course is designed for individuals seeking a comprehensive
          understanding of nutrition and its impact on overall well-being.
          Whether you're a health enthusiast, a parent wanting to provide
          optimal nutrition for your family, or someone interested in pursuing a
          career in nutrition or wellness, this course caters to a diverse
          audience. It is especially beneficial for those who want to make
          informed decisions about their diet, learn practical strategies for
          maintaining a healthy lifestyle, or contribute to promoting
          nutritional awareness in their communities. The content is presented
          in a user-friendly manner, making it accessible to beginners while
          offering valuable insights for those with a more advanced interest in
          the field of nutrition.
        </p>

        <div
          onClick={() => setShowAll(!showAll)}
          className="text-primary font-semibold mt-5"
        >
          {showAll ? (
            <div className="flex justify-start items-center gap-2">
              <button>Show less</button>
              <FaAngleUp size={25} className="mt-1" />
            </div>
          ) : (
            <div className="flex justify-start items-center gap-2">
              <button>Show more</button>
              <FaAngleDown size={25} className="mt-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseWho;
