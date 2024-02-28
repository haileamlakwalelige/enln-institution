import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function ForgetPassword() {
  return (
    <div className="hero mx-auto min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row">
        <img
          src="/forgot password.svg"
          alt="Forgot Password"
          className="w-full lg:w-1/2"
        />
        <div className="hero-content flex-col">
          <h1 className="heading mb-4 text-3xl font-bold">Forgot Password</h1>

          {/* Form for password recovery */}
          <form className="mb-6 w-full px-5">
            <div className="rounded-lg bg-white p-4 w-full">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="peer h-10 w-72 rounded-lg bg-transparent px-2 text-gray-900 placeholder-transparent ring-1 border-none ring-secondary focus:outline-none focus:ring-primary focus:ring-1"
                  placeholder="Enter your email"
                />
                <label
                  htmlFor="username"
                  className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                >
                  Enter your email
                </label>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="buttontext btn btn-primary hidden lg:flex lg:items-center"
            >
              Reset Password
            </motion.a>
            <p className="text-center text-neutral-700">
              or
              <Link to="/login" className="smalltext group relative mx-4 transform leading-5 text-secondary duration-300 dark:text-primary md:my-0">
                Log in
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
              </Link>
            </p>
          </form>

          {/* Additional content or messages can be added here */}
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
