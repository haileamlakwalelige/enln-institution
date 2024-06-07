import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";

const Pay = () => {
  const [transactionId, setTransactionId] = useState('');

  const navigate = useNavigate();
  const user = localStorage.getItem("user"); // Get user data from localStorage
  const userData = JSON.parse(user); // Parse JSON string to JavaScript object
  const userId = userData[0].id; // Access the id directly from userData
  const singleItem = useSelector((state) => state.singleItem.item);




  const mutation = useMutation(
    (postData) => api.post('/payments', postData),
    {
      onSuccess: () => {
        toast.success('Payment submitted successfully!');
        navigate('/');
      },
      onError: (error) => {
        console.error('Error posting:', error);
        toast.error('Failed to submit payment. Please try again.');
      },
    }
  );

  useEffect(() => {
    if (!singleItem) {
      navigate("/favorite"); // Redirect if singleItem is not available
    }
  }, [singleItem, navigate]);

  if (!singleItem) {
    return null; // or return a loading spinner, or some other UI
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ 
      course_id: singleItem?.id,
      transaction_id: transactionId,
      user_id: userId,
    });
  };

  console.log("Single Item", singleItem);

  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <p className="font-bold text-3xl text-center py-3 pt-10 text-primary xl:-mb-6">
        Finalize your payment here!
      </p>
      <div className="pb-10 flex gap-10 flex-col flex-wrap lg:flex-nowrap justify-start items-center min-h-[85vh] lg:min-h-[70vh] mn-w-screen lg:-mt-32">
        <div className="text-black py-12 min-w-[300px] w-screen justify-around flex flex-wrap lg:flex-nowrap items-center border-b-[1px] border-primary px-2 sm:px-6 md:px-8 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={`https://admindashbordforenln.redshiftbusinessgroup.com/${singleItem?.image}`}
              alt={singleItem?.title}
              className="h-[300px] w-[200px] rounded text-center lg:mt-8"
            />
          </div>
          <p className="text-primary font-bold text-[22px]">
            Pay For {singleItem?.status} Course
          </p>
          <div className="flex flex-col justify-center items-center">
            <p>Company Name</p>
            <p className="font-bold text-[20px] text-primary">ENLN Academy</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Amount</p>
            <p className="font-semibold text-primary">{singleItem?.price} ETB</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Current Time</p>
            <p className="font-semibold text-primary">{new Date().toLocaleTimeString()}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>CEB Account</p>
            <p className="font-semibold text-primary">10000375147738</p>
          </div>
        </div>
        <div className="lg:-mt-32 -mt-16 max-h-[250px]">
          <form
            onSubmit={handleSubmit}
            className="max-w-[500px] bg-gray-200 justify-center items-center z-20 flex flex-col gap-3 border-[1px] border-primary px-4 py-8 rounded-2xl"
          >
            <p>Transaction ID</p>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="max-w-[400px] min-w-[300px] w-full rounded-box outline-none focus:outline-none"
            />
            <div className="flex">
              <button
                type="submit"
                className="bg-primary text-white hover:text-primary max-w-[200px] hover:bg-white hover:border-[1px] px-10 font-semibold duration-300 py-2 rounded-md hover:border-primary mt-6 justify-self-center"
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pay;
