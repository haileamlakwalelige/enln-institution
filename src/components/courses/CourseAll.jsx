import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';
import api from '../../api/api';

const CourseAll = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart) || [];
  const [userId, setUserId] = useState(null);
  const [hasAccess, setHasAccess] = useState({});
  const { data: payments, isLoading: isLoadingPayments, isError: isErrorPayments, error: errorPayments } = useQuery(['payments'], async () => {
    const response = await api.get('/payments');
    return response.data.data;
  });

  const { data: courses, isLoading: isLoadingCourses, isError: isErrorCourses, error: errorCourses } = useQuery(['courses'], async () => {
    const response = await api.get('/courses');
    return response.data.data;
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserId(userData[0].id);
    }
  }, []);

  useEffect(() => {
    if (userId && payments && courses) {
      const accessMap = {};
      courses.forEach(course => {
        const hasPaid = payments.some(pay => pay.course_id === course.id && pay.user_id === userId && pay.status === "completed");
        accessMap[course.id] = course.price == 0 || hasPaid;
      });
      setHasAccess(accessMap);
    }
  }, [userId, payments, courses]);

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const isInCart = (itemId) => {
    return cart.some(cartItem => cartItem.id === itemId);
  };

  if (isLoadingPayments || isLoadingCourses) {
    return <div>Loading...</div>;
  }

  if (isErrorPayments || isErrorCourses) {
    return <div>Error: {errorPayments?.message || errorCourses?.message}</div>;
  }

  return (
    <div className='py-10'>
      <p className='text-center font-bold text-4xl py-10'>All Courses</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 px-2 sm:px-6 md:px-16 lg:px-24'>
        {courses.map((course) => (
          <div
            key={course.id}
            className='border-2 p-4 hover:shadow-2xl rounded-xl border-gray-200 shadow-md flex flex-col justify-center items-center'
          >
            <Link to={`/course/${course.slug}`} className='p-3 flex flex-col justify-center items-center'>
              <img src={`https://admindashbordforenln.redshiftbusinessgroup.com/${course.image}`} alt={course.title} className='w-full lg:max-w-[300px]' />
              <p className='font-bold text-center py-2'>{course.title}</p>
              <p className='font-light line-clamp-2 px-2'>{course.description}</p>
              <p className='py-2'>{course.instructor}</p>
            </Link>
            {hasAccess[course.id] ? (
              <Link
                to={`/course/${course.slug}`}
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Go to Course
              </Link>
            ) : isInCart(course.id) ? (
              <Link
                to={`/buy/${course.slug}`}
                className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'
              >
                Buy Now
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
        ))}
      </div>
    </div>
  );
};

export default CourseAll;
