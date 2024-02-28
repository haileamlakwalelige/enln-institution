import React from 'react'
import { useState } from "react";
import { PiEyeThin, PiEyeClosedThin } from "react-icons/pi";

export const Setting = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [name, SetName] = useState("");
  const [social, setSocial] = useState(true);
  
  return (
    <div className="flex flex-col justify-center min-h-full">
      <div className="border-gray-20 min-h-[70vh] w-full mt-11  lg:mx-10 flex flex-col rounded-xl border-2">
      <div className="flex flex-col md:flex-row items-start justify-start gap-10 px-2  sm:p-4 md:p-12  ">
        <p onClick={()=> setSocial(true)} className={social ? "merb cursor-pointer border-b-2 border-[#025464] text-start text-[18px] font-semibold text-[#025464]": "merb  cursor-pointer  text-start text-[18px] font-semibold text-gray-400"}>
          My Account
        </p>
        <p onClick={()=> setSocial(false)} className={!social ? "merb cursor-pointer border-b-2 border-[#025464] text-start text-[18px] font-semibold text-[#025464]": "merb  cursor-pointer  text-start text-[18px] font-semibold text-gray-400"}>
          Social Links
        </p>
      </div>
        {social ? (<div>
        <p className="m-12 text-[35px] text-[#187498]">
          My Account
        </p>
        <div className="mt-10 flex flex-col items-center justify-between lg:px-32 md:flex-row">
          <div>
            <form className="grid w-full gap-x-10 gap-y-4 py-2 pb-5 grid-cols-1 lg:grid-cols-2">
            <div className="z-5 relative py-1">
                <input
                  type="text"
                  id="Name"
                  className="appearance-non peer relative block w-full min-w-[300px] border-2 border-b-2 border-gray-400 bg-transparent px-2 text-sm text-gray-200 focus:border-gray-600 focus:outline-none  focus:ring-0 dark:text-black dark:focus:border-gray-600"
                  
                />
                <label
                  htmlFor="Name"
                  className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm  text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                 Name<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="z-5 relative py-1">
                <input
                  type="text"
                  id="Name"
                  className="appearance-non peer relative block w-full min-w-[300px] border-2 border-b-2 border-gray-400 bg-transparent px-2 text-sm text-gray-200 focus:border-gray-600 focus:outline-none  focus:ring-0 dark:text-black dark:focus:border-gray-600"
                  
                />
                <label
                  htmlFor="Phone"
                  className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm  text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                 Phone<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="z-5 relative py-1">
                <input
                  type="text"
                  id="Email"
                  className="appearance-non peer relative block w-full min-w-[300px] border-2 border-b-2 border-gray-400 bg-transparent px-2 text-sm text-gray-200 focus:border-gray-600 focus:outline-none  focus:ring-0 dark:text-black dark:focus:border-gray-600"
                  
                />
                <label
                  htmlFor="Email"
                  className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Email<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="z-5 relative py-1">
              <label
                  htmlFor="Email"
                  className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Password<span className="text-red-500"> *</span>
                </label>
                <div className='flex  justify-start items-start peer relative -mt-1 min-w-[300px] border-2 border-b-2 border-gray-400 bg-transparent px-2 text-sm text-gray-200 focus:border-gray-600 focus:outline-none focus:ring-0 dark:text-black dark:focus:border-gray-600'>
                <input
                  // type="password"
                  type={open ? "text":"password"}
                  id="Password"
                  className="flex border-none justify-start items-start peer relative w-full bg-transparent px-2 text-md text-gray-200 focus:outline-none  focus:ring-0 dark:text-black dark:focus:border-gray-600 mr-10"
                  
                />
                <div onClick={()=>setOpen(!open)} className='pr-5'>
                  {open ? <PiEyeThin className='font-bold text-black mt-2' size={25}/>: <PiEyeClosedThin className='font-bold text-black mt-2' size={25}/>}
                </div>
                
                </div>
                <div className='flex justify-between items-center'>
                  <div className='hidden md:block'>
                  </div>
                  <button className="hover:bg-green mt-4 w-[50px]rounded-lg bg-primary p-1 text-white hover:font-semibold hover:text-white flex justify-end item-end rounded-md px-4 ">
                Change Password
              </button>
                </div>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col justify-start items-start gap-3'>
        <p><span className='bg-[yellow] font-medium'> Profile </span> Picture</p>
        <input type="file" className='bg-white'/> 
        <div className="flex flex-col py-2">
                <label className="py-2 text-sm uppercase">About</label>
                <textarea
  className="flex border-2 border-secondary p-3 px-8 focus:text-gray-400 w-full md:w-auto"
  rows={4}
  cols={65}
  type="text"
  name="Subject"
></textarea>
              </div>
              <div className='flex justify-between items-center '>
              <button type='submit' className="hover:bg-green mt-4 bg-primary p-2 text-white hover:font-semibold hover:text-white flex justify-start item-end px-10 ">
                Save Changes
              </button>

              </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-3'>
        </div>
        </div>
            </form>
          </div>
          
        </div>

        </div>):( 
         
          <div className="mt-10 flex flex-col items-center justify-between mx-2 sm:mx-6 md:mx-12 lg:px-32 overflow-x-hidden  md:flex-row">
          <div>
            <form>
             <div className='grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-10'>
             <div className='flex flex-col gap-1'>
                <label className='text-[#6F6D6D] font-medium'> Facebook </label>
                <input type="text" className='w-full outline-none focus:outline-none  border-[#187498] border-1.5 rounded-sm min-w-[300px]' />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-[#6F6D6D] font-medium'> LinkedIn </label>
                <input type="text" className='w-full outline-none focus:outline-none  border-[#187498] border-1.5 rounded-sm min-w-[300px]' />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-[#6F6D6D] font-medium'> Telegram </label>
                <input type="text" className='w-full outline-none focus:outline-none  border-[#187498] border-1.5 rounded-sm min-w-[300px]' />
              </div>
             </div>
            <button className='text-white bg-[#025464] rounded-sm px-6 py-1 my-8'>
              Save Changes
            </button>
            </form>
          </div>
          
        </div>
        
)  }
        
      
        
      </div>
      
    </div>  )
}
