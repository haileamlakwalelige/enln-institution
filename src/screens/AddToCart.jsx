import HorizontalCard from "../components/Reusable/HorizontalCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartItems = useSelector(state => state.cart);

  // Convert prices to numbers and calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="pt-10 px-2 sm:px-6 md:px-12 lg:px-20">
      <div>
        <p className="text-primary font-semibold merb text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
          Added To Cart
        </p>
        <p className="font-bold text-[14px] text-black amib sm:text-[16px] py-3">
          {cartItems.length} Courses in the cart
        </p>
        <div className="my-10 flex flex-wrap lg:flex-nowrap  justify-center items-start gap-4">
          <div className="w-full lg:w-3/5">
            <HorizontalCard items={cartItems} />
          </div>
          <div className="flex lg:max-w-2/5 justify-center items-center w-[330px] h-[241px] border-primary border-[1px] rounded-xl">
            <div className="flex justify-center items-start flex-col max-w-[200px]">
              <p className="text-black amir text-[14px] font-bold mb-2">
                Total
              </p>
              <p className="text-primary text-[20px] merb mb-4 md:text-[24px] lg:text-[28px]">
                Birr {totalPrice.toFixed(2)} {/* Format the total price to two decimal places */}
              </p>
              <Link to="/checkout">
                <button
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
