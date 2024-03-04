import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import coursesData from "../../data/courses.json";

const VerticalCard = () => {
  const [course, setCourse] = useState(coursesData.courses);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
          {/* Item One */}
          {course.map((item, index) => {
            return (
              <div key={item.id} className="m-8 min-w-[300px]">
                <div
                  data-tooltip-target={`tooltip-right- ${index}`}
                  data-tooltip-placement="right"
                  className="ms-3 px-3 text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   text-start border-[1px] border-gray-200 min-h-60"
                >
                  <div className="flex justify-center items-center py-5 ">
                    <img
                      src={item.image}
                      alt="Burger"
                      className="h-[200px] w-[200px] rounded-3xl"
                    />
                  </div>
                  <p className="text-black py-2 text-[14px] amib">
                    {item.title}
                  </p>
                  <p className="text-gray-600 py-2 amir">{item.instructor}</p>
                  <div className="text-primary py-2 flex justify-start items-center gap-2 text-lg font-normal">
                    {item.rating}
                    <div className="flex gap-1">
                      <FaStar size={20} /> <FaStar size={20} />{" "}
                      <FaStar size={20} /> <FaStar size={20} />{" "}
                      <FaStarHalfAlt size={20} />
                    </div>
                    ({item.ratingsCount})
                  </div>
                  <p className="text-black amib py-2 font-bold text-[18px]">
                    Birr 1,099
                  </p>
                  <button className="bg-primary rounded-xl hover:text-primary hover:bg-white hover:border-[1px] hover:border-gray-100 text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4">
                    Add To Cart
                  </button>
                </div>
                <div className="hidden md:block">
                  <div
                    id={`tooltip-right- ${index}`}
                    role="tooltip"
                    className="absolute bg-white border-primary border-[2px] rounded-xl max-w-[300px] min-w-[300px] min-h-[450px] z-10 invisible inline-block px-3  text-sm font-medium text-gray-800 shadow-sm opacity-0 tooltip py-10  items-center justify-between"
                  >
                    <div>
                      <p className="text-black text-[14px] amib font-semibold ">
                        {item.title}
                      </p>
                      <div className="flex gap-2 justify-between px-4 items-center py-1">
                        <p className="text-[#7E7E7E] text-[10px]">
                          {item.hours} total hours
                        </p>
                        <p className="text-[#7E7E7E] text-[10px]">
                          . {item.difficulty}
                        </p>
                        <p className="rounded-xl border-primary border-[1px] px-5 py-1">
                          {item.type}
                        </p>
                      </div>
                      <p className="text-black font-normal leading-5 text-[12px] amir text-start">
                        {item.description}
                      </p>
                      <div className="flex flex-col gap-3 px-2">
                        {item.features.map((feature, index) => (
                          <div className="flex  gap-3 px-2" key={index}>
                            <FaCheck
                              size={30}
                              className="text-primary font-bold"
                            />
                            <p className="text-black font-normal leading-5 text-[12px] amir text-start">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                    {/* <button className="bg-primary rounded-xl hover:text-primary hover:bg-white hover:border-[1px] hover:border-gray-100 text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4 bott">
                    Add To Cart
                  </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
