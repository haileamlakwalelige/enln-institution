import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <div
        className="justify-left relative hidden min-h-[80vh] items-center lg:flex"
        style={{ backgroundImage: 'url("/orgH.jpg")', backgroundSize: "cover" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-100 "
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="z-10 ml-16 w-1/2 text-white">
          <h1 className=" mb-5 hidden text-5xl font-bold text-white lg:block">
            Empower individuals for enhanced opportunities <br />
          </h1>
          <p className="mb-3 mt-3 text-justify text-xl text-white">
            Our organization provides cutting-edge skills, ensuring readiness
            for diverse and thriving careers. Elevate your potential with our
            targeted programs for today's job market demands.
          </p>

          {/* Call to action button */}
          <div className=" w-1/2 space-x-2 ">
            <Link to="/organizationform">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="btn btn-outline btn-primary hidden bg-white lg:flex lg:items-center"
            >
              Contact Sales
            </motion.a></Link>
          </div>
        </div>
      </div>
      <div className="mx-auto   w-11/12  lg:hidden ">
        {/* Mobile image */}
        <div
          className=" relative flex min-h-[50vh]  w-full items-center bg-cover "
          style={{
            backgroundImage: 'url("/orgH.jpg")',
            //backgroundSize: "cover",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-100"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className=" w-full">
          <h1 className="orgphoneherotext font-bold text-white ">
            Empower individuals for enhanced opportunities
            <br />
          </h1>

          {/* Hero description */}
          <p className="heroinnertext mb-3 mt-3 text-justify text-white ">
            Our organization provides cutting-edge skills, ensuring readiness
            for diverse and thriving careers. Elevate your potential with our
            targeted programs for today's job market demands.
          </p>

          {/* Call to action button */}
          <div className=" w-full  space-x-2 ">
            <Link to="/organizationform">
              {" "}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="buttontext  btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 uppercase tracking-wider duration-300 lg:w-auto"
              >
                Contact Sales
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero