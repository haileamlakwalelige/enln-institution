import dot from "../../assets/dollar.png";
import film from "../../assets/flm.png";
import certi from "../../assets/certificate.png";
import infi from "../../assets/infi.png";
import note from "../../assets/note.png";
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { addSingleItem } from "../../store/singleItemSlice";

const SingleCard = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart) || [];

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const handleItemClick = (item) => {
    dispatch(addSingleItem(item));
    navigate("/buy/" + item.slug);
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-5">
        <img src={dot} alt="" className="h-[50px] w-[50px]" />
        <div>
          <p className="text-gray-500 text-base">
            one time
            <span className="border-[1px] border-primary text-primary rounded-lg px-2 py-1">
              {course.status === "Other" ? "Personal" : course.status}
            </span>
          </p>
          <p className="merb text-black text-[18px] md:text-[20px] lg:text-[22px] text-center font-bold">
            Birr {Number(course.price)}
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="amir font-bold text-[16px] text-start">
          What this course includes
        </p>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <img src={film} alt="" className="w-[30px] h-[25.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            {course.hour} hours
          </p>
        </div>
        <div className="flex gap-4">
          <img src={infi} alt="" className="w-[30px] h-[13.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            Full life-time supply
          </p>
        </div>
        <div className="flex gap-4">
          <img src={certi} alt="" className="w-[30px] h-[25.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            Certificate for completion
          </p>
        </div>
        <div className="flex gap-4">
          <img src={note} alt="" className="w-[30px] h-[25.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            Assessments
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        {isInCart(course.id) ? (
          <Link
            to="/favorite"
            className="hover:bg-primary text-primary hover:text-white min-w-[250px] px-10 py-2 rounded font-semibold border-primary border-2 text-center"
          >
            Go to favorite
          </Link>
        ) : (
          <button
            onClick={() => addToCart(course)}
            className="bg-primary hover:bg-white hover:text-primary text-white min-w-[250px] px-10 py-2 rounded font-semibold border-primary border-2 text-center"
          >
            Add to favorite
          </button>
        )}
        <button
          onClick={() => handleItemClick(course)}
          className="hover:bg-primary text-primary hover:text-white min-w-[250px] px-10 py-2 rounded font-semibold border-primary border-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    instructor_name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleCard;
