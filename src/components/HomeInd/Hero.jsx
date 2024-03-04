import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import HeroImage from "/public/hero section image 1.png"
import HeroImage from '../../assets/herosectionimage1.png';

const Hero = () => {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-secondary">
      {/* Hero section */}
      <div className="container mx-auto w-11/12 px-6 py-8 lg:py-0">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              {/* Hero Image for mobile*/}
              <div className=" flex w-full items-center justify-center lg:mt-0 lg:hidden lg:w-1/2">
                <img
                  className="h-11/12 w-11/12 lg:max-w-3xl"
                  src={HeroImage}
                  alt="hero image"
                />
              </div>
              {/* Hero title */}
              <h1 className="phoneherotext text-left font-bold lg:hidden ">
                Your Success Story Starts Here.
              </h1>
              <h1 className="herotext hidden text-left font-bold lg:block ">
                ENLN Academy is the place where you can <br />
              </h1>
              <span className="hidden text-left text-4xl font-bold text-primary lg:block lg:text-5xl ">
                <TypeAnimation
                  sequence={[
                    "Unlock Your Potential",
                    2000,
                    "Explore Vast Subjects",
                    2000,
                    "Connect and Learn",
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    paddingLeft: "5px",
                  }}
                  className="py-5 text-left text-primary"
                  repeat={Infinity}
                />
              </span>

              {/* Hero description */}
              <p className="heroinnertext mt-3 text-justify">
                Unlock your potential at ENLN Academy with expert instructors,
                interactive learning, and a supportive community.
              </p>

              {/* Call to action button */}
              <Link to="/signup">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="buttontext btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 uppercase tracking-wider duration-300 lg:w-auto "
                >
                  Enroll Now
                </motion.a>
              </Link>
            </div>
          </div>
          {/* Hero image */}
          <div className="mt-6  hidden w-full items-center justify-center lg:mt-0 lg:block lg:w-1/2">
            <img
              className="h-full w-full lg:max-w-3xl"
              src={HeroImage}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
