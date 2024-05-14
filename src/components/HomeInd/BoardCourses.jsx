import { useRef, useState, useEffect } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa"; // Import tooltip-related icons
import courses from "../try/data.json"; // Import card data from data.json
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function BoardCourses({ type }) {
  const containerRef = useRef(null);
  const [cardsData, setCardsData] = useState([]);
  const dispatch = useDispatch();
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  

  useEffect(() => {
    // Filter cards based on the field property
    const filteredCards = courses.courses.filter((card) => card.type === type);
    setCardsData(filteredCards);
  }, [type]);

  const addToCart = (item) => {
    // Dispatch an add action
    dispatch(add(item));
  }

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust according to scroll amount
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
    <div className="py-10 h-full">
      <div
        className="cards-container-vertical overflow-x-hidden"
        ref={containerRef}
      >
        <div className="card-wrapper-vertical">
          {cardsData.map((card) => (
            <div
              className="card w-96 bg-base-100 shadow-xl relative"
              key={card.id}
              onMouseEnter={() => setHoveredCardIndex(card.id)} // Set hovered card index
              onMouseLeave={() => setHoveredCardIndex(null)} // Reset hovered card index
            >
              <figure>
                <img
                  src={card.image}
                  alt="Shoes"
                  className="h-[100px] w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
              </div>
              {/* Tooltip Markup */}
              {hoveredCardIndex === card.id && ( // Conditionally render tooltip
                <div
                  className="text-gray-800 shadow-sm px-3 border-slate-600 border-[1px] rounded-xl tooltip-content top-0 absolute bg-white bg-full min-h-full min-w-full text-center flex flex-col justify-center items-start" // Add your tooltip CSS classes here
                >
                  <div
                    className="tooltip-arrow"
                    data-tooltip-target={`tooltip-right-${card.id}`}
                    data-tooltip-placement="right"
                  ></div>
                  <div className="tooltip-inner">
                    {/* Tooltip content here */}
                    <div>
                      <p className="text-black text-[14px] amib font-semibold ">
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
                          {card.way}
                        </p>
                      </div>
                      <p className="text-black font-normal leading-5 text-[12px] amir text-start">
                        {card.description}
                      </p>
                      <div className="flex flex-col gap-3 px-2">
                        {card.features.map((feature, index) => (
                          <div className="flex gap-3 px-2" key={index}>
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
                        <button onClick={() => addToCart(card)} className="bg-primary text-white px-8 py-1.5 rounded font-semibold hover:text-primary hover:bg-white  hover:underline duration-100 hover:font-bold">
                          Add To Cart
                        </button>
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

export default BoardCourses;

BoardCourses.propTypes = {
  type: PropTypes.string.isRequired,
};
