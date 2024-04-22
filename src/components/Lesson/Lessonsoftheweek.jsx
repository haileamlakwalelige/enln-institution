import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import vids from "../../assets/vids.png";
import pdfs from "../../assets/pdfs.png";
import quizs from "../../assets/quizs.png";

function Lessonsoftheweek() {
  const objectives = [
    "Identify the key components of a balanced and nutritious diet",
    "Understand the role of macronutrients (carbohydrates, proteins, fats) in the body",
    "Explore the functions of micronutrients (vitamins and minerals) and their importance",
    "Recognize the significance of maintaining a proper balance in dietary intake",
    "Explain the impact of hydration on overall health",
    "Discuss the practical aspects of planning and maintaining a healthy diet",
    "Explore the relationship between nutrition and various aspects of well-being",
  ];

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(true);
  const togglePriceDropdown = () => {
    setPriceDropdownOpen((prev) => !prev);
  };

  const [islessonDropdownOpen, setlessonDropdownOpen] = useState(true);
  const togglelessonDropdown = () => {
    setlessonDropdownOpen((prev) => !prev);
  };

  const [showFullText, setShowFullText] = useState(true);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <div className="relative z-10 inline-block  w-full items-center justify-center border border-gray-200 text-left lg:ml-5 lg:w-11/12">
        <div
          onClick={togglePriceDropdown}
          className="lg:text phonetext inline-flex w-full  bg-white px-4  py-2 font-bold  focus:outline-none "
        >
          <svg
            className={`mt-1 h-3 w-3 transform ${
              isPriceDropdownOpen ? "rotate-180" : "rotate-90"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>

          <span className="mx-3"> Fundamentals of Nutrition</span>
        </div>

        {isPriceDropdownOpen && (
          <div className="mt-2 w-full  rounded-md bg-white ring-0  lg:relative   lg:origin-top-right">
            <div className="my-5 flex w-full flex-col items-start justify-center gap-5 border-b border-black px-2 py-3 sm:px-4 md:flex-row md:px-0 lg:justify-center">
              {" "}
              {/* Video svg */}
              <div className="flex gap-3">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height={24}
                  viewBox="0 0 16 16"
                  width={24}
                  className="css-f2w3r7 inline space-x-2"
                  id="cds-react-aria-58"
                >
                  <g
                    clipPath="url(#cds-react-aria-58_0)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  >
                    <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                    <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                  </g>
                  <defs>
                    <clipPath id="cds-react-aria-58_0">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="lg:smalltext phonesmalltext flex space-x-1">
                  <p className="font-bold hover:underline">12h 35m</p>
                  <p> of videos left </p>
                </span>
              </div>
              {/* readig svg */}
              <div className="flex gap-3">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height={24}
                  viewBox="0 0 16 16"
                  width={24}
                  className="css-f2w3r7"
                  id="cds-react-aria-59"
                >
                  <g
                    clipPath="url(#cds-react-aria-59_0)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  >
                    <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                    <path d="M3.5 5h3.518l.018.001a1.58 1.58 0 011.463 1.463l.001.018V12l-1 .03A1.1 1.1 0 006.484 11H3.5V5zm1 1v4H6.53a2.1 2.1 0 01.97.306V6.521A.58.58 0 006.98 6H4.5z" />
                    <path d="M8.982 5H12.5v6H9.517a1.1 1.1 0 00-1.018 1.03L7.5 12V6.5H8l-.499-.036a1.58 1.58 0 011.463-1.463L8.982 5zM8.5 6.52v3.786a2.1 2.1 0 01.97-.305L9.485 10H11.5V6H9.02a.58.58 0 00-.52.52z" />
                  </g>
                  <defs>
                    <clipPath id="cds-react-aria-59_0">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="lg:smalltext phonesmalltext flex space-x-1">
                  <p className="font-bold hover:underline">12h 35m</p>
                  <p>reading left </p>
                </span>
              </div>
              {/* assesment svg*/}
              <div className="flex gap-3">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height={24}
                  viewBox="0 0 16 16"
                  width={24}
                  data-testid="quiz-icon"
                  id="cds-react-aria-60"
                  className="css-0"
                >
                  <g
                    clipPath="url(#cds-react-aria-60_0)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  >
                    <path d="M4.39 3.61h7.22v8.78H4.39V3.61zm1 1v6.78h5.22V4.61H5.39z" />
                    <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                    <path d="M6.5 6.29h3v1h-3v-1zM6.5 8.71h3v1h-3v-1z" />
                  </g>
                  <defs>
                    <clipPath id="cds-react-aria-60_0">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="lg:smalltext phonesmalltext flex space-x-1">
                  <p className="font-bold hover:underline">10</p>
                  <p>assessments </p>
                </span>
              </div>
            </div>
            <div className="mx-auto w-11/12">
              <div className="w-full">
                <p className="lg:text phonetext">
                  This week, you will delve into the fundamentals of nutrition,
                  exploring the essential components that contribute to a
                  healthy diet. Topics will include macronutrients,
                  micronutrients, and the importance of maintaining a balanced
                  diet.
                </p>
                <p className="subheading">
                  <span className={`truncate`}>Learning Objective</span>
                </p>
                <ul
                  className={`list-decimal px-5 py-5  ${
                    showFullText ? "block" : "hidden"
                  }`}
                >
                  {objectives.map((objective, index) => (
                    <li key={index} className="text ">
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" my-10">
                <button
                  className="group relative ml-7 transform cursor-pointer font-bold leading-5 text-primary duration-300 dark:text-primary  md:my-0"
                  onClick={toggleShowFullText}
                >
                  {showFullText ? (
                    <div className="flex items-center text-justify">
                      Hide Learning Objective <MdKeyboardArrowUp />
                    </div>
                  ) : (
                    <div className="flex items-center text-justify">
                      Show Learning Objective <MdKeyboardArrowDown />
                    </div>
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
                </button>
              </div>
            </div>

            <div className="relative inline-block  w-11/12   text-left lg:ml-5 lg:w-11/12">
              <div
                onClick={togglelessonDropdown}
                className=" text inline-flex  w-full items-center space-x-3 bg-white px-4  py-2 font-bold  focus:outline-none"
              >
                <svg
                  className={`h-2.5 w-2.5 transform ${
                    islessonDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <span> Fundamentals of Nutrition</span>
              </div>

              {islessonDropdownOpen && (
                <div className="relative z-10 mt-2 w-full  origin-top-right rounded-md border-t  border-[#e8e8e8] bg-white ring-0">
                  <div className="ml-7  flex  space-x-5 py-3 ">
                    <div className="relative  h-5 w-5">
                      <svg
                        className="h-full w-full"
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Background Circle */}
                        <circle
                          cx={18}
                          cy={18}
                          r={16}
                          fill="none"
                          className="stroke-current  dark:text-secondary"
                          strokeWidth={4}
                        />
                        {/* Progress Circle inside a group with rotation */}
                        <g className="origin-center -rotate-90 transform">
                          <circle
                            cx={18}
                            cy={18}
                            r={16}
                            fill="none"
                            className="stroke-current dark:text-primary"
                            strokeWidth={4}
                            strokeDasharray={100}
                            strokeDashoffset={25}
                          />
                        </g>
                      </svg>
                      {/* Percentage Text */}
                      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
                        <span className="text text-center dark:text-2xl  dark:text-primary">
                          <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height={24}
                            viewBox="0 0 16 16"
                            width={24}
                            className="css-f2w3r7 inline space-x-2 "
                            id="cds-react-aria-58"
                          >
                            <g
                              clipPath="url(#cds-react-aria-58_0)"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="currentColor"
                            >
                              <path
                                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                                stroke="white"
                              />
                              <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                            </g>
                            <defs>
                              <clipPath id="cds-react-aria-58_0">
                                <path fill="#fff" d="M0 0h16v16H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="text">
                        <h3>What is Nutrition ? </h3>
                      </div>
                      <div className="ml-auto">
                        <Link to="/coursecontent">
                          {" "}
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                            className="btn btn-primary btn-sm rounded-lg border-none px-5 py-2 uppercase tracking-wider text-white duration-300"
                          >
                            Get Started
                          </motion.a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="ml-7 flex space-x-5 py-3">
                    <div className="relative  h-5 w-5 ">
                      <svg
                        className="h-full w-full"
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Background Circle */}
                        <circle
                          cx={18}
                          cy={18}
                          r={16}
                          fill="none"
                          className="stroke-current  dark:text-secondary"
                          strokeWidth={4}
                        />
                        {/* Progress Circle inside a group with rotation */}
                        <g className="origin-center -rotate-90 transform">
                          <circle
                            cx={18}
                            cy={18}
                            r={16}
                            fill="none"
                            className="stroke-current dark:text-primary"
                            strokeWidth={4}
                            strokeDasharray={100}
                            strokeDashoffset={25}
                          />
                        </g>
                      </svg>
                      {/* Percentage Text */}
                      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
                        <span className="text text-center dark:text-2xl  dark:text-primary">
                          <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height={24}
                            viewBox="0 0 16 16"
                            width={24}
                            className="css-f2w3r7"
                            id="cds-react-aria-59"
                          >
                            <g
                              clipPath="url(#cds-react-aria-59_0)"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="currentColor"
                            >
                              <path
                                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                                stroke="white"
                              />
                              <path d="M3.5 5h3.518l.018.001a1.58 1.58 0 011.463 1.463l.001.018V12l-1 .03A1.1 1.1 0 006.484 11H3.5V5zm1 1v4H6.53a2.1 2.1 0 01.97.306V6.521A.58.58 0 006.98 6H4.5z" />
                              <path d="M8.982 5H12.5v6H9.517a1.1 1.1 0 00-1.018 1.03L7.5 12V6.5H8l-.499-.036a1.58 1.58 0 011.463-1.463L8.982 5zM8.5 6.52v3.786a2.1 2.1 0 01.97-.305L9.485 10H11.5V6H9.02a.58.58 0 00-.52.52z" />
                            </g>
                            <defs>
                              <clipPath id="cds-react-aria-59_0">
                                <path fill="#fff" d="M0 0h16v16H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="text">
                      <h3>What is Nutrition Leadership ? </h3>
                    </div>
                  </div>
                  <div className="ml-7 flex space-x-5 py-3">
                    <div className="relative  h-5 w-5">
                      <svg
                        className="h-full w-full"
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Background Circle */}
                        <circle
                          cx={18}
                          cy={18}
                          r={16}
                          fill="none"
                          className="stroke-current  dark:text-secondary"
                          strokeWidth={4}
                        />
                        {/* Progress Circle inside a group with rotation */}
                        <g className="origin-center -rotate-90 transform">
                          <circle
                            cx={18}
                            cy={18}
                            r={16}
                            fill="none"
                            className="stroke-current dark:text-primary"
                            strokeWidth={4}
                            strokeDasharray={100}
                            strokeDashoffset={25}
                          />
                        </g>
                      </svg>
                      {/* Percentage Text */}
                      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
                        <span className="text text-center dark:text-2xl  dark:text-primary">
                          <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height={24}
                            viewBox="0 0 16 16"
                            width={24}
                            data-testid="quiz-icon"
                            id="cds-react-aria-60"
                            className="css-0"
                          >
                            <g
                              clipPath="url(#cds-react-aria-60_0)"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="currentColor"
                            >
                              <path d="M4.39 3.61h7.22v8.78H4.39V3.61zm1 1v6.78h5.22V4.61H5.39z" />
                              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                              <path d="M6.5 6.29h3v1h-3v-1zM6.5 8.71h3v1h-3v-1z" />
                            </g>
                            <defs>
                              <clipPath id="cds-react-aria-60_0">
                                <path fill="#fff" d="M0 0h16v16H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="text">
                      <h3>What is Nutrition ? </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fundamental Two */}
            <div className="mt-5 flex flex-col gap-3 px-4 md:px-6 lg:px-8">
              <div className="flex gap-3">
                <div onClick={() => setShow1(!show1)} className="mt-1 cursor-pointer">
                  {!show1 ? <FaChevronDown /> : <FaChevronUp />}
                </div>
                <div>
                  <p className="amir text-[18px] font-bold  ">
                    Fundamentals of Nutrition
                  </p>
                </div>
              </div>
              {show1 ? (
                <div className="px-2 md:px-4 lg:px-8">
                  <div className="flex gap-3">
                    <img src={vids} alt="" className="h-[16px] w-[16px]" />
                    <div className="text pb-3">
                      <h3>What is Nutrition ? </h3>
                      <p className="px-4 text-[10px] font-medium text-gray-500">
                        Video . 10 min
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={pdfs} alt="" className="h-[16px] w-[16px]" />
                    <div className="text pb-3">
                      <h3>What is Nutrition? </h3>
                      <p className="px-4 text-[10px] font-medium text-gray-500">
                        Reading . 10 min
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={quizs} alt="" className="h-[16px] w-[16px]" />
                    <div className="text pb-3">
                      <h3>What is Nutrition ? </h3>
                      <p className="px-4 text-[10px] font-medium text-gray-500">
                        Video . 10 min
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Fundamental Three */}
            <div className="mt-5 flex flex-col gap-3 px-4 md:px-6 lg:px-8">
              <div className="flex gap-3">
                <div onClick={() => setShow2(!show2)} className="mt-1 cursor-pointer">
                  {!show2 ? <FaChevronDown /> : <FaChevronUp />}
                </div>
                <div>
                  <p className="amir text-[18px] font-bold  ">
                    Fundamentals of Nutrition
                  </p>
                </div>
              </div>
              {show2 ? (
                <div className="px-2 md:px-4 lg:px-8">
                  <div className="flex gap-3">
                    <img src={vids} alt="" className="h-[16px] w-[16px]" />
                    <div className="text pb-3">
                      <h3>What is Nutrition ? </h3>
                      <p className="px-4 text-[10px] font-medium text-gray-500">
                        Video . 10 min
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={pdfs} alt="" className="h-[16px] w-[16px]" />
                    <div className="text pb-3">
                      <h3>What is Nutrition? </h3>
                      <p className="px-4 text-[10px] font-medium text-gray-500">
                        Reading . 10 min
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={quizs} alt="" className="h-[16px] w-[16px]" />
                    <div className="text pb-3">
                      <h3>What is Nutrition ? </h3>
                      <p className="px-4 text-[10px] font-medium text-gray-500">
                        Video . 10 min
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lessonsoftheweek;
