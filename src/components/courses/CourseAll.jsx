import React from 'react';
import coursesData from "../../data/courses.json"; // Import JSON data
import { Link } from 'react-router-dom';
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const CourseAll = () => {
  const courses = coursesData.courses; // Access the 'courses' array from the imported JSON data
  const dispatch=useDispatch();


  const addToCart =(item)=>{
    dispatch(add(item));
  }
  return (
    <div className='py-10'>
      <p className='text-center font-bold text-4xl py-10'>All Courses</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 px-2 sm:px-6 md:px-16 lg:px-24'>
        {courses.map(item => (
          <div key={item.id} className='border-2 p-4 hover:shadow-2xl rounded-xl border-gray-200 shadow-md flex flex-col justify-center items-center'>
            <Link to="/course-description"  className='p-3 flex flex-col justify-center items-center'>
            <img src={item.image} alt='' className="max-w-[300px]"/>
            <p className='font-bold text-center py-2'>{item.title}</p>
            <p className=' font-light line-clamp-2 px-2'>{item.description}</p>
            <p className='py-2'>{item.instructor}</p>
          </Link>
          <button onClick={()=>addToCart(item)} className='py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseAll;
