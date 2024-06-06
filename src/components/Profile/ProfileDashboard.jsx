import { useState } from "react";
import "./dash.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import tomprofile from "../../assets/tom.png";
import { MdLogout } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { LuBookMarked } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { MdContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import api from "../../api/api";

const ProfileDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <RxDashboard />,
    },
    {
      path: "/my-courses",
      name: "My Courses",
      icon: <LuBookMarked />,
    },
    {
      path: "/certificate",
      name: "Certificate",
      icon: <PiCertificate />,
    },
    {
      path: "/support",
      name: "Support",
      icon: <MdContactSupport />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <IoSettingsOutline />,
    }
  ];

  const handleLogout = async () => {
    try {
      // Make a POST request to the logout API endpoint
      await api.post('/logout', {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Remove the token from local storage
      localStorage.removeItem('token');

      // Remove the isAuthenticated from local storage
      localStorage.removeItem('isAuthenticated');

      // Redirect the user to the login page or the desired logout page
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen mt-32">
      <div className="container ">
        <div
          style={{ width: isOpen ? "350px" : "50px" }}
          className={isOpen ? "sidebar mt-16 max-w-[220px] max-h-[80vh] px-2 duration-500 md:ml-16 md:max-w-full lg:max-w-full": "sidebar mt-16 max-w-[220px] max-h-[60vh] px-2 duration-500 md:ml-16 md:max-w-full lg:max-w-full"}
        >
          <div
            className={isOpen ? "top_section" : "top_section justify-center"}
          >
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className={
                isOpen
                  ? " flex-end ml-4 items-center justify-end"
                  : " flex-end ml-10 items-center justify-center"
              }
            >
              <FaBars onClick={toggle} size={20} />
            </div>
          </div>
          <div>
            <img
              src={tomprofile}
              alt="profile picture"
              className={`${
                isOpen
                  ? "rounded-full p-2 sm:p-4 md:p-6 lg:p-8"
                  : "rounded-full"
              }`}
            />
            {/* <p
              style={{ display: isOpen ? "block " : "none" }}
              className="merb font-semibold text-xl text-center text-[#025464]"
            >
              {email}
            </p> */}
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col items-start justify-center"
                : "flex flex-col items-center justify-center"
            }`}
          >
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={` first-letter:${
                  isOpen
                    ? "link flex-col items-start  justify-center py-2 md:mx-10 md:pl-6 lg:items-center"
                    : "link flex-col items-center justify-center py-1"
                }`}
              >
                <div className="flex hover:text-primary gap-2 md:gap-5 justify-center items-center" onClick={close}>
                  <div className="icon mt-2 justify-center items-center  md:-ml-5 ">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block " : "none" }}
                    className="link_text mt-1"
                  >
                    {item.name}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          <div onClick={handleLogout} className={` active:text-primary active:font-bold hover:text-primary hover:font-bold hover:text-lg ${isOpen ? "flex first-letter justify-start pl-1 md:pl-[45px]  items-center gap-2 cursor-pointer": "flex first-letter justify-start md:ml-2  items-center gap-2 cursor-pointer pl-4 sm:pl-1"}`}>
                <MdLogout className={`${isOpen ? "icon mt-2 justify-center items-center font-extrabold" : "icon mt-2 -ml-3 justify-center items-center"}`}/>
                <p onClick={handleLogout} style={{ display: isOpen ? "block " : "none" }}
                    className="link_text mt-1">Logout</p>
              </div>
        </div>
        <main className={isOpen ? "hidden sm:block" : "block"}>{children}</main>
      </div>
    </div>
  );
};


export default ProfileDashboard;

ProfileDashboard.propTypes = {
  children: PropTypes.object,
};