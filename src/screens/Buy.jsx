import { useSelector } from "react-redux";
import chapa from "../assets/chapa.svg";
import telebirr from "../assets/telebirr.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Buy = () => {
  const navigate = useNavigate();
  const singleItem = useSelector((state) => state.singleItem.item);

  useEffect(() => {
    if (!singleItem) {
      navigate("/favorite"); // or handle this scenario appropriately
    }
  }, [singleItem, navigate]);

  if (!singleItem) {
    return null; // or return a loading spinner, or some other UI
  }

  // console.log("Single Item", singleItem);

  return (
    <div className="py-12 lg:py-6 merb font-light">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center px-6">
        <div className="hidden lg:flex"></div>
        <div className="text-black text-[24px] md:text-[30px] lg:text-[36px] font-bold merb">
          Buy Now
        </div>
        <div>
          <Link to="/course">
            <p className="underline text-gray-400 amib">Cancel</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row-reverse justify-center lg:items-start gap-8 lg:gap-32 my-12 items-center">
        <div className="rounded-xl flex flex-col border-[1px] border-gray-200 justify-start items-center px-6 max-w-[526px] min-h-[420px] py-20 shadow-2xl drop-shadow-2xl">
          <p className="text-[20px] font-semibold px-3 pb-6 -mt-10">
            Order Detail
          </p>
          <div className="gap-8 flex flex-col ">
            <div className="flex flex-wrap xl:flex-nowrap gap-4 justify-start items-start">
              {singleItem?.image ? (
                <img
                  src={`https://admindashbordforenln.redshiftbusinessgroup.com/${singleItem?.image}`}
                  alt="description"
                  className="h-[200px] w-[200px]"
                />
              ) : (
                <div>No image available</div>
              )}
              <div>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-black font-medium text-[14px] md:text-[16px]">
                    {singleItem.title}
                  </p>
                  <p className="font-semibold text-[14px] md:text-[16px] text-black mt-3">
                    ETB {Number(singleItem.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl py-2 px-10 rounded-xl border-gray-200 border-[1px]">
          <p className="text-black font-bold text-[16px] md:text-[18px] lg:text-[22px] nun">
            Order Summary
          </p>

          <div className="flex justify-between items-center gap-10 py-4 border-b-[1px] border-gray-300 hover:bg-gray-100 hover:px-2">
            <p>Total</p>
            <p>ETB {Number(singleItem.price)}</p>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <img src={chapa} alt="Chapa" className="h-[55px] w-[71px]" />
            <img src={telebirr} alt="telebirr" className="h-[55px] w-[71px]" />
          </div>
          <Link to="/pay">
            <button className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4">
              Finalize Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buy;
