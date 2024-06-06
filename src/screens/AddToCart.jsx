import HorizontalCard from "../components/Reusable/HorizontalCard";
import { useSelector } from "react-redux";


const AddToCart = () => {
  const cartItems = useSelector(state => state.cart);

  // Convert prices to numbers and calculate total price
  // const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="pt-10 px-2 sm:px-6 md:px-12 lg:px-20">
      <div>
        <p className="text-primary font-semibold merb text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
          Added To Favorite
        </p>
        <p className="font-bold text-[14px] text-black amib sm:text-[16px] py-3">
          {cartItems.length} Courses in the Favorite
        </p>
        <div className="my-10 flex flex-wrap lg:flex-nowrap  justify-center items-start gap-4">
          <div className="w-full lg:w-3/5">
            <HorizontalCard items={cartItems} />
          </div>
          <div className="flex lg:max-w-2/5 justify-center items-center w-[330px] h-[241px] rounded-xl">
          </div>
        </div>
      </div>
    </div>
  );
};



export default AddToCart;
