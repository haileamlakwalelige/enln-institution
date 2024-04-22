import React from "react";
import logo from "../../assets/demo2.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderMiddle = () => {
  return (
    <div className="md:top-14 top-0 min-h-[120px] bg-secondary fixed w-screen border-b-[1px] border-primary z-50">
      <div className="px-2 md:px-6 py-2">
        <div className="grid grid-cols-3 justify-center items-center">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="h-full  w-[50px] md:w-[100px] lg:w-[200px]"
              />
            </Link>
          </div>
          <div>
            <input
              type="text"
              className="min-w-[300px] hidden lg:flex rounded-xl focus:outline-none outline-none placeholder:pl-2 pl-2 lg:min-w-[400px]"
            />
          </div>
          <div className="flex justify-center lg:justify-between items-center px-2 sm:px-6 md:px-10 ">
            <FaCartShopping
              size={30}
              className="hover:text-primary cursor-pointer flex"
            />
            <div className="flex gap-10">
              <Link to="/login">
                <button className="bg-primary text-white border-[1px] px-8 hover:bg-white hover:text-primary py-2 rounded-xl">
                  Login
                </button>
              </Link>
              <Link to="/sign-up" className="hidden lg:flex">
                <button className="bg-primary text-white border-[1px] px-8 hover:bg-white hover:text-primary py-2 rounded-xl">
                  Sing Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
