import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
// import { IoStarSharp } from "react-icons/io5";
import RatingsDisplay from "../Reusable/RatingsDisplay";

const CatCard = ({ items }) => {

  

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <motion.div
            className="w-full border-b border-primary px-3 hover:shadow-md"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex h-full w-full flex-nowrap overflow-hidden rounded bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2/6">
                <img
                  className="h-64 min-w-[70] w-full object-cover"
                  // src={item.imageUrl}
                  src=""
                  alt={item.title}
                />
              </div>
              <div className="md:w-4/6 space-y-1 p-5 md:space-y-2">
                <div className="card-actions justify-between items-start flex flex-col">
                  <Link to={`/course/${item.slug}`}>
                    <h2 className="text font-bold text-center md:text-start">
                      {item.title}
                    </h2>
                  </Link>

                  <h2 className="text font-bold hidden lg:block">
                    Birr {item.price}
                  </h2>
                </div>

                <p className="cardtext text-gray-500 dark:text-gray-400">
                  {item.instructor_name}
                </p>

                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {/* Render star ratings */}
                    <RatingsDisplay rating={Number(item.rate)} />
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  <span className="cardtext text-gray-500 dark:text-gray-400">
                    2.5 total hours
                  </span>
                  <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
                  <span className="cardtext text-gray-500 dark:text-gray-400">
                    Expert
                  </span>
                </div>
                <div className="card-actions justify-end lg:hidden">
                  <h2 className="text font-bold">Birr {item.price}</h2>
                </div>
              </div>
            </motion.div>
            <Link to={`/course/${item.slug}`}>
              <div className="flex justify-end items-end text-end">
                <button className="text-end border-2 border-primary px-8 py-1 rounded-lg mb-5 hover:bg-primary hover:text-white duration-300">
                  See Detail
                </button>
              </div>
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

CatCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      instructor_name: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
      // imageUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CatCard;
