// import React from 'react'
import { PiClockClockwiseBold } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
        <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center items-center border-2 border-gray-200 mt-11 rounded-xl - '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center p-2 sm:p-4 md:p-12 lg:p-20 gap-4'>
                <div className='bg-[#187498] text-white min-h-[179px] min-w-[250px]'>
                    <p className='text-[150px]'>2</p>
                    <p className='text-[24px] pb-3 font-semibold text-white amir'>Total Courses</p>
                </div>
                <div className='bg-[#F9D923] text-white min-h-[179px] min-w-[250px]'>
                    <p className='text-[150px]'>1</p>
                    <p className='text-[24px] pb-3 font-semibold text-white amir'>Active Courses</p>
                </div>
                <div className='bg-[#36AE7C] text-white min-h-[179px] min-w-[250px]'>
                    <p className='text-[150px]'>0</p>
                    <p className='text-[24px] pb-3 font-semibold text-white amir'>Finished Courses</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  gap-6 lg:-mt-12 mb-4' > 
            <div className='border-gray-200 border-2 rounded  px-2 sm:px-4 md:px-6 lg:px-14 pb-16 mx-2 sm:mx-4 lg:mx-0 '> 
                <p className='font-bold py-6'> Recent Activities</p>
                <div className='flex gap-4 pb-2'>

                <PiClockClockwiseBold className='mt-1 text-[#025464]'/> 
                <p>Deadline is approaching</p>

                </div>
                <div className='flex gap-4 py-2'>

                <PiClockClockwiseBold className='mt-1 text-[#025464]'/> 
                <p>You gave this course 4 stars</p>

                </div>
                <div className='flex gap-4 py-2'>

                <PiClockClockwiseBold className='mt-1 text-[#025464]'/> 
                <p>You completed 3% of the course</p>
                
                </div>
                <div className='flex gap-4 py-2'>

                <PiClockClockwiseBold className='mt-1 text-[#025464]'/> 
                <p>Recent Activities</p>

                </div>
                
            </div>
            <div className='border-gray-200 border-2 rounded  px-2 sm:px-4 md:px-6 lg:px-14 pb-16 mx-2 sm:mx-4 lg:mx-0 '> 
                <p className='font-bold py-6'> Notifications</p>
                <div className='flex gap-4 pb-2'>

                <IoIosNotifications className='mt-1 text-[#025464]'/> 
                <p>Deadline is approaching</p>

                </div>
                <div className='flex gap-4 py-2'>

                <IoIosNotifications className='mt-1 text-[#025464]'/> 
                <p>You gave this course 4 stars</p>

                </div>
                <div className='flex gap-4 py-2'>

                <IoIosNotifications className='mt-1 text-[#025464]'/> 
                <p>You completed 3% of the course</p>
                
                </div>
                <div className='flex gap-4 py-2'>

                <IoIosNotifications className='mt-1 text-[#025464]'/> 
                <p>Recent Activities</p>

                </div>
                
            </div>
        </div>
        </div>
       
    </div>
    </div>
  )
}

export default Dashboard;