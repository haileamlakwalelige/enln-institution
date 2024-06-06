import { useEffect, useRef, useState } from 'react';
import './styles.css'; // Import your CSS file
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { add } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import api from '../../api/api';
import { Link } from 'react-router-dom';

function BoardCourses({ type }) {
  const containerRef = useRef(null);
  const [cardsData, setCardsData] = useState([]);
  const dispatch = useDispatch();
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const cart = useSelector(state => state.cart) || [];

  const { data, isLoading, isError, error } = useQuery("courses", async () => {
    const res = await api.get("/courses");
    return res.data.data;
  });

  useEffect(() => {
    if (data) {
      const filteredCards = data.filter((card) => card.type === type);
      setCardsData(filteredCards);
    }
  }, [type, data]);

  const addToCart = (card) => {
    dispatch(add(card));
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust according to scroll amount
      behavior: "smooth",
    });
  };

  const isInCart = (itemId) => {
    return cart.some(cartItem => cartItem.id === itemId);
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust according to scroll amount
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="py-10 h-full">
      <div className="cards-container-vertical overflow-x-hidden" ref={containerRef}>
        <div className="card-wrapper-vertical">
          {cardsData.map((card) => (
            <div
              className="card w-96 bg-base-100 shadow-xl relative max-h-fit"
              key={card.id}
              onMouseEnter={() => setHoveredCardIndex(card.id)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <Link to={`/course/${card.slug}`}>
                <figure>
                  <img src={card.image} alt="Shoes" className="h-[100px] w-full" />
                </figure>
              </Link>
              <div className="card-body">
                <Link to={`/course/${card.slug}`}>
                  <h2 className="card-title">{card.title}</h2>
                </Link>
                <p className='line-clamp-3'>{card.description}</p>
              </div>
              {hoveredCardIndex === card.id && (
                <div className="text-gray-800 shadow-sm px-3 border-slate-600 border-[1px] rounded-xl tooltip-content top-0 absolute bg-white bg-full min-h-full min-w-full text-center flex flex-col justify-center cards-start">
                  <div className="tooltip-arrow" data-tooltip-target={`tooltip-right-${card.id}`} data-tooltip-placement="right"></div>
                  <div className="tooltip-inner">
                    <div>
                      <p className="text-black text-[14px] amib font-semibold ">{card.title}</p>
                      <div className="flex gap-2 justify-between px-4 items-center py-1">
                        <p className="text-[#7E7E7E] text-[10px]">{card.hours} total hours</p>
                        <p className="text-[#7E7E7E] text-[10px]"> {card.level}</p>
                        <p className="rounded-xl border-primary border-[1px] px-5 py-1">{card.status}</p>
                      </div>
                      <p className="text-black font-normal line-clamp-6 leading-5 text-[12px] amir text-start">{card.description}</p>
                      <div className="card-actions justify-end">
                      {card.price == 0 ? (
              <Link
                to={`/course/${card.slug}`}
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Go to Course
              </Link>
            ) : isInCart(card.id) ? (
              <Link
                to={`/buy/${card.id}`}
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Buy Now
              </Link>
            ) : (
              <button
                onClick={() => addToCart(card)}
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Add to Favorite
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
        <BiSolidLeftArrow className="text-black font-bold cursor-pointer" size={30} onClick={scrollLeft} />
        <BiSolidRightArrow className="text-black font-bold cursor-pointer" size={30} onClick={scrollRight} />
      </div>
    </div>
  );
}

BoardCourses.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BoardCourses;
