import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PropTypes from 'prop-types';


const CourseWho = ({course}) => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div className="min-h-[8vh] px-10 py-4 w-full mt-4">
      <div className="flex flex-col justify-center items-start">
        <p className="text-primary text-start text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold merb py-3">
          Who is this Course is for
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: course.description }}
          className={`text-black font-normal text-[14px] amir text-justify ${
            showAll ? "line-clamp-none" : "line-clamp-4"
          }`}
        />
        <div
          onClick={() => setShowAll(!showAll)}
          className="text-primary font-semibold mt-5"
        >
          {showAll ? (
            <div className="flex justify-start items-center gap-2">
              <button>Show less</button>
              <FaAngleUp size={25} className="mt-1" />
            </div>
          ) : (
            <div className="flex justify-start items-center gap-2">
              <button>Show more</button>
              <FaAngleDown size={25} className="mt-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


CourseWho.propTypes = {
  course: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseWho;
