// import React from "react";
// import { PiCertificateThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
function WhyUs() {
  return (
    <>
      <div
        className=" w-full bg-secondary 
      "
        //   style={{ backgroundImage: "url(/heroo.png)" }}
      >
        {/* first row */}
        <div className=" w-full">
          <div className=" mx-auto my-auto w-full space-x-2 space-y-4 py-12 lg:px-52 ">
            <h1 className="heading flex justify-center px-2 sm:px-6 md:px-10 lg:px-20">
              {" "}
              Discover Why We&apos;re the Best: Choose Us Today
            </h1>
            <h1 className="phone-heading flex justify-center px-2 sm:px-6 md:px-10 lg:px-20 lg:hidden">
              {" "}
              Discover Why We&apos;re the Best: Choose Us Today
            </h1>
            <p className="flex justify-center text-xl text-primary">
              Empower Yourself for Global Well-Being through Our Nutrition and
              Public Health E-Learning Platform.
            </p>
          </div>
        </div>
        {/* second row */}
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid items-center gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {/* Card */}
            <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-blue-50 bg-blue-100 ">
                  <FaPeopleGroup className="text-4xl text-primary" />
                </div>
                <div className="flex-shrink-0">
                  <h2 className="card-title">Customized Course Content</h2>
                </div>
              </div>
              <p className="lg:smalltext phonesmalltext mt-3">
                Tailored curriculum designed to meet the specific needs of
                professionals in the nutrition field. Courses crafted with
                industry insights and the latest trends to ensure relevance and
                practicality.
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-blue-50 bg-blue-100 ">
                  <FaPeopleGroup className="text-4xl text-primary" />
                </div>
                <div className="flex-shrink-0">
                  <h2 className="card-title">Customized Course Content</h2>
                </div>
              </div>
              <p className="lg:smalltext phonesmalltext mt-3">
                Tailored curriculum designed to meet the specific needs of
                professionals in the nutrition field. Courses crafted with
                industry insights and the latest trends to ensure relevance and
                practicality.
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-blue-50 bg-blue-100 ">
                  <FaPeopleGroup className="text-4xl text-primary" />
                </div>
                <div className="flex-shrink-0">
                  <h2 className="card-title">Customized Course Content</h2>
                </div>
              </div>
              <p className="lg:smalltext phonesmalltext mt-3">
                Tailored curriculum designed to meet the specific needs of
                professionals in the nutrition field. Courses crafted with
                industry insights and the latest trends to ensure relevance and
                practicality.
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-blue-50 bg-blue-100 ">
                  <FaPeopleGroup className="text-4xl text-primary" />
                </div>
                <div className="flex-shrink-0">
                  <h2 className="card-title">Customized Course Content</h2>
                </div>
              </div>
              <p className="lg:smalltext phonesmalltext mt-3">
                Tailored curriculum designed to meet the specific needs of
                professionals in the nutrition field. Courses crafted with
                industry insights and the latest trends to ensure relevance and
                practicality.
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-blue-50 bg-blue-100 ">
                  <FaPeopleGroup className="text-4xl text-primary" />
                </div>
                <div className="flex-shrink-0">
                  <h2 className="card-title">Customized Course Content</h2>
                </div>
              </div>
              <p className="lg:smalltext phonesmalltext mt-3">
                Tailored curriculum designed to meet the specific needs of
                professionals in the nutrition field. Courses crafted with
                industry insights and the latest trends to ensure relevance and
                practicality.
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-blue-50 bg-blue-100 ">
                  <FaPeopleGroup className="text-4xl text-primary" />
                </div>
                <div className="flex-shrink-0">
                  <h2 className="card-title">Customized Course Content</h2>
                </div>
              </div>
              <p className="lg:smalltext phonesmalltext mt-3">
                Tailored curriculum designed to meet the specific needs of
                professionals in the nutrition field. Courses crafted with
                industry insights and the latest trends to ensure relevance and
                practicality.
              </p>
            </div>
            {/* End Card */}
          </div>
          <Link
            to="/categories"
            className=" md:mt-5 lg:mt-10 lg:flex lg:items-center lg:justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="btn btn-outline btn-primary btn-md mb-8 mt-2 w-full lg:ml-5 lg:flex lg:w-4/12 lg:items-center"
            >
              See Courses
            </motion.a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
