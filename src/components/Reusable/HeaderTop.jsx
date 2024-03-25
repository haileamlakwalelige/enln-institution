import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div>
      <div className="hidden z-30 fixed top-0 w-screen md:grid grid-cols-1 xl:grid-cols-2 bg-black text-white px-2 py-4">
        <div className="flex justify-between gap-4 px-10 lg:px-2 ">
          <Link to="/">
            <p className="font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              For Individuals
            </p>
          </Link>
          <Link to="/org-home">
            <p className="font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              For Organizations
            </p>
          </Link>
          <Link to="/gov-home">
            <p className="font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              For Government
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
