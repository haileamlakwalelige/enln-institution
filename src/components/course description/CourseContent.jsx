import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import film from "../../assets/flm.png";
import open from "../../assets/open.png";
import note from "../../assets/note.png";

const CourseContent = () => {
  const [sections, setSections] = useState([
    {
      title: "Nutrition for Beginners",
      isOpen: true,
      items: [
        {
          icon: film,
          title: "Introduction to Nutrition",
          subtitle: "Preview",
          duration: "09:23",
        },
        {
          icon: open,
          title: "Introduction to Nutrition",
          subtitle: "Preview",
          duration: "09:23",
        },
        {
          icon: note,
          title: "Introduction to Nutrition",
          duration: "09:23",
        },
      ],
    },
    {
      title: "Nutrition for Beginners",
      isOpen: false,
      items: [
        {
          icon: film,
          title: "Introduction to Nutrition",
          subtitle: "Preview",
          duration: "09:23",
        },
        {
          icon: open,
          title: "Introduction to Nutrition",
          subtitle: "Preview",
          duration: "09:23",
        },
        {
          icon: note,
          title: "Introduction to Nutrition",
          duration: "09:23",
        },
      ],
    },
    {
      title: "Nutrition for Beginners",
      isOpen: false,
      items: [
        {
          icon: film,
          title: "Introduction to Nutrition",
          subtitle: "Preview",
          duration: "09:23",
        },
        {
          icon: open,
          title: "Introduction to Nutrition",
          subtitle: "Preview",
          duration: "09:23",
        },
        {
          icon: note,
          title: "Introduction to Nutrition",
          duration: "09:23",
        },
      ],
    },
    // Add more sections as needed
  ]);

  const toggleSection = (index) => {
    setSections((prevSections) =>
      prevSections.map((section, i) => {
        if (i === index) {
          return { ...section, isOpen: !section.isOpen };
        }
        return section;
      })
    );
  };

  return (
    <div className="min-h-[8vh] px-10 py-4 w-full mt-4 amir">
      <div className="flex">
        <p className="text-primary text-start text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold merb py-3">
          Course Content
        </p>
      </div>
      <div className="border-gray-700 rounded border-[1px]">
        <div className="flex flex-col justify-between items-between">
          {sections.map((section, index) => (
            <div key={index}>
              <div
                className="flex border-gray-700 border-[1px]  justify-between items-center px-2 sm:px-4 md:px-6"
                onClick={() => toggleSection(index)}
              >
                <div className="flex gap-4 justify-center items-center py-2 text">
                  {section.isOpen ? <FaAngleDown /> : <FaAngleUp />}
                  <p className="text-black text-[16px]">{section.title}</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-black text-[14px] font-normal">
                    {section.items.length} lectures
                  </p>
                  <p className="text-black text-[14px] font-normal">
                    {/* Calculate total duration for this section */}
                    {section.items.reduce(
                      (total, item) =>
                        total + (item.duration ? parseInt(item.duration) : 0),
                      0
                    )}
                    hr
                  </p>
                </div>
              </div>
              {section.isOpen && (
                <div className="px-2 sm:px-4 md:px-6 lg:px-10 py-3">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center gap-6 py-2"
                    >
                      <div className="flex justify-center items-center gap-5">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-[26px] w-[30px]"
                        />
                        <p className="text-blue-500 underline">{item.title}</p>
                      </div>
                      <div className="flex justify-center items-center gap-5">
                        <p className="text-blue-500 underline">
                          {item.subtitle}
                        </p>
                        <p>{item.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
