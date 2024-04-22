import React from "react";
import tom from "../assets/tom.png";
import chapa from "../assets/chapa.svg";
import telebirr from "../assets/telebirr.svg";

const Checkout = () => {
  return (
    <div className="py-12 lg:py-6 merb font-light">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center px-6">
        <div className="hidden lg:flex"></div>
        <div className="text-black text-[24px] md:text-[30px] lg:text-[36px] font-bold merb">
          Checkout
        </div>
        <div>
          <p className="underline text-gray-400 amib">Cancel</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-32 my-12">
        <div className="rounded-xl border-[1px] border-gray-200 flex flex-col justify-start items-center px-6 max-w-[526px] min-h-[420px] py-20  shadow-2xl drop-shadow-2xl">
          <p className="text-[20px] font-semibold px-3 pb-6 -mt-10">
            Order Detail
          </p>
          <div>
            <div className="flex justify-start items-start">
              <img src={tom} alt="" className="w-[140px] h-[105px]" />
              <div>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-black font-medium text-[14px] md:text-[16px]">
                    The Complete Nutrition Course
                  </p>
                  <p className="font-semibold text-[14px] md:text-[16px] text-black mt-3">
                    ETB 1200
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <img src={tom} alt="" className="w-[140px] h-[105px]" />
              <div>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-black font-medium text-[14px] md:text-[16px]">
                    The Complete Nutrition Course
                  </p>
                  <p className="font-semibold text-[14px] md:text-[16px] text-black mt-3">
                    ETB 1200
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl py-2 px-10 rounded-xl border-gray-200 border-[1px]">
          <p className="text-black font-bold  text-[16px] md:text-[18px] lg:text-[22px] nun">
            Your Order
          </p>
          <div className="flex justify-between items-center gap-10 py-4 border-b-[1px]">
            <p>Product</p>
            <p>Total</p>
          </div>
          <div className="flex justify-between items-center gap-10 py-4 border-b-[1px] border-gray-300 hover:bg-gray-100 hover:px-2">
            <p>Product Name *1</p>
            <p>ETB 2240</p>
          </div>
          <div className="flex justify-between items-center gap-10 py-4 border-b-[1px] border-gray-300 hover:bg-gray-100 hover:px-2">
            <p>Sub Total</p>
            <p>ETB 2240</p>
          </div>
          <div className="flex justify-between items-center gap-10 py-4 border-b-[1px] border-gray-300 hover:bg-gray-100 hover:px-2">
            <p>Total</p>
            <p>ETB 2240</p>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <img src={chapa} alt="Chapa" className="h-[55px] w-[71px]" />
            <img src={telebirr} alt="telebirr" className="h-[55px] w-[71px]" />
          </div>
          <button
            //   type="submit"
            className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
