import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
// import HeaderLogo from "../public/header individual.png";
import HeaderLogo from '../../assets/headerindividual.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("individuals");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchBarClick = () => {
    setIsClicked(true);
  };

  const handleSearchBarBlur = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div className="hidden  overflow-y-auto whitespace-nowrap bg-accent px-4 py-3 lg:block">
        <div className="flex">
          <Link
            to="/"
            className={`smalltext group relative mx-4 transform uppercase leading-5 text-white  duration-300 dark:text-secondary md:my-0`}
            onClick={() => setActiveLink("individuals")}
          >
            <p className="text-white">For individuals</p>
            {activeLink === "individuals" && (
              <motion.div
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              ></motion.div>
            )}
          </Link>

          <Link
            to="/"
            className={`smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0`}
            onClick={() => setActiveLink("government")}
          >
            <p className="text-white">For government</p>
            {activeLink === "government" && (
              <motion.div
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              ></motion.div>
            )}
          </Link>
          <Link
            to="/"
            className={`smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0`}
            onClick={() => setActiveLink("organization")}
          >
            <p className="text-white">For organization</p>
            {activeLink === "organization" && (
              <motion.div
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              ></motion.div>
            )}
          </Link>
        </div>
      </div>
      <div className="sticky top-0 z-50 bg-slate-300">
        <nav className="relative mx-auto flex w-11/12  items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Link to="/" className="mx-4 hidden lg:block">
              <img src={HeaderLogo} className="h-8" alt="Header Logo" />
            </Link>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center p-3 text-primary"
                onClick={toggleMenu}
              >
                <svg
                  className="block h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">
              <div
                className="dropdown relative inline-block"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <button className="inline-flex items-center rounded  px-4 py-2 text-primary">
                  <span className="mr-1">Categories</span>
                  <svg
                    className={`h-4 w-4 transform fill-current ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul
                  className={
                    isOpen
                      ? "absolute block w-auto pt-1 text-gray-700"
                      : "dropdown-menu absolute hidden pt-1 text-gray-700"
                  }
                >
                  <li className="whitespace-no-wrap block w-auto rounded-t bg-white px-4 py-2 hover:bg-slate-400 hover:text-primary">
                    <a href="#">Nutrition Leadership</a>
                  </li>
                  <li className="whitespace-no-wrap block bg-white px-4 py-2 hover:bg-slate-400 hover:text-primary">
                    <a href="#">Evidence to Policy</a>
                  </li>
                  <li className="whitespace-no-wrap block bg-white px-4 py-2 hover:bg-slate-400 hover:text-primary">
                    <a href="#">Communication</a>
                  </li>
                  <li className="whitespace-no-wrap block bg-white px-4 py-2 hover:bg-slate-400 hover:text-primary">
                    <a href="#">Advocacy</a>
                  </li>
                  <li className="whitespace-no-wrap block rounded-b bg-white px-4 py-2 hover:bg-slate-400 hover:text-primary">
                    <a href="#">Nutrition Courses</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Search bar input */}
            <div className="mx-10 hidden duration-0 md:block">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className={`h-5 w-5 duration-0 ${
                      isClicked ? "text-primary" : "text-gray-400"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isClicked ? "#025464" : "#b3cbd0"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  onClick={handleSearchBarClick}
                  onBlur={handleSearchBarBlur}
                  className="w-full rounded-md border bg-white py-2 pl-10 pr-40 placeholder-gray-400 focus:border-primary focus:placeholder-primary focus:outline-none dark:border-secondary dark:text-gray-800"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <Link to="/" className="mx-4  lg:hidden">
            <img src={HeaderLogo} className="h-8" alt="Header Logo" />
          </Link>
          <div className="flex space-x-3">
            <div className="dropdown dropdown-end dropdown-hover">
              <Link to="/favorite" className="btn btn-circle btn-ghost">
                {/* Modify this line */}
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 lg:h-8 lg:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#025464"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge indicator-item badge-primary badge-xs lg:badge-sm ">
                    0
                  </span>
                </div>
              </Link>{" "}
              {/* Modify this line */}
              <div
                tabIndex={0}
                className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
              >
                <div className="card-body bg-secondary">
                  <span className="text-lg font-bold">0 Items</span>
                  <span className="text-info">Subtotal: $0.00</span>
                  <div className="card-actions">
                    <a href="/addtocart" className="btn btn-primary btn-block">
                      {/* Modify this line */}
                      View cart
                    </a>{" "}
                    {/* Modify this line */}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/login">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn btn-outline btn-primary hidden lg:flex lg:items-center"
              >
                Log In
              </motion.a>
            </Link>
            <Link to="/signup">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn btn-primary hidden lg:flex lg:items-center"
              >
                Sign Up
              </motion.a>
            </Link>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar-menu fixed inset-0  z-50 cursor-pointer bg-gray-800 bg-opacity-25"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className=" flex items-end justify-end  p-3 ">
              <button
                className="navbar-close flex items-center rounded-full bg-white p-3 "
                onClick={toggleMenu}
              >
                <TfiClose className="z-40 h-6 w-6 cursor-pointer font-bold text-primary hover:text-accent " />
              </button>
            </div>
            <motion.nav
              className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm cursor-default flex-col overflow-y-auto border-r bg-white px-6 py-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              <div>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Categories
                    </a>
                    <ul className="p-2">
                      <li>
                        <Link
                          to="/categories"
                          className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Nutrition Leadership
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/categories"
                          className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Evidence to Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/categories"
                          className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Communication
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/categories"
                          className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Advocacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/categories"
                          className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Nutrition Courses
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/add-to-cart"
                      className="block rounded p-4 text-sm font-semibold text-slate-800 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Add to Cart
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  <Link
                    to="/login"
                    className="mb-3 block rounded-xl bg-secondary px-4 py-3 text-center text-xs font-semibold leading-loose text-primary"
                    href="#"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="mb-2 block rounded-xl bg-primary px-4 py-3 text-center text-xs font-semibold leading-loose text-white"
                    href="#"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="flex items-center justify-between lg:hidden">
                  <Link to="/individualhomepage" className="">
                    <img src={HeaderLogo} className="h-4" alt="Header Logo" />
                  </Link>
                  <p className="my-4 text-center text-xs text-slate-800">
                    <span>Copyright © 2021</span>
                  </p>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
