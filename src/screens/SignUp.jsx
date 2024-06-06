// src/screens/SignUp.js
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signup from "../assets/signup.svg";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { useMutation } from "react-query";
import api from "../api/api";

const register = async ({ name, email, password }) => {
  try {
    const response = await api.post("/register", { name, email, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.data.message === 'Email already registered') {
        throw new Error('Email already registered');
      } else if (error.response.data.message.includes('Duplicate entry')) {
        throw new Error('Duplicate entry error');
      } else {
        throw new Error(error.response.data.message);
      }
    } else {
      throw new Error('Error in registration');
    }
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  // At least one number, one lowercase letter, one uppercase letter, one special character, and at least 8 characters
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,72}$/;
  return re.test(password);
};


const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation(register, {
    onSuccess: () => {
      toast.success("Registered Successfully");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    },
    onError: (error) => {
      if (error.message === 'Email already registered') {
        toast.error('Email already registered');
      } else if (error.message === 'Duplicate entry error') {
        toast.error('Email Already Exists!');
      } else {
        toast.error(error.message);
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!validatePassword(password)) {
      toast.warn("Password must be between 8 and 72 characters, and include at least one number, one lowercase letter, one uppercase letter, and one special character (@, $, !, %, *, ?, &)");

      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    mutation.mutate({ name, email, password });
  };

  return (
    <div className="py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 sm:px-4 md:px-12 lg:px-32 lg:gap-10 justify-center items-center">
        <div className="flex justify-center items-center md:justify-end md:items-end">
          <img
            src={signup}
            alt="Sign Up"
            className="w-[426px] h-[250px] md:h-[306px] hidden md:flex"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl py-2 font-bold amir text-primary">
            Create an Account
          </p>
          {mutation.isError && (
            <p
              style={{ color: "red" }}
              className="font-light text-2xl w-full text-center"
            >
              {/* {mutation.error.response.data.message} */}
              {/* Email already exists */}
            </p>
          )}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir"
            />
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
            <div className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir z-20 p-1 overflow-x-hidden flex justify-start items-start">
              <input
                type={passShow ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-none outline-none focus:outline-none z-10 rounded max-w-[300px] min-w-[250px]"
              />
              <div className="pt-2 pr-4" onClick={() => setPassShow(!passShow)}>
                {passShow ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {/* <p className="px-3 py-3 text-black text-lg font-medium">
            Password must be between 8 and 72 characters, and include at least one number, one lowercase letter, one uppercase letter, and one special character (@, $, !, %, *, ?, &)
            </p> */}
            <button
              type="submit"
              className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Signing up..." : "Sign Up"}
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
