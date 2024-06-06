import { useState } from "react";
// import BoardCourses from "../try/BoardCourses";
import VerticalCardTryings from "../try/VerticalCardTryings";
import BoardCourses from "./BoardCourses";


const BroadSelection = () => {
  const [selectedType, setSelectedType] = useState("Nutrition Leadership"); 

  // Function to handle click on course type
  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  // Check if the screen width is less than lg breakpoint (1024px)
  const isMobileScreen = window.innerWidth <= 1023;

  return (
    <div>
      <div className="px-2 sm:px-6 md:px-12 lg:px-32">
        <h1 className="heading py-5 text-center lg:text-start">
          Broad Selection of Courses
        </h1>
        <p className="text-[21px] font-semibold text-black merb py-3">
          Expand your career opportunities with Nutrition Leadership
        </p>
        <p className="tex-black text-[16px] amir">
          Enhance your career prospects by delving into Nutrition Leadership.
          This program is designed to broaden your knowledge and skills in
          nutrition, providing valuable insights into leadership within the
          field. Elevate your career trajectory with a focus on nutrition
          leadership.
        </p>
      </div>

      {isMobileScreen ? null: 
      <div className="px-2 sm:px-6 md:px-12 lg:px-32">
      <div className="flex gap-2 md:gap-5 lg:gap-16 flex-wrap py-10">
        {/* Add onClick event handlers to each p tag */}
        <p className={`font-bold text-black cursor-pointer hover:duration-200 ${selectedType === "Nutrition Leadership" ? 'duration-1000 border-b-2 border-b-primary' : ''}`} onClick={() => handleTypeClick("Nutrition Leadership")}>Nutrition Leadership</p>
        <p className={`font-bold text-black cursor-pointer hover:duration-200 ${selectedType === "Evidence and policy" ? 'duration-1000 border-b-2 border-b-primary' : ''}`} onClick={() => handleTypeClick("Evidence and policy")}>Evidence and Policy</p>
        <p className={`font-bold text-black cursor-pointer hover:duration-200 ${selectedType === "Communication" ? 'duration-1000 border-b-2 border-b-primary' : ''}`} onClick={() => handleTypeClick("Communication")}>Communication</p>
        <p className={`font-bold text-black cursor-pointer hover:duration-200 ${selectedType === "Advocacy" ? ' duration-1000 border-b-2 border-b-primary' : ''}`} onClick={() => handleTypeClick("Advocacy")}>Advocacy</p>
        <p className={`font-bold text-black cursor-pointer hover:duration-200 ${selectedType === "Nutrition Course" ? 'duration-1000 border-b-2 border-b-primary' : ''}`} onClick={() => handleTypeClick("Nutrition Course")}>Nutrition Course</p>
      </div>
    </div>}
      <div className="mx-2 sm:ml-6 md:ml-10 lg:ml-20">
        {/* Pass the selectedType state as props */}
        {isMobileScreen ? <VerticalCardTryings /> : <BoardCourses type={selectedType}/>}
      </div>
    </div>
  );
};

export default BroadSelection;
