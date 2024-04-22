import React, { useState } from "react";
import dot from "../../assets/dot.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const WhatWeLearn = () => {
  const [showAll, setShowAll] = useState(true);

  const items = [
    "Basic principles of nutrition",
    "Roles of the six essential nutrients",
    "National and international dietary guidelines",
    "Recommended daily allowances for different age groups",
    "Functions of macronutrients (carbs, proteins, fats)",
    "Importance of micronutrients (vitamins and minerals)",
    "Nutritional needs during different life stages",
    "Special considerations for pregnant and lactating mothers",
    "Process of digestion and nutrient absorption",
    "Extraction of energy and nutrients from food",
    "Concept of energy balance",
    "Strategies for weight management and healthy body composition",
  ];

  const all = [
    "Basic principles of nutrition",
    "Roles of the six essential nutrients",
    "National and international dietary guidelines",
    "Recommended daily allowances for different age groups",
    "Functions of macronutrients (carbs, proteins, fats)",
    "Importance of micronutrients (vitamins and minerals)",
    "Nutritional needs during different life stages",
    "Special considerations for pregnant and lactating mothers",
    "Process of digestion and nutrient absorption",
    "Extraction of energy and nutrients from food",
    "Concept of energy balance",
    "Strategies for weight management and healthy body composition",
  ];

  const displayedItems = showAll ? items : items.slice(0, 4);
  const displayedAll = showAll ? all : all.slice(0, 4);

  return (
    <div className="min-h-[8vh] border-gray-200 border-2 px-10 py-4 ">
      <div>
        <p className="text-primary text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold merb p-3">
          What you'll learn
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap lg:flex-nowrap">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-10">
            <ul className="flex flex-col gap-1.5">
              {displayedItems.map((item, index) => (
                <ol
                  key={index}
                  className="flex  justify-start items-start gap-1.5"
                >
                  <img src={dot} alt="" className="h-[4px] w-[4px] mt-1.5" />
                  <li className="text-black text-[14px] font-medium amir">
                    {item}
                  </li>
                </ol>
              ))}
            </ul>

            <ul className="flex flex-col gap-1.5">
              {displayedItems.map((item, index) => (
                <ol
                  key={index}
                  className="flex  justify-start items-start gap-1.5"
                >
                  <img src={dot} alt="" className="h-[4px] w-[4px] mt-1.5" />
                  <li className="text-black text-[14px] font-medium amir">
                    {item}
                  </li>
                </ol>
              ))}
            </ul>
          </div>
        </div>
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

export default WhatWeLearn;
