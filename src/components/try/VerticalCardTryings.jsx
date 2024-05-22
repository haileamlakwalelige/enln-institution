import { add } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from 'react-router-dom';

const VerticalCardTryings = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart) || [];


  const addToCart=(item)=>{
    //dispatch an add action
    dispatch(add(item));
  }

  const isInCart = (itemId) => {
    return cart.some(cartItem => cartItem.id === itemId);
  };

  const {
    data:result,
    isLoading,
    isError,
    error,
  } = useQuery("courses", async () => {
    const res = await axios.get(
      "https://orginalenlndashboard.redshiftbusinessgroup.com/api/courses"
    );
    return res.data.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }


  return (
    // Container with overflow-x-auto for horizontal scrolling
    <div className="w-full overflow-x-auto">
      {/* Carousel container */}
      <div className="carousel rounded-box flex p-4">
        {/* Mapping over the card data to render each card */}
        {result.map((course) => (
          <div
            // Card container with styles
            className="card min-w-[300px] w-full bg-base-100 shadow-xl relative rounded-xl border-2 border-gray-100"
            key={course.id} // Unique key for each card
          >
            {/* Card image */}
            <figure>
              <img
                // src={course.image} // Image source
                src=''
                alt={course.title} // Alternative text for image
                className="max-w-[300px]" // Image styles
              />
            </figure>
            {/* Card body */}
            <div className="card-body p-4">
              {/* Card title */}
              <h2 className="card-title">{course.title}</h2>
              {/* Card description */}
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                {/* Add to cart button */}
                {isInCart(course.id) ? (
              <Link
                to="/add-to-cart"
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Go to Cart
              </Link>
            ) : (
              <button
                onClick={() => addToCart(course)}
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Add to Cart
              </button>
            )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// VerticalCardTryings.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       price: PropTypes.string.isRequired,
//     //   image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       instructor_name: PropTypes.string.isRequired,
//       rate: PropTypes.number.isRequired,
//     //   hours: PropTypes.number.isRequired,
//     //   difficulty: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default VerticalCardTryings;
