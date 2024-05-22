import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import CatCard from "./CatCard";
import PropTypes from 'prop-types';
import { useState } from "react";

function AllCoursesList({ courses }) {
  const totalPages = Math.ceil(courses.length / 4);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const visibleCourses = courses.slice(startIndex, endIndex);

  return (
    <div>
      <div className="mt-12 flex flex-col justify-center items-center">
        <p className="text flex lg:w-full w-10/12 justify-end font-semibold py-5 px-4">
          {courses.length} results
        </p>
        <CatCard items={visibleCourses} />
      </div>
      <div>
        <div className="py-12 flex justify-center items-center md:gap-1">
          <button
            className={`bg-primary rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-white font-bold text-xl ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaLessThan />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-black hover:bg-primary hover:text-white hover:text-xl font-medium text-base md:hover:font-bold hover:mx-2 ${
                pageNumber === currentPage ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className={`bg-primary rounded-full md:h-[50px] md:w-[50px] h-[30px] w-[30px] flex justify-center items-center text-white font-bold text-xl ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
}

AllCoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default AllCoursesList;