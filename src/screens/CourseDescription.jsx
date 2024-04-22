import React from "react";
import CoursesHero from "../components/course description/CoursesHero";
import WhatWeLearn from "../components/course description/WhatWeLearn";
import SingleCard from "../components/course description/SingleCard";
import CourseContent from "../components/course description/CourseContent";
import CourseRequirements from "../components/course description/CourseRequirements";
import DescriptionCourse from "../components/course description/DescriptionCourse";
import CourseWho from "../components/course description/CourseWho";


const CourseDescription = () => {
  return (
    <div className="pt-4">
      <CoursesHero />
      <div className="flex flex-col-reverse lg:flex-row justify-start items-start my-10 mx-2 sm:mx-4 md:mx-6 lg:mx-10 gap-10">
        <div className="lg:w-3/4 flex flex-col justify-center items-center ">
          <WhatWeLearn />
          <CourseContent />
          <CourseRequirements />
          <DescriptionCourse />
          <CourseWho />
        </div>
        <div className="lg:w-1/4">
          <SingleCard />
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
