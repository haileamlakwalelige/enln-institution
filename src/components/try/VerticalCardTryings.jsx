import { add } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import api from '../../api/api';

const VerticalCardTryings = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart) || [];

  const addToCart = (item) => {
    dispatch(add(item));
  }

  const isInCart = (itemId) => {
    return cart.some(cartItem => cartItem.id === itemId);
  };

  const {
    data: result,
    isLoading,
    isError,
    error,
  } = useQuery("courses", async () => {
    const res = await api.get(
      "/courses"
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
            <Link to={`/course/${course.slug}`}>
            <figure>
              <img
                src={`https://admindashbordforenln.redshiftbusinessgroup.com/${course.image}`} // Image source
                alt={course.title} // Alternative text for image
                className="max-w-[300px]" // Image styles
              />
            </figure>
            </Link>
            {/* Card body */}
            <div className="card-body p-4">
              {/* Card title */}
              <Link to={`/course/${course.slug}`}>
              <h2 className="card-title">{course.title}</h2>
              </Link>
              {/* Card description */}
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                {/* Conditionally render buttons based on price and cart status */}
                {course.price == 0 ? (
                  <Link
                    to={`/course/${course.slug}`}
                    className="py-2 rounded-lg bg-black hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
                  >
                    Go to Course
                  </Link>
                ) : isInCart(course.id) ? (
                  <Link
                    to="/favorite"
                    className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
                  >
                    Go to Favorite
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(course)}
                    className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
                  >
                    Add to Favorite
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

export default VerticalCardTryings;
