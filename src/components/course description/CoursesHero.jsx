import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import back from '../../assets/back.png';
import tom from '../../assets/tom.png';
import RatingsDisplay from '../Reusable/RatingsDisplay';

const CoursesHero = ({ course }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
      }}
    >
      <div className="flex justify-center items-center min-h-[70vh] pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 sm:px-4 md:px-8 lg:px-20 justify-center items-center flex-wrap gap-10 lg:flex-nowrap">
          <div>
            <div>
              <p className="text-primary text-center text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold nun pb-3">
                {course.title}
              </p>
              <p className="text-primary text-[14px] lg:text-[16px] font-medium py-4">
                {/* Unlock the secrets to optimal health with our Complete Nutrition
                Course, designed for individuals seeking a holistic
                understanding of nutrition. */}
                {course.description}
              </p>
            </div>
            <div className="flex gap-2 text-primary flex-wrap">
              <div className="flex gap-1 mt-1">
                <div className="flex items-center">
                  <RatingsDisplay rating={Number(course.rate)} />
                </div>
              </div>
              <p className="text-[#7E7E7E]">{course.hour}</p>
              <p className="text-[#7E7E7E]">total hour</p>
              <p className="text-[#7E7E7E]">{course.level} Level</p>
            </div>
            <p className="py-5 text-primary text-[16pxx]">
              Created by {course.instructor_name}
            </p>
            <div className="flex justify-start items-center gap-10">
              <p className="merb text-black text-[18px] md:text-[20px] lg:text-[22px] text-center font-bold">
                Birr {course.price}
              </p>
              {course.price == 0 ? (
                <Link
                  to={`/course-line/${course.slug}`}
                  className="py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
                >
                  Go to Course
                </Link>
              ) : isInCart(course.id) ? (
                <Link
                  to="/favorite"
                  className="py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
                >
                  Go to Favorite
                </Link>
              ) : (
                <button
                  onClick={() => addToCart(course)}
                  className="py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
                >
                  Add to Favorite
                </button>
              )}
            </div>
          </div>
          <div>
            <img src={tom} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

CoursesHero.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    audience: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    // notes: PropTypes.arrayOf(PropTypes.string).isRequired,
    // details: PropTypes.arrayOf(PropTypes.string).isRequired,
    // image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    // links: PropTypes.string.isRequired,
    instructor_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    rate: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoursesHero;
