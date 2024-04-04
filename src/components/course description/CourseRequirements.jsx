import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CourseRequirements = () => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div className="min-h-[8vh] px-10 py-4 w-full mt-4">
      <div className="flex flex-col justify-center items-start">
        <p className="text-primary text-start text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold merb py-3">
          Requirement
        </p>
        <p
          className={`text-black font-normal text-[14px] amir text-justify ${
            showAll ? "line-clamp-none" : "line-clamp-4"
          }`}
        >
          Before embarking on this learning journey, ensure that you have the
          prerequisites to maximize engagement and success in the course. You
          should be comfortable using a computer, navigating software, and
          browsing the internet. A reliable internet connection is essential for
          accessing course materials and online resources. Whether using a
          computer, laptop, tablet, or smartphone, ensure your device has modern
          browsers for compatibility. Familiarity with common productivity tools
          like word processors and PDF readers is necessary. Proficiency in the
          language of instruction is vital for comprehending lectures and
          written materials. Dedicate sufficient time for reading, watching
          videos, and completing assignments according to the course schedule.
          Have note-taking tools, either digital or traditional, ready to
          capture key concepts. Approach the course with an open mindset,
          engaging with diverse perspectives and actively participating in
          discussions and collaborative projects. Intrinsic motivation and a
          positive learning attitude are key. Check for any hardware
          requirements specified in the course description and ensure
          familiarity with prerequisite subjects, if applicable. Enroll or have
          access to the designated learning platform for course materials and
          communication. For any questions or concerns about the requirements,
          feel free to reach out to the course instructor or support team for
          assistance.
        </p>

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

export default CourseRequirements;
