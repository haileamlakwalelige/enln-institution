import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
// import ceo from '../../assets/profile.jpg';
import ce from '../../assets/profile.jpg';

const testimonials = [
  {
    quote:
      "Flowbite is just awesome. It contains tons of pre-designed components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    author: "Micheal Gough",
    position: "CEO at Google",
    imageSrc:ce,
  },
  {
    quote:
      "Flowbite is just awesome. It contains tons of pre-designed components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    author: "Abebe Kebede",
    position: "CEO at Google",
    imageSrc:ce,
  },
  // Add two more testimonials with similar structures
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  // Autoplay Configuration
  const autoplayInterval = 5000; // Set the interval in milliseconds
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextTestimonial();
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [currentTestimonial]);

  return (
    <div className="mx-auto w-11/12 mt-10">
      <h1 className="heading">Don&apos;t just take our words</h1>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-md">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="testimonial"
            >
              <figure className="mb-3">
                <svg
                  className="mx-auto h-12 text-secondary"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900  ">
                    {testimonials[currentTestimonial].quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonials[currentTestimonial].imageSrc}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-primary">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="pl-3 text-sm font-light text-primary">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </figcaption>
                <div className="flex justify-center space-x-2 p-5 text-4xl text-secondary">
                  <CiFacebook className="hover:text-primary" />
                  <FaXTwitter className="hover:text-primary" />
                  <AiOutlineLinkedin className="hover:text-primary" />
                </div>
              </figure>
            </motion.div>
            <div className="flex items-center justify-evenly">
              <button onClick={prevTestimonial}>
                <IoIosArrowRoundBack className="text-5xl text-secondary hover:text-primary" />
              </button>
              <button onClick={nextTestimonial}>
                <IoIosArrowRoundForward className="text-5xl text-secondary hover:text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
