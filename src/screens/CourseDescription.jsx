import CoursesHero from "../components/course description/CoursesHero";
import WhatWeLearn from "../components/course description/WhatWeLearn";
import SingleCard from "../components/course description/SingleCard";
import CourseRequirements from "../components/course description/CourseRequirements";
import DescriptionCourse from "../components/course description/DescriptionCourse";
import CourseWho from "../components/course description/CourseWho";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";


const CourseDescription = () => {

  const { id } = useParams();

  const { data: course, isLoading, isError, error } = useQuery(['course', id], async () => {
    const response = await axios.get(`https://orginalenlndashboard.redshiftbusinessgroup.com/api/courses/${id}`);
    return response.data.data;
  });

  console.log("Course", course);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }
  


  return (
    <div className="pt-4">
      <CoursesHero course={course} />
      <div className="flex flex-col-reverse lg:flex-row justify-start items-start my-10 mx-2 sm:mx-4 md:mx-6 lg:mx-10 gap-10">
        <div className="lg:w-3/4 flex flex-col justify-center items-center ">
          <WhatWeLearn />
          {/* <CourseContent /> */}
          <CourseRequirements />
          <DescriptionCourse />
          <CourseWho />
        </div>
        <div className="lg:w-1/4">
          <SingleCard course={course}/>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
