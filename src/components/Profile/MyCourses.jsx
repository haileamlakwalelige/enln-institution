import { useState } from "react";
import tom from "../../assets/tom.png";

const MyCourses = () => {
  const [active, setActive] = useState(true);

  
  return (
    <div className="mt-10 rounded-xl border-2 border-gray-200 pl-6 pt-6">
      <div className="flex flex-col items-start justify-start gap-4 p-2 my-10 md:my-0 sm:p-4 md:flex-row md:p-12">
        <p
          onClick={() => setActive(true)}
          className={
            active
              ? "merb cursor-pointer border-b-4 border-[#025464] text-start text-[20px]  font-semibold text-[#025464] duration-500 ease-in-out"
              : "merb cursor-pointer  text-start text-[20px] font-semibold text-[#025464]"
          }
        >
          Active Courses
        </p>
        <p
          onClick={() => setActive(false)}
          className={
            active
              ? "merb  cursor-pointer  text-start text-[20px] font-semibold text-[#025464]"
              : "merb cursor-pointer border-b-4 border-[#025464] text-start  text-[20px] font-semibold text-[#025464] duration-500 ease-out"
          }
        >
          Completed Courses
        </p>
      </div>
      {active ? (
        <div className="-mt-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center  ">
            <div className="grid grid-cols-1 gap-4 p-2 text-center sm:p-4 md:grid-cols-2 md:p-12 lg:grid-cols-3">
              <div className="flex h-full min-h-[300px] min-w-[250px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black">
                <img src={tom} alt="" className="h-[186px] w-[250px]" />
                <p className="amir text-[16px] font-semibold text-black">
                  The complete nutrition course
                </p>
                <p className="py-1 text-start text-[#7E7E7E]">Bekele Sewasew</p>
                <p className="py-1 text-start font-bold text-[#187498]">
                  Completed
                </p>
                <p className="bg-[#025464] px-3 py-1 font-semibold text-white">
                  Download Certificate
                </p>
              </div>
              <div className="flex h-full min-h-[300px] min-w-[250px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black">
                <img src={tom} alt="" className="h-[186px] w-[250px]" />
                <p className="amir text-[16px] font-semibold text-black">
                  The complete nutrition course
                </p>
                <p className="py-1 text-start text-[#7E7E7E]">Bekele Sewasew</p>
                <p className="py-1 text-start font-bold text-[#187498]">
                  Completed
                </p>
                <p className="bg-[#025464] px-3 py-1 font-semibold text-white">
                  Download Certificate
                </p>
              </div>
              <div className="flex h-full min-h-[300px] min-w-[250px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black">
                <img src={tom} alt="" className="h-[186px] w-[250px]" />
                <p className="amir text-[16px] font-semibold text-black">
                  The complete nutrition course
                </p>
                <p className="py-1 text-start text-[#7E7E7E]">Bekele Sewasew</p>
                <p className="py-1 text-start font-bold text-[#187498]">
                  Completed
                </p>
                <p className="bg-[#025464] px-3 py-1 font-semibold text-white">
                  Download Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="-mt-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center  ">
            <div className="grid grid-cols-1 gap-4 p-2 text-center sm:p-4 md:grid-cols-2 md:p-12 lg:grid-cols-3">
              <div className="flex h-full min-h-[300px] min-w-[250px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black">
                <img src={tom} alt="" className="h-[186px] w-[250px]" />
                <p className="amir text-[16px] font-semibold text-black">
                  The complete nutrition course
                </p>
                <p className="py-1 text-start text-[#7E7E7E]">Bekele Sewasew</p>
                <p className="py-1 text-start font-bold text-[#187498]">
                  Completed
                </p>
                <p className="bg-[#025464] px-3 py-1 font-semibold text-white">
                  Download Certificate
                </p>
              </div>
              <div className="flex h-full min-h-[300px] min-w-[250px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black">
                <img src={tom} alt="" className="h-[186px] w-[250px]" />
                <p className="amir text-[16px] font-semibold text-black">
                  The complete nutrition course
                </p>
                <p className="py-1 text-start text-[#7E7E7E]">Bekele Sewasew</p>
                <p className="py-1 text-start font-bold text-[#187498]">
                  Completed
                </p>
                <p className="bg-[#025464] px-3 py-1 font-semibold text-white">
                  Download Certificate
                </p>
              </div>
              <div className="flex h-full min-h-[300px] min-w-[250px] flex-col rounded-xl border-[1px] border-gray-400 px-2 pb-3 text-black">
                <img src={tom} alt="" className="h-[186px] w-[250px]" />
                <p className="amir text-[16px] font-semibold text-black">
                  The complete nutrition course
                </p>
                <p className="py-1 text-start text-[#7E7E7E]">Bekele Sewasew</p>
                <p className="py-1 text-start font-bold text-[#187498]">
                  Completed
                </p>
                <p className="bg-[#025464] px-3 py-1 font-semibold text-white">
                  Download Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
