import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import api from "../../api/api";
import { MdFavoriteBorder } from "react-icons/md";


const Navbar2 = () => {
  const [click, setClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  const searchRef = useRef(null); // Ref for the search input container

  const { data: result, isLoading, isError, error } = useQuery(["courses"], async () => {
    const res = await api.get("/courses");
    return res.data.data;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const filteredResults = useMemo(() => {
    if (!result) return [];
    return result.filter((val) =>
      val.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [result, searchTerm]);

  const handleSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch(false); // Close the search section if clicked outside
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="fixed w-screen lg:-mt-20 -mt-20 py-2 z-50 bg-secondary">
      <nav className={`navbar py-2 sticky top-0 z-50 bg-secondary text-primary`}>
        <Link
          to="/"
          className={`flex items-start lg:items-end justify-start lg:justify-end`}
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt=""
            className="h-20 -mt-10 md:-mt-8 lg:mt-0 w-24 ml-6 md:ml-20 lg:mr-20 navbar-logo"
          />
        </Link>
        <div className="flex justify-end items-end">
          <div className="flex gap-4 justify-center items-center ml-44 md:ml-96 md:mt-4 lg:ml-32 mt-2">
            <Link to="/favorite" className="flex">
              <MdFavoriteBorder size={25} className="font-extrabold des" />
              <span className="text-red-500 font-bold text-sm -mt-4 des">
                {cartItems.length}
              </span>
            </Link>
            <BiSearch
              size={29}
              className="font-extrabold des cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <div className="menu-icon text-primary mt-3" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul
          className={
            click
              ? "nav-menu active lg:gap-10 -mr-20 overflow-x-hidden flex justify-center items-center"
              : "nav-menu lg:gap-10 -mr-20 overflow-x-hidden flex justify-center font-normal items-center"
          }
        >
          <li className="flex flex-col gap-4">
            <div ref={searchRef}>
              <input
                type="text"
                className="lose w-auto min-w-[300px] lg:min-w-[400px] h-[35px] rounded-xl text-primary focus:outline-none outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm !== "" && (
                <ul className="absolute mt-6 max-w-[400px] w-full mx-2 max-h-[60vh] overflow-y-auto bg-white duration-75 z-50 px-2 py-3 text-black border border-gray-200 rounded-xl shadow-lg">
                  {filteredResults.map((val) => (
                    <Link key={val.id} to={`course/${val.slug}`} onClick={()=>setSearchTerm("")}>
                      <li className="flex items-center gap-2 p-2 py-4 hover:text-primary border-b-[1px] border-gray-200 hover:bg-gray-100 duration-200">
                        <p className="text-start">{val.title}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li className={`nav-item ${isMobile ? "-mt-40" : ""}`}>
            <Link
              to="/categories"
              className={`py-2 px-3 md:p-0 lg:text-primary flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={`py-2 px-3 md:p-0 lg:text-primary flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className={`py-2 px-3 md:p-0 lg:text-primary flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/favorite"
              className={`py-2 px-3 md:p-0 lg:text-primary flex justify-center items-center offer lg:text-[20px] font-light md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              <MdFavoriteBorder />
              <span className="text-red-500 font-bold text-sm -mt-4">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
      {search ? (
        <li>
        <div ref={searchRef} className="flex flex-col items-center gap-4 des pt-5">
        <div className="flex justify-center items-start gap-3">
          <input
            type="text"
            className="des w-auto min-w-[300px] lg:min-w-[400px] h-[35px] rounded-xl text-primary focus:outline-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex justify-end items-center flex-col">
            <FaTimes
              className="text-red-500 text-sm my-2 translate-x-1 transform"
              onClick={() => setSearch(false)}
            />
          </div>
        </div>
          {searchTerm !== "" && (
            <ul className="absolute mt-10 max-w-[400px] w-full mx-2 max-h-[60vh] overflow-y-auto bg-white duration-75 z-50 px-2 py-3 text-black border border-gray-200 rounded-xl shadow-lg">
              {filteredResults.map((val) => (
                <Link key={val.id} to={`course/${val.slug}`} onClick={()=>setSearchTerm("")}>
                  <li className="flex items-center gap-2 p-2 py-4 hover:text-primary border-b-[1px] border-gray-200 hover:bg-gray-100 duration-200">
                    <p className="text-start">{val.title}</p>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </li>
      ):null}
      </div>
    </div>
  );
};

export default Navbar2;
