import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signup from "../assets/signup.svg";
import { useMutation } from "react-query";
import api from "../api/api";

const register = async ({ current_password, password, password_confirmation }) => {
  try {
    const response = await api.put("/update-password", { current_password, password, password_confirmation });
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
      throw new Error('Error in Updating');
    }
  }
};

const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,72}$/;
  return re.test(password);
};

const UpdatePassword = () => {
  const [passShow, setPassShow] = useState(false);
  const [passShow2, setPassShow2] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation(register, {
    onSuccess: () => {
      toast.success("Password updated successfully");
      navigate("/login");
      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.warn("Password must meet criteria");
      return;
    }
    if (password !== password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }
    mutation.mutate({ current_password: currentPassword, password_confirmation, password });
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
            Update Password
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir z-20 p-1 overflow-x-hidden flex justify-start items-start">
              <input
                type={passShow2 ? "text" : "password"}
                placeholder="Current Password"
                name="current_password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="border-none outline-none focus:outline-none z-10 rounded max-w-[300px] min-w-[250px]"
              />
              <div className="pt-2 pr-4" onClick={() => setPassShow2(!passShow2)}>
                {passShow2 ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <div className="rounded-xl border-primary border-2 my-2 max-w-[300px] min-w-[250px] amir z-20 p-1 overflow-x-hidden flex justify-start items-start">
              <input
                type={passShow ? "text" : "password"}
                placeholder="New Password"
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
                value={password_confirmation}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-none outline-none focus:outline-none z-10 rounded max-w-[300px] min-w-[250px]"
              />
              <div className="pt-2 pr-4" onClick={() => setPassShow(!passShow)}>
                {passShow ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
