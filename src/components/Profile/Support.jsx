// import React from 'react'

const Support = () => {
  return (
    <div>
      <div className="my-10 pt-3 pb-10 min-h-[80vh] rounded-xl border-2 border-gray-300 px-3 sm:px-6 md:px-12 lg:px-20">
        <p className="nunr text-center text-[20px] font-semibold lg:font-bold text-[#025464] md:text-start md:text-[25px] lg:text-[28px]">
          Need Help? We&apos;re Here For You!
        </p>
        <p className="amir my-4  text-justify text-[16px] md:text-start">
          Welcome to ENLN Academy, where learning meets convenience. If you have
          any questions or encounter any issues, our support team is ready to
          assist you.{" "}
        </p>
        <div className="flex flex-col items-center lg:items-start justify-center  lg:flex-row lg:justify-between mt-20">
          <div className="flex flex-col items-start justify-start gap-10">
            <div>
              <p className="text-[16px] font-semibold lg:font-bold text-[#025464] md:text-[18px] lg:text-[21px] ">
                Send Us Mail
              </p>
              <p>enlnacadamy@gmail.com</p>
            </div>
            <div>
              <p className="text-[16px] font-semibold lg:font-bold text-[#025464] md:text-[18px] lg:text-[21px] ">
                Call Us On{" "}
              </p>
              <p>+25144461636789</p>
            </div>
          </div>
          <div>
            <form className="mt-10  flex flex-col gap-5 items-center lg:items-start justify-center lg:justify-start lg:mt-0">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="border-1 peer block w-full min-w-[250px] lg:min-w-[300px] appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-[16px] start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="border-1 peer block w-full min-w-[250px] lg:min-w-[300px] appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute lg:text-[16px] text-sm start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="border-1 peer block w-full lg:min-w-[300px] min-w-[250px] appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute lg:text-[16px] text-sm start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Subject 
                </label>
              </div>
              <div className="relative">
                <textarea
                cols={30}
                rows={4}
                  type="text"
                  id="message"
                  className="border-1 peer block w-full min-w-[250px] lg:min-w-[300px] appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute lg:text-[16px] -mt-8 peer-focus:mt-0  start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Message <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
