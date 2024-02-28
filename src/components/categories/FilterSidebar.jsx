import React, {useState} from 'react'
import { motion, useAnimation } from "framer-motion";
import { AiOutlineFilter } from "react-icons/ai";

function FilterSidebar() {
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [isLevelsDropdownOpen, setLevelsDropdownOpen] = useState(false);

    const togglePriceDropdown = () => {
      setPriceDropdownOpen((prev) => !prev);
    };
    const toggleSortDropdown = () => {
      setSortDropdownOpen((prev) => !prev);
    };
    const toggleLevelsDropdown = () => {
      setLevelsDropdownOpen((prev) => !prev);
    };

  return (
    <>
      <div className="mx-5 space-y-3">
        <h1 className="heading">All Leadership Courses</h1>
        <div className=" ml-5 flex space-x-2 lg:mr-7   lg:justify-end">
          {/* <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn smalltext btn-md"
          >
            <AiOutlineFilter className='w-5 h-5'/> Filter
          </motion.a> */}

          <div className="relative inline-block text-left ">
            <button
              onClick={toggleSortDropdown}
              type="button"
              className="items-cenetr smalltext btn-md  inline-flex w-full justify-center rounded-md border border-gray-700 bg-white px-4 py-2 shadow-sm hover:bg-gray-50  focus:outline-none"
              style={{ display: "flex", alignItems: "center" }}
            >
              Sort By
              <svg
                className="ms-3 h-2.5 w-2.5"
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
            </button>

            {isSortDropdownOpen && (
              <div className="absolute lg:right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Most Popular
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    New
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Ascending
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Descending
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <h1 className='subheading mx-3'>Filter By</h1>
        <div className='flex flex-col'>
          <div className="relative lg:ml-5  inline-block lg:w-3/4 w-11/12 border-t-2 text-left">
            <div
              onClick={togglePriceDropdown}
              className=" text inline-flex w-full justify-between bg-white px-4 py-2 font-bold   focus:outline-none"
            >
              <span> Pricing</span>

              <svg
                className=" h-2.5 w-2.5"
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
            </div>

            {isPriceDropdownOpen && (
              <div className="relative mt-2  w-full origin-top-right rounded-md  bg-white pl-5  ring-0">
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="h-4 w-4  rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="default-checkbox" className="smalltext ms-2 ">
                    Paid (1,000)
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="h-4 w-4  rounded-sm border-gray-700 bg-white text-primary  focus:ring-0 dark:border-gray-500 dark:bg-gray-100"
                  />
                  <label htmlFor="default-checkbox" className="smalltext ms-2 ">
                    Free (100)
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="relative lg:ml-5 mt-2  inline-block lg:w-3/4 w-11/12 border-b-2 border-t-2 text-left">
            <div
              onClick={toggleLevelsDropdown}
              className=" text inline-flex w-full justify-between bg-white px-4 py-2 font-bold   focus:outline-none"
            >
              <span> Levels</span>

              <svg
                className=" h-2.5 w-2.5"
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
            </div>

            {isLevelsDropdownOpen && (
              <div className="relative mt-2  w-full origin-top-right rounded-md  bg-white pl-5  ring-0">
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="h-4 w-4  rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="default-checkbox" className="smalltext ms-2 ">
                    All (1,000)
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="h-4 w-4  rounded-sm border-gray-700 bg-white text-primary  focus:ring-0 dark:border-gray-500 dark:bg-gray-100"
                  />
                  <label htmlFor="default-checkbox" className="smalltext ms-2 ">
                    Beginners (100)
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="h-4 w-4  rounded-sm border-gray-700 bg-white text-primary  focus:ring-0 dark:border-gray-500 dark:bg-gray-100"
                  />
                  <label htmlFor="default-checkbox" className="smalltext ms-2 ">
                    Intermediate (100)
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="h-4 w-4  rounded-sm border-gray-700 bg-white text-primary  focus:ring-0 dark:border-gray-500 dark:bg-gray-100"
                  />
                  <label htmlFor="default-checkbox" className="smalltext ms-2 ">
                    Expert (100)
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSidebar