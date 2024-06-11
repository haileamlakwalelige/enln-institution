import { useQuery } from "react-query";
import api from "../../api/api";
import tom from "../../assets/tom.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingsDisplay from "../Reusable/RatingsDisplay";

const Certificate = () => {
  const [userId, setUserId] = useState(null);
  const [filteredCourses, setFilteredCourses]=useState([]);

  const {
    data: courses,
    isLoading: isLoadingCourse,
    isError: isErrorCourse,
    error: errorCourse,
  } = useQuery(["courses"], async () => {
    const response = await api.get("/courses");
    return response.data.data;
  });

  const {
    data: statuses,
    isLoading: isLoadingStatuses,
    isError: isErrorStatuses,
    error: errorStatuses,
  } = useQuery(["statuses"], async () => {
    const response = await api.get("/course_statuses");
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
    if (statuses && courses && userId) {
      const completedStatuses = statuses.filter(
        (status) => status.status === "completed" && status.user_id === userId
      );
      // console.log("Statuses", statuses);
      // console.log("Courses", courses);
      // console.log("User Id", userId);
      const filteredCourses = courses.filter(course =>
        completedStatuses.some(status => status.course_id === course.id)
      );
      setFilteredCourses(filteredCourses)

      // console.log("Filtered Courses:", filteredCourses);
    }
  }, [statuses, courses, userId]);

  if (isLoadingCourse || isLoadingStatuses) {
    return <div>Loading...</div>;
  }

  if (isErrorCourse || isErrorStatuses) {
    return (
      <div>
        Error: {errorCourse?.message || errorStatuses?.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mt-10 rounded-xl border-2 border-gray-200 pl-6 pt-6">
        <p className="merb p-2 mb-8 md:mb-0 text-start  text-[20px] font-semibold text-[#025464] sm:p-4 md:p-10 md:text-[24px] lg:text-[28px]">
          Certificates
        </p>
        <div className="-mt-10 flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-start items-start gap-4 p-2 sm:p-4 md:p-12 ">
              {filteredCourses.map(course => (
                <div key={course.id} className="flex h-full min-h-[300px] min-w-[250px] max-w-[350px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black justify-center items-center">
                  <img src={course?.image || tom} alt="" className="h-[186px] my-2 w-[250px] rounded-t-xl" />
                  <p className="amir text-[16px] font-semibold text-black">
                    {course?.title}
                  </p>
                  <p className="text-gray-600">by {course?.instructor_name}</p>
                  <RatingsDisplay rating={Number(course?.rate)}/>
                  <p className="py-1 text-start text-[#7E7E7E]">{course?.instructor}</p>
                  <p className="py-1 text-start font-bold text-[#187498] mx-5">
                    Completed
                  </p>
                  <Link to={`/course/${course?.slug}`}>
                  <p className="bg-[#025464] hover:px-20 duration-200 px-16  py-1.5 rounded font-semibold text-white">
                    see detail
                  </p>
                  </Link>
                </div>
              ))}
            </div>
            {/* <div className="mb-4 flex flex-col  gap-6 md:flex-row lg:-mt-12"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
