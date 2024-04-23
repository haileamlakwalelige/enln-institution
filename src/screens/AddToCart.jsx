import React from "react";
import HorizontalCard from "../components/Reusable/HorizontalCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartItems = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="pt-10 px-2 sm:px-6 md:px-12 lg:px-20">
      <div>
        <p className="text-primary font-semibold merb text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] ">
          Add To Cart
        </p>
        <p className="font-bold text-[14px] text-black amib sm:text-[16px] py-3">
          4 Courses in the cart
        </p>
        <div className="my-10 flex flex-wrap justify-center items-start gap-4">
          <div>
            <HorizontalCard />
          </div>
          <div className="flex justify-center items-center w-[305px] h-[241px] border-primary border-[1px] rounded-xl">
            <div className=" flex justify-center items-start  flex-col">
              <p className="text-black amir text-[14px] font-bold mb-2">
                Total
              </p>
              <p className="text-primary text-[20px] merb mb-4 md:text-[24px] lg:text-[28px] ">
                Birr {totalPrice}
              </p>
              <Link to="/checkout">
              <button
                //   type="submit"
                className="bg-primary rounded-xl text-white font-semibold text-xl py-2 px-10 max-w-[300px] min-w-[250px] my-4"
              >
                Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
