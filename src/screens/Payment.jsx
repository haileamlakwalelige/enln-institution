// import React from 'react'

// import { useSelector } from "react-redux";

const Payment = () => {

    // const singleItem = useSelector(state => state.singleItem.item);
  
    // console.log("Single Item", singleItem);


    return (
      <div className="pt-10 flex justify-center items-center min-h-[85vh] lg:min-h-[70vh]">
        <div className="lg:-mt-32 -mt-16">
          <p className="font-bold text-3xl text-center py-3">Pay Here</p>
          <form className="max-w-[500px]  flex flex-col gap-3 border-[1px] border-primary px-4 py-8 rounded-2xl">
            <p>Transaction ID</p>
            <input type="text" className="max-w-[400px] min-w-[300px] w-full rounded-box outline-none focus:outline-none"/>
            <div className="flex">
            <button className="bg-primary text-white hover:text-primary max-w-[200px]  hover:bg-white hover:border-[1px] px-10 font-semibold duration-300 py-2 rounded-md hover:border-primary mt-6 justify-self-center">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Payment;
  