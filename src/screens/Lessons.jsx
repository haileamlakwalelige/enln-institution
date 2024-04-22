import React from "react";
import LeftSideBar from "../components/Lesson/Left Side Bar";
import RightSideBar from "../components/Lesson/Right Side Bar";
import Lessonsoftheweek from "../components/Lesson/Lessonsoftheweek";

function Lessons() {
  return (
    <div className="overflow-hidden pt-10">
      <div className="flex w-full flex-col gap-5 p-2 sm:p-4 lg:flex-row md:gap-0 md:p-6 lg:m-3 ">
        <div className="lg:w-1/4">
          <LeftSideBar />
        </div>
        <div className="lg:w-3/4">
          <Lessonsoftheweek />
        </div>
        <div className="lg:w-1/4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default Lessons;
