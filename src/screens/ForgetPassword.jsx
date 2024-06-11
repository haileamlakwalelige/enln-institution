import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import forget from "../assets/forgotpassword.svg";
import { useMutation } from "react-query";
import api from "../api/api";
import { toast } from "react-toastify";
import { useState } from "react";


function ForgetPassword() {
  const [email, setEmail]=useState("");
  const navigate = useNavigate();
  
  const resetPasswordMutation = useMutation(
    (email) => api.post("/forgot-password", { email }), 
    {
      onSuccess: () => {
        toast.success("Password reset email sent!"); 
        navigate("/");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`); 
      },
    }
  );

  const handleResetPassword = (e) => {
    e.preventDefault();
    // const email = e.target.value;
    console.log("Email", email)

    if (email) {
      resetPasswordMutation.mutate(email);
    }
  };

  return (
    <div className="hero mx-auto min-h-[100vh] bg-base-200">
      <div className="hero-content w-full flex-col md:flex-row">
        <img
          src={forget}
          alt="Forgot Password"
          className="w-[426px] h-[306px] hidden md:flex"
          style={{ width: "426px", height: "306px" }}
        />
        <div className="hero-content flex-col">
          <h1 className="heading mb-4 text-3xl font-bold">Forgot Password</h1>

          {/* Form for password recovery */}
          <form
            onSubmit={handleResetPassword}
            className="mb-6 w-full px-5 justify-center items-center flex flex-col"
          >
            <div className="rounded-lg bg-white p-4 w-full">
              <div className="relative bg-inherit">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="peer h-10 w-72 rounded-lg bg-transparent px-2 text-gray-900 placeholder-transparent ring-1 border-none ring-secondary focus:outline-none focus:ring-primary focus:ring-1 min-w-[300px]"
                  placeholder="Enter your email"
                />
                <label
                  htmlFor="email"
                  className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                >
                  Enter your email
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="buttontext btn btn-primary flex lg:items-center min-w-[300px] ml-3"
              disabled={resetPasswordMutation.isLoading}
            >
              {resetPasswordMutation.isLoading ? "Sending..." : "Reset Password"}
            </motion.button>
            <p className="text-center text-neutral-700">
              or
              <Link
                to="/login"
                className="smalltext group relative mx-4 transform leading-5 text-secondary duration-300 dark:text-primary md:my-0"
              >
                Log in
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
