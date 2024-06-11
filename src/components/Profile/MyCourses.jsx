import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import api from "../../api/api";

const MyCourses = () => {
  const [userId, setUserId] = useState(null);

  const {
    data: payments,
    isLoading: isLoadingPayment,
    isError: isErrorPayment,
    error: errorPayment,
  } = useQuery(["payments"], async () => {
    const response = await api.get("/payments");
    return response.data.data; // Assuming response.data.data contains payments array
  });

  const {
    data: courses,
    isLoading: isLoadingCourse,
    isError: isErrorCourse,
    error: errorCourse,
  } = useQuery(["courses"], async () => {
    const response = await api.get("/courses");
    return response.data.data; // Assuming response.data.data contains courses array
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserId(userData[0].id);
    }
  }, []);

  // Filter payments for completed courses associated with the user
  const completedPayments = payments
    ? payments.filter((payment) => payment.status === "completed" && payment.user_id === userId)
    : [];

  // Filter courses based on completed payments
  const filteredCourses = courses.filter((course) =>
    completedPayments.some((payment) => payment.course_id === course.id)
  );

  if (isLoadingPayment || isLoadingCourse) {
    return <div>Loading...</div>;
  }

  if (isErrorPayment) {
    return <div>Error: {errorPayment?.message}</div>;
  }

  if (isErrorCourse) {
    return <div>Error: {errorCourse?.message}</div>;
  }

  return (
    <div className="py-10">
      <p className="text-center font-bold text-4xl py-10">My Courses</p>
      <div className="flex flex-wrap gap-10 lg:gap-16 px-2 sm:px-6 md:px-16 lg:px-24">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border-2 p-4 hover:shadow-2xl min-w-[300px] max-w-[0px] rounded-xl border-gray-200 shadow-md flex flex-col justify-center items-center"
          >
            <Link to={`/course/${course.slug}`} className="p-3 flex flex-col justify-center items-center">
              <img
                src={`https://admindashbordforenln.redshiftbusinessgroup.com/${course?.image}`}
                alt={course.title}
                className="w-full lg:max-w-[300px]"
              />
              <p className="font-bold text-center py-2">{course.title}</p>
              <p className="font-light line-clamp-2 px-2">{course.description}</p>
              <p className="py-2">{course.instructor}</p>
            </Link>
            <Link
              to={`/course/${course.slug}`}
              className="py-2 rounded-lg bg-primary hover:bg-white text-white px-10 mt-6 mb-2 hover:text-primary hover:border-2 hover:border-primary"
            >
              Go to Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
