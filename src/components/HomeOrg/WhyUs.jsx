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
          <div className="w-full space-y-2 lg:w-1/2">
            <div className="card w-full rounded-sm bg-base-100 shadow-sm shadow-primary">
              <div className="card-body space-y-2">
                <div className="flex justify-between">
                  <h2 className="card-title text-primary">
                    Customized Course Content
                  </h2>
                  <PiCertificateThin className="card-actions justify-end text-4xl text-primary" />
                </div>
                <p className="smalltext">
                  Tailored curriculum designed to meet the specific needs of
                  professionals in the nutrition field. Courses crafted with
                  industry insights and the latest trends to ensure relevance
                  and practicality.
                </p>
              </div>
            </div>
            <div className="card w-full rounded-sm bg-base-100 shadow-sm shadow-primary">
              <div className="card-body space-y-2">
                <div className="flex justify-between">
                  <h2 className="card-title text-primary">
                    Customized Course Content
                  </h2>
                  <PiCertificateThin className="card-actions justify-end text-4xl text-primary" />
                </div>
                <p className="smalltext">
                  Tailored curriculum designed to meet the specific needs of
                  professionals in the nutrition field. Courses crafted with
                  industry insights and the latest trends to ensure relevance
                  and practicality.
                </p>
              </div>
            </div>
            <div className="card w-full rounded-sm bg-base-100 shadow-sm shadow-primary">
              <div className="card-body space-y-2">
                <div className="flex justify-between">
                  <h2 className="card-title text-primary">
                    Customized Course Content
                  </h2>
                  <PiCertificateThin className="card-actions justify-end text-4xl text-primary" />
                </div>
                <p className="smalltext">
                  Tailored curriculum designed to meet the specific needs of
                  professionals in the nutrition field. Courses crafted with
                  industry insights and the latest trends to ensure relevance
                  and practicality.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/2 ">
            <h1 className="heading mx-10 mt-4 w-28 border-b-2 border-primary">
              {" "}
              Why Us
            </h1>
            <img src={WhyUsImage} alt="" className="top-0 h-60 lg:mx-auto" />
            <div className=" mx-auto w-full space-x-2 space-y-3 px-10 ">
              <p className="text ">
                Discover ENLN Academy as your premier destination for a holistic
                approach to nutrition education, where the fusion of
                contemporary theory and hands-on application paves the way for
                your journey towards excellence. Our commitment to excellence
                ensures that your learning experience transcends boundaries,
              </p>
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
      </div>
    </>
  );
}

export default WhyUs;

