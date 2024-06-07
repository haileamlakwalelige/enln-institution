import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { remove } from '../../store/cartSlice';
import PropTypes from 'prop-types';
import { addSingleItem } from '../../store/singleItemSlice';
import RatingsDisplay from './RatingsDisplay';
import api from '../../api/api';

const HorizontalCard = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState({});
  const [userId, setUserId] = useState(null);

  const { data: payments, isLoading: isLoadingPayments, isError: isErrorPayments, error: errorPayments } = useQuery(['payments'], async () => {
    const response = await api.get('/payments');
    return response.data.data;
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserId(userData[0].id);
    }
  }, []);

  useEffect(() => {
    if (userId && payments && items) {
      const accessMap = {};
      items.forEach(item => {
        const hasPaid = payments.some(pay => pay.course_id === item.id && pay.user_id === userId && pay.status === 'completed');
        accessMap[item.id] = item.price === '0' || hasPaid;
      });
      setHasAccess(accessMap);
    }
  }, [userId, payments, items]);

  const removeItem = (item) => {
    dispatch(remove(item));
  };

  const handleItemClick = (item) => {
    dispatch(addSingleItem(item));
    navigate(`/buy/${item.slug}`);
  };

  if (isLoadingPayments) {
    return <div>Loading...</div>;
  }

  if (isErrorPayments) {
    return <div>Error: {errorPayments?.message}</div>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <motion.div
            className='w-full border-b border-primary px-3 hover:shadow-md'
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className='flex h-full w-full flex-nowrap overflow-hidden rounded bg-white'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='w-2/6'>
                <img
                  className='h-64 min-w-[70] w-full object-cover py-4'
                  src={`https://admindashbordforenln.redshiftbusinessgroup.com/${item.image}`}
                  alt='Course'
                />
              </div>
              <div className='md:w-4/6 space-y-1 p-5 md:space-y-2'>
                <div
                  onClick={() => removeItem(item)}
                  className='flex justify-end items-end text-end mb-2 text-lg pb-5 cursor-pointer'
                >
                  <FaTimes className='text-red-500 min-w-[40px] min-h-full items-end justify-end flex font-bold text-end justify-self-end' />
                </div>
                <div className='card-actions justify-between items-center flex'>
                  <Link to={`/course/${item.slug}`}>
                    <h2 className='text font-bold text-center md:text-start'>
                      {item.title}
                    </h2>
                  </Link>

                  <h2 className='text font-bold hidden lg:block'>
                    Birr {item.price}
                  </h2>
                </div>

                <p className='cardtext text-gray-500 dark:text-gray-400'>
                  {item.instructor_name}
                </p>

                <div className='flex items-center space-x-1'>
                  <div className='flex items-center'>
                    <RatingsDisplay rating={item.rate} />
                  </div>
                </div>

                <div className='flex items-center space-x-1'>
                  <span className='cardtext text-gray-500 dark:text-gray-400'>
                    {/* {item.hours} total hours */} 2.5 total hours
                  </span>
                  <span className='cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400'></span>
                  <span className='cardtext text-gray-500 dark:text-gray-400'>
                    {/* {item.difficulty} */} intermediate
                  </span>
                </div>
                <div className='card-actions justify-end lg:hidden'>
                  <h2 className='text font-bold'>Birr {item.price}</h2>
                </div>
              </div>
            </motion.div>
            {hasAccess[item.id] ? (
              <Link
                to={`/course/${item.slug}`}
                className='flex cursor-pointer justify-end items-end text-end'
              >
                <p className='text-end border-2 border-primary px-8 py-1 rounded-lg mb-5 hover:bg-primary hover:text-white duration-300'>
                  Go to Course
                </p>
              </Link>
            ) : (
              <div
                onClick={() => handleItemClick(item)}
                className='flex cursor-pointer justify-end items-end text-end'
              >
                <p className='text-end border-2 border-primary px-8 py-1 rounded-lg mb-5 hover:bg-primary hover:text-white duration-300'>
                  Buy Now
                </p>
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

HorizontalCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      instructor_name: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HorizontalCard;
