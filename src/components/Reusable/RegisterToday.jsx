import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function RegisterToday() {
  return (
    <div className="bg-secondary">
      <div className="mx-auto w-11/12  p-5 md:flex md:items-center md:justify-between">
        <h1 className="subheading font-semibold tracking-tight  md:mx-3 xl:text-2xl">
          Unlock the world of learning with ENLN Academy
        </h1>
        <div className="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
          <Link to="/signup">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="buttontext btn btn-primary w-full rounded-lg border-none px-8 py-2 tracking-wider duration-300 lg:w-auto "
          >
            <span>Start Today</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterToday;
