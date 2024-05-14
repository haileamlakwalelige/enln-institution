import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { BsCart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const [click, setClick] = useState(false);
  const cartItems=useSelector(state =>state.cart)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <div className="fixed w-screen lg:-mt-20 -mt-20 py-2 z-50 bg-secondary">
      <nav
        className={`navbar py-2 sticky top-0 z-50 bg-secondary text-primary`}
      >
        <Link
          to="/"
          className={` flex items-start lg:items-end  justify-start lg:justify-end `}
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt=""
            className="h-20 -mt-10 md:-mt-4 lg:mt-0 w-24 ml-6 md:ml-20  lg:mr-20 navbar-logo"
          />
        </Link>
        <div className="flex justify-end items-end">
          <div
            className="flex gap-4 justify-center
           items-center ml-44 md:ml-96 md:mt-4 lg:ml-32 mt-2"
          >
            <Link to="/add-to-cart" className="flex">
            <BsCart size={25} className="font-extrabold des" /><span className="text-red-500 font-bold text-sm -mt-4 des">{cartItems.length}</span>
            </Link>
            <BiSearch size={29} className="font-extrabold des" />
          </div>
          <div className="menu-icon text-primary  mt-3" onClick={handleClick}>
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
          <li>
            <input
              type="text"
              className="lose w-auto min-w-[300px] lg:min-w-[400px] h-[35px] rounded-xl text-primary focus:outline-none outline-none"
            />
          </li>
          <li className="nav-item">
            <Link
              to="/course"
              className={`py-2 px-3 md:p-0    lg:text-primary flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Course
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/login"
              className={`py-2 px-3 md:p-0   lg:text-primary  flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove  `}
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/sign-up"
              className={`py-2 px-3 md:p-0    lg:text-primary  flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove `}
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/add-to-cart"
              className={`py-2 px-3 md:p-0   lg:text-primary  flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove `}
              onClick={closeMobileMenu}
            >
              <BsCart /><span className="text-red-500 font-bold text-sm -mt-4">{cartItems.length}</span>
            </Link>
          </li>
          {/* <li className="nav-item lg:mr-44 xl:mr-0">
            <Link
              to="/contact"
              className={` nav-links but -mt-10 md:mt-0 font-light rounded-xl  hover:lg:rounded-3xl lg:bg-white text-primary duration-50  `}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar2;
