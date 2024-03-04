import React from "react";

const HeaderTop = () => {
  return (
    <div>
      <div className="hidden z-30 fixed top-0 w-screen md:grid grid-cols-1 xl:grid-cols-2 bg-black text-white px-2 py-4">
        <div className="flex justify-between gap-4 px-10 lg:px-2 ">
          <p className="font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
            For Individuals
          </p>
          <p className="font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
            For Organizations
          </p>
          <p className="font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
            For Government
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
