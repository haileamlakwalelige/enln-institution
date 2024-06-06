import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const RatingsDisplay = ({ rating }) => {
  const numericRating = Number(rating);  // Convert rating to a number
  const fullStars = Math.floor(numericRating);
  const hasHalfStar = numericRating % 1 !== 0;

  return (
    <div className="flex gap-2 py-2 text-primary">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} className="star-icon" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="star-icon" />} {numericRating}
    </div>
  );
};

RatingsDisplay.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

RatingsDisplay.defaultProps = {
  rating: 0, // or any default value you deem appropriate
};

export default RatingsDisplay;
