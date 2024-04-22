import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Your resize handling logic goes here
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="fixed w-screen  -mt-20 py-2 z-50 bg-secondary">
      <nav
        className={`navbar py-2 sticky lg:flex justify-between top-0 z-50 bg-secondary`}
      >
        <Link
          to="/"
          className={` flex items-start lg:items-end  justify-start lg:justify-end `}
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt=""
            className="h-20 md:-mt-4 -mt-14 lg:mt-0 w-24 ml-6 md:ml-20  lg:mr-20 navbar-logo"
          />
        </Link>
        <div className="menu-icon -mt-3 lg:text-white text-white  flex gap-5 items-end justify-end">
          <Link to="/" className="lg:hidden">
            <BiCart className="text-primary font-bold text-[30px]" />
          </Link>
          <div className="ico" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul
          className={
            click
              ? "nav-menu active lg:gap-10  -mr-20 overflow-x-hidden flex  justify-center items-center"
              : "nav-menu lg:gap-10 -mr-20 overflow-x-hidden  flex justify-center font-normal items-center"
          }
        >
          <li className="nav-item">
            <Link
              to="/categories"
              className={`py-2 px-3 md:p-0 lg:hidden xl:flex  lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/login"
              className={`py-2 px-3 md:p-0 lg:hidden xl:flex  lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove `}
              onClick={closeMobileMenu}
            >
              <p className="lg:bg-[#025464] px-8 font-light rounded-xl py-0.5">
                Login
              </p>
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/sign-up"
              className={`py-2 px-3 md:p-0 lg:hidden xl:flex  lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              <p className="lg:bg-[#025464] px-8 font-light rounded-xl py-0.5">
                Sign Up
              </p>
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/products"
              className={`py-2 px-3 md:p-0 hidden lg:flex    lg:text-white justify-center items-center offer lg:text-xl md:bg-transparent text-center hove `}
              onClick={closeMobileMenu}
            >
              <BiCart className="text-primary font-bold text-[30px]" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
