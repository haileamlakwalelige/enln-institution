
//Login
import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signup from "../assets/login.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import axios from "axios";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error handling
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the email is already registered
      const emailCheckResponse = await axios.get(`http://localhost:3001/users?email=${email}`);
      const existingUser = emailCheckResponse.data[0];
      
      if (!existingUser) {
        setError("Email is not registered");
        toast.error("Email is not Registered");
        return;
      }
  
      // If the email is registered, attempt login
      const loginResponse = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
      const loggedInUser = loginResponse.data[0];
      
      if (!loggedInUser) {
        setError("Invalid email or password");
        toast.error("Invalid email or password");
        return;
      }
      
      // If login is successful, you can handle it accordingly
      console.log("Login successful:", loggedInUser);
      toast.success("Login successful");
      navigation("/dashboard")
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
      toast.error("An error occurred during login");
    }
  };
  
  

  return (
    <div className="py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 sm:px-4 md:px-12 lg:px-32 lg:gap-10 justify-center items-center">
        <div className="flex justify-center items-center md:justify-end md:items-end">
          <img
            src={signup}
            alt="Login"
            className="w-[426px] h-[250px] md:h-[306px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl py-2 font-bold amir text-primary ">
            Welcome Back
          </p>
          {error && (
            <p
              style={{ color: "red" }}
              className="font-light text-2xl w-full text-center"
            >
              {error}
            </p>
          )}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir"
            />
            <div className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir z-20 p-1 overflow-x-hidden flex justify-start items-start">
              <input
                type={passShow ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-none outline-none focus:outline-none z-10 rounded max-w-[300px] min-w-[250px]"
              />
              <div className="pt-2 pr-4" onClick={() => setPassShow(!passShow)}>
                {passShow ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <Link to="/forget-password">
              <p className="px-3 py-3 text-black text-lg font-medium">
                Forget Password?
              </p>
            </Link>
            <button
              type="submit"
              className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
            >
              Log in
            </button>
            <div className="bg-white rounded-xl flex text-lg text-black font-semibold gap-4 justify-start items-start py-2 px-4 max-w-[300px] min-w-[250px] my-4 border-primary border-2">
              <img src={google} alt="" className="h-[25px] w-[25px]" />
              <button>Continue With Google</button>
            </div>
            <div className="bg-white rounded-xl flex text-black font-semibold gap-4 justify-start items-start py-2 px-4 max-w-[300px] min-w-[250px] my-4 border-primary border-2">
              <img src={facebook} alt="" className="h-[25px] w-[25px]" />
              <button className="text-lg">Continue With Facebook</button>
            </div>
          </form>
          <div className="flex gap-3 text-black font-medium">
            <p>Don't have an account?</p>
            <Link to="/sign-up" className="text-primary font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
