// import React from 'react'
import { LiaUniversitySolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GovHubImage from "../../assets/governmenttraininghub.jpg";
function GovHub() {
  return (
    <>
      <div className="w-full justify-center  lg:m-3">
        <h1 className="heading md:pll-5 pl-2 text-center lg:pl-10">
          Government Training Hub
        </h1>
        <div className="mx-auto flex w-11/12 flex-col lg:flex-row lg:p-5">
          <div className="w-full lg:w-1/2">
            <img src={GovHubImage} alt="" />
          </div>
          <div className="mt-10 w-full space-y-3 p-2 lg:mt-0 lg:w-1/2 lg:p-3 lg:pl-10">
            <span className="flex space-x-2 border-l-4 border-primary pl-3">
              <LiaUniversitySolid className="h-10 w-10 text-primary" />
              <h1 className="heading ">ENLN INSTITUTE</h1>
            </span>
            <p className="text text-2xl ">
              Equip officials with vital skills for high-demand roles through
              Career Academy.
            </p>
            <h2 className="subheading ">
              With our Acadamy, Your team can earn
            </h2>
            {/* <ul className="list-disc px-5 ">
              <li>Job-ready Professional Certificates, </li>
              <li>Acquire essential skills valued by employers</li>
              <li>Join a vibrant community of learners and professionals</li>
              <li>
                Receive personalized feedback and guidance from expert
                instructors
              </li>
            </ul> */}
            <ul className="mb-10">
              <li className="text mb-2 flex items-center ">
                <span className="mr-3 text-primary ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-patch-check-fill h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                </span>
                Job-ready Professional Certificates,
              </li>
              <li className="text mb-2 flex items-center ">
                <span className="mr-3 text-primary dark:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-patch-check-fill h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                </span>
                Acquire essential skills valued by employers,
              </li>
              <li className="text mb-4 flex items-center ">
                <span className="mr-3 text-primary dark:text-primary ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-patch-check-fill -mt-4 h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                </span>
                Build a portfolio showcasing mastery in various in-demand roles
                across industries.
              </li>
            </ul>
            <Link to="/categories">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn btn-outline btn-primary w-full lg:ml-5 lg:flex lg:w-1/4 lg:items-center"
              >
                See Courses
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GovHub;
