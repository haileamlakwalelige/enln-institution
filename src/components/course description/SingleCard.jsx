import React from "react";
import dot from "../../assets/dollar.png";
import film from "../../assets/flm.png";
import certi from "../../assets/certificate.png";
import infi from "../../assets/infi.png";
import note from "../../assets/note.png";

const SingleCard = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-5">
        <img src={dot} alt="" className="h-[50px] w-[50px]" />
        <div>
          <p className="text-gray-500 text-base">
            one time{" "}
            <span className="border-[1px] border-primary px-1 text-primary rounded-lg">
              virtual
            </span>
          </p>
          <p className="merb text-black text-[18px] md:text-[20px] lg:text-[22px] text-center font-bold">
            Birr 1,500
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="amir font-bold text-[16px] text-start">
          What this course includes
        </p>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <img src={film} alt="" className="w-[30px] h-[25.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            40 hours (8h 20m)
          </p>
        </div>
        <div className="flex gap-4">
          <img src={infi} alt="" className="w-[30px] h-[13.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            Full life-time supply
          </p>
        </div>
        <div className="flex gap-4">
          <img src={certi} alt="" className="w-[30px] h-[25.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            Certificate for completion
          </p>
        </div>
        <div className="flex gap-4">
          <img src={note} alt="" className="w-[30px] h-[25.95px]" />
          <p className="amir font-medium text-[16px] text-start mt-1">
            Ten Assessments
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <button className="bg-primary text-white min-w-[250px]    px-10  py-2 rounded font-semibold border-primary border-2">
          Add To Cart
        </button>
        <button className="hover:bg-primary text-primary hover:text-white min-w-[250px]   px-10  py-2 rounded font-semibold border-primary border-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
