import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import ScheduleImage from "../../assets/Schedule.svg";
import UpcomingEventsImage from "../../assets/upcomingevent.svg"
function RightSideBar() {
  const eventData = [
    { date: "01", month: "Jan", event: "New Year's Day" },
    // Add more events as needed
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setIsFlipped(!isFlipped);
    controls.start({ rotateY: isFlipped ? 0 : 360 });
  };

  return (
    <>
      <div className="bg-white lg:block lg:w-full">
        <div className="flex w-full flex-col items-center space-y-3">
          <img src={ScheduleImage} alt="Schedule Pic" className="w-full" />
          <h2 className="subheading">Schedule</h2>
          <div className="flex items-center space-x-3">
            <MdLocationOn className="h-5 w-5" />
            <span>Start Date: 18 Jan 2024</span>
          </div>
          <div className="flex items-center space-x-3">
            <PiCertificateLight className="h-5 w-5" />
            <span>End Date: 18 Mar 2024</span>
          </div>
        </div>
        <div className="my-3 flex w-full flex-col items-center space-y-5">
          <h2 className="subheading">Upcoming Events</h2>
          <div className="group relative h-[60] w-9/12 cursor-pointer items-center justify-center overflow-hidden rounded shadow-md transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-66 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={UpcomingEventsImage}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  March
                </h1>
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  31
                </h1>
              </div>

              <p className="text-md mb-3 text-justify italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className="font-com rounded-full bg-neutral-900 px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60">
                Any question?
              </button>
            </div>
          </div>
          <hr className="my-4 w-3/4 border-t border-gray-300" />

          <div className="flex w-[65%] flex-row items-center justify-center shadow-sm shadow-primary">
            <div className="flex w-1/4 flex-col space-x-2 border-r border-primary text-center font-bold">
              <span>10</span>
              <span>Dec</span>
            </div>
            <div className="w-3/4 p-3">
              <div className="flex items-center space-x-2">
                <FiClock className="text-primary" />
                <span className="">8:00 PM EAT</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-primary" />
                <span className="">Online</span>
              </div>
            </div>
          </div>
          <div className="flex w-[65%] flex-row items-center justify-center shadow-sm shadow-primary">
            <div className="flex w-1/4 flex-col space-x-2 border-r border-primary text-center font-bold">
              <span>10</span>
              <span>Dec</span>
            </div>
            <div className="w-3/4 p-3">
              <div className="flex items-center space-x-2">
                <FiClock className="text-primary" />
                <span className="">8:00 PM EAT</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-primary" />
                <span className="">Online</span>
              </div>
            </div>
          </div>
          <div className="flex w-[65%] flex-row items-center justify-center shadow-sm shadow-primary">
            <div className="flex w-1/4 flex-col space-x-2 border-r border-primary text-center font-bold">
              <span>10</span>
              <span>Dec</span>
            </div>
            <div className="w-3/4 p-3">
              <div className="flex items-center space-x-2">
                <FiClock className="text-primary" />
                <span className="">8:00 PM EAT</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-primary" />
                <span className="">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
