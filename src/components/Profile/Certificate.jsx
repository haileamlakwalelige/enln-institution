import tom from "../../assets/tom.png";

const Certificate = () => {
  return (
   <div className="min-h-screen">
     <div className="mt-10 rounded-xl border-2 border-gray-200 pl-6 pt-6">
      <p className="merb p-2 text-start  text-[20px] font-semibold text-[#025464] sm:p-4 md:p-12 md:text-[24px] lg:text-[28px]">
        Certificates
      </p>
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
          <div className="mb-4 flex flex-col  gap-6 md:flex-row lg:-mt-12"></div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Certificate;
