import React from "react";
import signup from "../assets/signup.svg";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const SignUp = () => {
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
          <p className="text-4xl py-2 font-bold amir text-primary ">Sign Up</p>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir"
            />
            <input
              type="text"
              placeholder="Email"
              className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir"
            />
            <input
              type="text"
              placeholder="Password"
              className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir"
            />
            <p className="px-3 py-3 text-black text-lg font-medium">
              Between 8 and 72 character
            </p>
            <button
              type="submit"
              className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
            >
              Sign Up
            </button>
            <div className="bg-white rounded-xl flex text-lg  text-black font-semibold gap-4 justify-start items-start py-2 px-4 max-w-[300px] min-w-[250px] my-4 border-primary border-2">
              <img src={google} alt="" className="h-[25px] w-[25px]" />
              <button>Continue With Google</button>
            </div>
            <div className="bg-white rounded-xl flex text-black font-semibold gap-4 justify-start items-start py-2 px-4 max-w-[300px] min-w-[250px] my-4 border-primary border-2">
              <img src={facebook} alt="" className="h-[25px] w-[25px]" />
              <button className="text-lg">Continue With Facebook</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
