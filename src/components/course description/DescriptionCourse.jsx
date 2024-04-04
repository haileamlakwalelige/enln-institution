import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const DescriptionCourse = () => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div className="min-h-[8vh] px-10 py-4 w-full mt-4">
      <div className="flex flex-col justify-center items-start">
        <p className="text-primary text-start text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold merb py-3">
          Description
        </p>
        <p
          className={`text-black font-normal text-[14px] amir text-justify ${
            showAll ? "line-clamp-none" : "line-clamp-4"
          }`}
        >
          Embark on a transformative journey of nutritional enlightenment with
          our Comprehensive Nutrition Mastery course. This course is
          meticulously crafted to empower you with a profound understanding of
          nutrition, providing you with the knowledge and skills to make
          informed choices for a healthier and more fulfilling life.
          <br />
          <br />
          <br />
          <span className="text-black font-semibold">Course Overview:</span>
          <br />
          <br />
          Unlock the secrets of nutrition, starting with the fundamental
          principles that govern a well-balanced diet. Dive deep into the
          intricacies of macronutrients and micronutrients, discovering their
          roles and impact on your overall well-being. Explore the significance
          of national dietary guidelines and recommended daily allowances,
          gaining insights into tailoring nutrition for various life stages.
          <br /><br/>
          Delve into the fascinating world of digestion and absorption,
          unraveling how your body processes food to extract essential
          nutrients. Learn to strike an optimal energy balance and manage weight
          effectively, acquiring practical strategies for achieving and
          maintaining a healthy body composition.
          <br /><br/>
          Discover the art of identifying dietary sources rich in nutrients and
          master the skill of crafting nutrient-dense meals. Unearth the
          profound connection between nutrition and disease, understanding how
          dietary choices play a pivotal role in both prevention and management.
          <br /><br/>
          For those with an interest in sports, unravel the intricacies of
          sports nutrition, uncovering the unique nutritional requirements for
          athletes and the key principles behind pre- and post-exercise
          nutrition.
          <br /><br/>
          Navigate the influence of behavioral and lifestyle factors on
          nutritional health, and embrace strategies for sustainable and
          positive dietary changes. Equip yourself with the tools to assess
          nutritional status and create personalized nutrition plans tailored to
          individual needs.
          <br /><br/>
          Stay current with the ever-evolving field of nutrition by exploring
          the latest trends and engaging in discussions on controversial topics.
          Our course concludes with a comprehensive recap of key learnings,
          leaving you with a solid foundation to implement transformative
          changes in your life and the lives of those around you.
          <br />
          <br />
          <br />
          <span className="font-semibold text-black">
            Why Choose This Course?
          </span>
          <br />
          <br />-{" "}
          <span className="font-semibold text-black">
            Comprehensive Curriculum:
          </span>{" "}
          A well-rounded curriculum covering fundamental principles to advanced
          topics in nutrition.
          <br />
          <br />-{" "}
          <span className="font-semibold text-black">
            Expert Instruction:
          </span>{" "}
          Learn from seasoned professionals and industry experts with a passion
          for nutritional education.
          <br />
          <br />-{" "}
          <span className="font-semibold text-black">
            Interactive Learning:
          </span>{" "}
          Engage in a variety of learning formats, including videos, audio
          content, texts, and interactive assessments.
          <br />
          <br />-{" "}
          <span className="font-semibold text-black">
            Practical Application:
          </span>{" "}
          Translate theoretical knowledge into practical skills through case
          studies, real-life scenarios, and hands-on activities.
          <br />
          <br />-{" "}
          <span className="font-semibold text-black">
            Ongoing Support:
          </span>{" "}
          Join a community of learners, participate in discussions, and access
          additional resources for continuous learning.
          <br />
          <br />
          Enroll now and embark on a life-changing journey towards nutritional
          mastery. Arm yourself with the knowledge to make informed decisions,
          adopt healthier habits, and inspire positive changes in the lives of
          those around you. Your path to optimal well-being starts here.
        </p>

        <div
          onClick={() => setShowAll(!showAll)}
          className="text-primary font-semibold mt-5"
        >
          {showAll ? (
            <div className="flex justify-start items-center gap-2">
              <button>Show less</button>
              <FaAngleUp size={25} className="mt-1" />
            </div>
          ) : (
            <div className="flex justify-start items-center gap-2">
              <button>Show more</button>
              <FaAngleDown size={25} className="mt-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCourse;
