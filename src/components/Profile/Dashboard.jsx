
import api from "../../api/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userId, setUserId] = useState(null);
  const [bio, setBio]=useState("");

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
    return response.data.data; // Assuming response.data.data contains payments array
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserId(userData[0].id);
      setBio(userData[0].bio)
    }
  }, []);

  // Filter payments for completed courses associated with the user
  const completedPayments = payments
    ? payments.filter((payment) => payment.status === "completed" && payment.user_id === userId)
    : [];

      // Filter payments for uncompleted courses associated with the user
    const unCompletedPayments = payments
    ? payments.filter((payment) => payment.status === "pending" && payment.user_id === userId)
    : [];

       // Filter payments for uncompleted courses associated with the user
       const freeCourse = courses
       ? courses.filter((payment) => payment.price == 0)
       : [];


  if (isLoadingPayment || isLoadingCourse) {
    return <div>Loading...</div>;
  }

  if (isErrorPayment) {
    return (
      <div>
        Error: {errorPayment?.message}
      </div>
    );
  }

  if (isErrorCourse) {
    return (
      <div>
        Error: {errorCourse?.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center border-2 border-gray-200 mt-11 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center p-2 sm:p-4 md:p-12 lg:p-20 gap-4">
            <div className="bg-[#187498] text-white min-h-[179px] min-w-[250px]">
              <p className="text-[150px]">{completedPayments.length}</p>
              <p className="text-[24px] pb-3 font-semibold text-white amir">Total Courses</p>
            </div>
            <div className="bg-[#F9D923] text-white min-h-[179px] min-w-[250px]">
              <p className="text-[150px]">{unCompletedPayments.length}</p>
              <p className="text-[24px] pb-3 font-semibold text-white amir">Pending Courses</p>
            </div>
            <div className="bg-[#36AE7C] text-white min-h-[179px] min-w-[250px]">
              <p className="text-[150px]">{freeCourse.length}</p>
              <p className="text-[24px] pb-3 font-semibold text-white amir">Free Courses</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 lg:-mt-12 mb-4">
           <div dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
