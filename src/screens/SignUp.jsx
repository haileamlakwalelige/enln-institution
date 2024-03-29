import React, { useState } from "react";
import signup from "../assets/signup.svg";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);

  return (
    <div className="py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-2 sm:px-4 md:px-12 lg:px-32 lg:gap-10 justify-center items-center">
        <div className="flex justify-center items-center md:justify-end md:items-end">
          <img
            src={signup}
            alt="SingUp"
            className="w-[426px] h-[306px]"
            style={{ width: "426px", height: "306px" }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-20px md:text-[24px] lg:text-[28px] xl:text-[32px]  py-2 font-bold merb  text-primary ">
            Sign Up
          </p>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-md border-primary border-[1px] my-2 max-w-[300px] min-w-[250px] amir"
            />
            <input
              type="text"
              placeholder="Email"
              className="rounded-md border-primary border-[1px] my-2 max-w-[300px] min-w-[250px] amir"
            />
            <div className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir z-20 p-1 overflow-x-hidden flex justify-start items-start">
              <input
                type={passShow ? "text" : "password"}
                placeholder="Password"
                className="border-none outline-none focus:outline-none  z-10 rounded max-w-[300px] min-w-[250px]"
              />
              <div className="pt-2 pr-4" onClick={() => setPassShow(!passShow)}>
                {passShow ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <p className="px-3 py-3 text-black text-lg font-medium">
              Between 8 and 72 character
            </p>
            <button
              type="submit"
              className="bg-primary rounded-md text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
            >
              Sign Up
            </button>
            <div className="bg-white rounded-md flex text-lg  text-black font-semibold gap-4 justify-start items-start py-2 px-4 max-w-[300px] min-w-[250px] my-4 border-primary border-[1px]">
              <img src={google} alt="" className="h-[25px] w-[25px]" />
              <button>Continue With Google</button>
            </div>
            <div className="bg-white rounded-md flex text-black font-semibold gap-4 justify-start items-start py-2 px-4 max-w-[300px] min-w-[250px] my-4 border-primary border-[1px]">
              <img src={facebook} alt="" className="h-[25px] w-[25px]" />
              <button className="text-lg">Continue With Facebook</button>
            </div>
          </form>
          <div className="flex gap-3 text-black font-medium">
            <p>Already have an account?</p>
            <Link to="/login" className="text-primary font-bold">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
