import React, { useState } from "react";
import courses from "./data.json"; // Import card data from data.json
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const VerticalCardTryings = () => {
  // State to hold the card data
  const [cardData, setCardData] = useState(courses.courses);
  const dispatch = useDispatch();

  const addToCart=(item)=>{
    //dispatch an add action
    dispatch(add(item));

  }


  return (
    // Container with overflow-x-auto for horizontal scrolling
    <div className="w-full overflow-x-auto">
      {/* Carousel container */}
      <div className="carousel rounded-box flex p-4">
        {/* Mapping over the card data to render each card */}
        {cardData.map((course, index) => (
          <div
            // Card container with styles
            className="card min-w-[300px] w-full bg-base-100 shadow-xl relative rounded-xl border-2 border-gray-100"
            key={course.id} // Unique key for each card
          >
            {/* Card image */}
            <figure>
              <img
                src={course.image} // Image source
                alt="Shoes" // Alternative text for image
                className="max-w-[300px]" // Image styles
              />
            </figure>
            {/* Card body */}
            <div className="card-body p-4">
              {/* Card title */}
              <h2 className="card-title">{course.title}</h2>
              {/* Card description */}
              <p>{course.description}</p>
              {/* Card actions */}
              <div className="card-actions justify-end">
                {/* Add to cart button */}
                <button onClick={()=>addToCart(course)} className="bg-primary text-white px-8 py-1.5 rounded font-semibold hover:text-primary hover:bg-white  hover:underline duration-100 hover:font-bold">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCardTryings;
