import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CourseImage from "../../assets/courseimage.svg";
import { useSelector,useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { remove } from "../../store/cartSlice";

const HorizontalCard = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeItem=(item)=>{
    dispatch(remove(item))
  }

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
              className="flex h-full w-full flex-wrap overflow-hidden rounded bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2/6">
                <img
                  className="h-64 w-full object-cover"
                  src={item.image}
                  alt="Course"
                />
              </div>
              <div className="md:w-4/6 space-y-1 p-5 md:space-y-2">
              <div onClick={()=>removeItem(item)} className="flex justify-end items-end mb-2 text-lg pb-5 cursor-pointer"><FaTimes className="text-red-500 font-bold text-end justify-self-end"/></div>
                <div className="card-actions justify-between">
                  <Link to="/course-description">
                    <h2 className="text font-bold">{item.title}</h2>
                  </Link>
                  
                  <h2 className="text font-bold hidden lg:block">Birr {item.price}</h2>
                </div>

                <p className="cardtext text-gray-500 dark:text-gray-400">
                  {item.instructor}
                </p>

                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <p className="ratingcardtext font-semibold">{item.rating}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="ratingcardtext font-medium">({item.ratingsCount})</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  <span className="cardtext text-gray-500 dark:text-gray-400">
                    {item.hours} total hours
                  </span>
                  <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
                  <span className="cardtext text-gray-500 dark:text-gray-400">
                    {item.difficulty}
                  </span>
                </div>
                <div className="card-actions justify-end lg:hidden">
                  <h2 className="text font-bold">Birr {item.price}</h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
