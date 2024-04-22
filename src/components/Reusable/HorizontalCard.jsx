import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CourseImage from "../../assets/courseimage.svg";
const HorizontalCard = () => {
  return (
    <Link to="/course-description">
      <motion.div
        className="w-full border-b border-primary px-3 hover:shadow-md"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex h-full w-full flex-wrap overflow-hidden rounded bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-2/6">
            <img
              className="h-64 w-full object-cover"
              src={CourseImage}
              alt="Course"
            />
          </div>
          <div className="md:w-4/6 space-y-1 p-5 md:space-y-2">
            <div className="card-actions justify-between">
              <h2 className="text">The Complete Nutrition Course</h2>
              <h2 className="text font-bold hidden lg:block">Birr 1,500</h2>
            </div>

            <p className="cardtext text-gray-500 dark:text-gray-400">
              Bekele Sewasew
            </p>

            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <p className="ratingcardtext font-semibold">4.95</p>
              </div>

              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center">
                <p className="ratingcardtext font-medium">(110,568)</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <span className="cardtext text-gray-500 dark:text-gray-400">
                25 total hours
              </span>
              <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
              <span className="cardtext text-gray-500 dark:text-gray-400">
                All levels
              </span>
            </div>
            <div className="card-actions justify-end lg:hidden">
              <h2 className="text font-bold">Birr 1,500</h2>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default HorizontalCard;
