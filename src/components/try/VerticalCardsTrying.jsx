import { useRef, useState } from "react";
import "./styles.css"; // Import your CSS file
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa"; // Import tooltip-related icons
import { add } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function VerticalCardsTrying() {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // State to track hovered card index

  const {
    data,
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

  const addToCart = (item) => {
    // dispatch an add action
    dispatch(add(item));
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust according to scroll amount
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10 h-full px-2 sm:px-4 md:px-8 lg:px-16 lg:mx-32">
      <div
        className="cards-container-vertical px-2 sm:px-4 md:px-8 lg:px-16 lg:mx-32 overflow-x-hidden"
        ref={containerRef}
      >
        <div className="card-wrapper-vertical px-2 sm:px-4 md:px-8 lg:px-16 lg:mx-32">
          {data.map((card, index) => (
            <div
              className="card w-full bg-base-100 shadow-xl relative"
              key={index}
              onMouseEnter={() => setHoveredCardIndex(index)} // Set hovered card index
              onMouseLeave={() => setHoveredCardIndex(null)} // Reset hovered card index
            >
              <figure>
                <img
                  src={card.image}
                  alt="Course"
                  className="h-[100px] w-full"
                />
              </figure>
              <div>
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
              </div>
              {hoveredCardIndex === index && ( // Conditionally render tooltip
                <div
                  className="text-gray-800 shadow-sm px-3 border-slate-600 border-[1px] rounded-xl tooltip-content top-0 absolute bg-white bg-full min-h-full min-w-full text-center flex flex-col justify-center items-start"
                >
                  <div className="tooltip-inner">
                    <div>
                      <p className="text-black text-[10px] amib font-semibold">
                        {card.title}
                      </p>
                      <div className="flex gap-2 justify-between px-4 items-center py-1">
                        <p className="text-[#7E7E7E] text-[10px]">
                          {card.hours} total hours
                        </p>
                        <p className="text-[#7E7E7E] text-[10px]">
                          . {card.difficulty}
                        </p>
                        <p className="rounded-xl border-primary border-[1px] px-5 py-1">
                          {card.type}
                        </p>
                      </div>
                      <p className="text-black font-normal leading-5 text-[12px] amir text-start">
                        {card.description}
                      </p>
                      <div className="flex flex-col gap-3 px-2">
                        {card.features.map((feature, idx) => (
                          <div className="flex gap-3 px-2" key={idx}>
                            <FaCheck
                              size={30}
                              className="text-primary font-bold"
                            />
                            <p className="text-black font-normal leading-5 text-[12px] amir text-start">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="card-actions justify-end">
                        {isInCart(card.id) ? (
                          <Link
                            to="/add-to-cart"
                            className="py-2 rounded-lg bg-black hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
                          >
                            Go to cart section
                          </Link>
                        ) : (
                          <button
                            onClick={() => addToCart(card)}
                            className="py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="btn-container-vertical gap-x-10">
        <BiSolidLeftArrow
          className="text-black font-bold cursor-pointer"
          size={30}
          onClick={scrollLeft}
        />
        <BiSolidRightArrow
          className="text-black font-bold cursor-pointer"
          size={30}
          onClick={scrollRight}
        />
      </div>
    </div>
  );
}

export default VerticalCardsTrying;
