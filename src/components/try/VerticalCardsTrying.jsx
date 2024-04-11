import React, { useRef, useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import cardData from './data.json'; // Import card data from data.json

function VerticalCardsTrying() {
  const containerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
      const newScrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    // Set the card data from imported JSON
    setCardsData([...cardData, ...cardData]);

    containerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust according to scroll amount
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust according to scroll amount
      behavior: 'smooth'
    });
  };

  return (
    <div className='py-10'>
      <div className="cards-container-vertical overflow-x-hidden" ref={containerRef}>
        <div className="card-wrapper-vertical">
          {cardsData.map(card => (
            <div className="card w-96 bg-base-100 shadow-xl" key={card.id}>
              <figure><img src={card.imageUrl} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="btn-container-vertical gap-x-10">
        <BiSolidLeftArrow className='text-black font-bold cursor-pointer' size={30} onClick={scrollLeft} />
        <BiSolidRightArrow className='text-black font-bold cursor-pointer' size={30} onClick={scrollRight} />
      </div>
    </div>
  );
}

export default VerticalCardsTrying;
