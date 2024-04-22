// import React from "react";
// import { LiaUniversitySolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { PiCertificateThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import WhyUsImage from "../../assets/whyus.svg";


function WhyUs() {
  return (
    <>
      <div className="w-full lg:m-3">
        <div className="mx-auto flex py-10 w-11/12 flex-col lg:flex-row lg:p-5">
          <div className="flex w-full flex-wrap lg:flex-nowrap justify-center items-center ">
            <img src={WhyUsImage} alt="" className="top-0 h-60 lg:mx-auto" />
            <div className=" mx-auto w-full flex flex-col justify-start space-x-2 space-y-3 px-10 ">
              <h1 className="heading mx-6 mt-4 w-28"> Why Us</h1>
              <p className="text py-4 pl-6">
                Discover ENLN Academy as your premier destination for a holistic
                approach to nutrition education, where the fusion of
                contemporary theory and hands-on application paves the way for
                your journey towards excellence. Our commitment to excellence
                ensures that your learning experience transcends boundaries,
              </p>
              <Link to="/categories" className="">
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
      </div>
    </>
  );
}

export default WhyUs;

