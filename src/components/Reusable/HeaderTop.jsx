import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div>
      <div className=" z-30 fixed top-0 w-screen md:grid grid-cols-1 xl:grid-cols-2 bg-black text-white px-2 py-4">
        <div className="flex justify-between gap-4 md:px-10 lg:px-2 px-2 ">
          <Link to="/">
            <p className="hidden lg:flex font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              For Individuals
            </p>
            <p className="lg:hidden font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              Individuals
            </p>
          </Link>
          <Link to="https://enlnorganization-qd81a70fu-haileamlakwaleliges-projects.vercel.app">
            <p className="hidden lg:flex font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              For Organizations
            </p>
            <p className="flex lg:hidden font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              Organizations
            </p>
          </Link>
          <Link to="https://enlngovernment-dfc56atgq-haileamlakwaleliges-projects.vercel.app/">
            <p className="hidden lg:flex font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              For Government
            </p>
            <p className="flex lg:hidden font-normal text-lg hover:border-gray-100 hover:border-b-2 duration-500 cursor-pointer">
              Government
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
