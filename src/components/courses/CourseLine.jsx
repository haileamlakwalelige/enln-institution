import { useState, useEffect } from "react";
import blog from '../../data/data.json';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const convertToEmbeddedURL = (inputUrl) => {
  const parts = inputUrl.split("/");
  const videoId = parts[parts.length - 1];
  return `https://www.youtube.com/embed/${videoId}`;
};

const CourseLine = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [element, setElement] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [submitted, setSubmitted] = useState(false); // Flag to indicate if quiz is submitted

  useEffect(() => {
    // Initialize selectedAnswers state with an empty object
    setSelectedAnswers({});
    setShowResult(false);
    setQuizResult(null);
    setSubmitted(false); // Reset submitted flag when item changes
  }, [selectedItemIndex]);

  const handleAnswerChange = (questionIndex, choiceIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choiceIndex,
    });
  };

  const renderChoiceStyle = (questionIndex, choiceIndex) => {
    if (!submitted) return ""; // Don't apply styles if quiz is not submitted
    const selectedAnswerIndex = selectedAnswers[questionIndex];
    const question = blog[selectedItemIndex].quiz_questions[questionIndex];
    const correctAnswerIndex = question.choices.indexOf(
      question.correct_answer,
    );
    if (
      selectedAnswerIndex !== undefined &&
      selectedAnswerIndex === choiceIndex
    ) {
      return correctAnswerIndex === choiceIndex ? "bg-green-500" : "bg-red-500";
    }
    return correctAnswerIndex === choiceIndex ? "bg-green-500" : "";
  };

  const handleSubmitQuiz = () => {
    // Calculate the quiz result
    const questions = blog[selectedItemIndex].quiz_questions;
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const selectedAnswerIndex = selectedAnswers[i];
      const correctAnswerIndex = question.choices.indexOf(
        question.correct_answer,
      );
      if (
        selectedAnswerIndex !== undefined &&
        selectedAnswerIndex === correctAnswerIndex
      ) {
        correctAnswers++;
      }
    }

    // Calculate percentage
    const percentage = (correctAnswers / questions.length) * 100;

    // Set the quiz result
    setQuizResult(percentage);
    // Show the result
    setShowResult(true);
    // Set submitted flag to true
    setSubmitted(true);
  };

  const handleElement = (element) => {
    setElement(element);
  };

  const handleNextItem = () => {
    if (selectedItemIndex < blog.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };

  const handlePrevItem = () => {
    if (selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 bg-[#B3CBD0] py-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-1 min-h-screen border-2 border-gray-100 bg-white py-5 shadow-xl">
        <p className="merb mb-5 pt-2 text-center text-[20px]">
          Course Progress
        </p>
        <div className="flex items-center justify-between border-b-2 border-gray-300 px-3 pb-5 lg:px-6">
          <p className="amir text-[18px] text-[#445D6E]">Videos Watched</p>
          <p className="font-serif font-semibold">0/12</p>
        </div>
        {blog.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer justify-center px-2 pt-8 text-black md:px-6 ${
              selectedItemIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedItemIndex(index)}
          >
            <div className="flex items-start justify-start gap-3">
              <img
                src={item.icon}
                alt={item.title}
                className="h-[25px] w-[25px] rounded-xl"
              />
              <div>
                <h1 className="amir amir text-[17px]">{item.title}</h1>
                <p className="amir mt-1 text-[16px] text-gray-500">
                  {item.min}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 min-h-screen rounded border-2 border-gray-100 bg-white p-5 text-black shadow-xl lg:col-span-3">
        <p className="amir mt-4 font-semibold text-gray-700">
          Home &gt; Nutrition Leadership &gt; Introduction
        </p>
        {blog[selectedItemIndex] && (
          <div>
            <p className="py-5 text-[20px] font-semibold text-gray-800 md:text-[22px] lg:text-[24px] ">
              {selectedItemIndex + 1}- {blog[selectedItemIndex].title}
            </p>
            <p className="pop text-[16px] font-medium text-[#445D6E]">
              {blog[selectedItemIndex].description}
            </p>
            {blog[selectedItemIndex].content_type === "video" && (
              <iframe
                src={convertToEmbeddedURL(blog[selectedItemIndex].video_url)}
                title={blog[selectedItemIndex].title}
                frameBorder="0"
                allowFullScreen
                className="mt-10 h-[600.44px] w-full lg:max-w-full"
              ></iframe>
            )}
            {blog[selectedItemIndex].content_type === "text" && (
              <div
                className="amir text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: blog[selectedItemIndex].text_content,
                }}
              ></div>
            )}
            {blog[selectedItemIndex].content_type === "quiz" && (
              <div>
                {blog[selectedItemIndex].quiz_questions.map((question, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start justify-start px-2 text-black sm:px-4 md:px-8"
                  >
                    <h3 className="amir py-4 text-[18px] font-semibold text-gray-700">
                      {question.question}
                    </h3>
                    <div className="flex flex-col">
                      {question.choices.map((choice, cIdx) => (
                        <label
                          key={cIdx}
                          className={`mb-2 flex items-center px-2 text-[16px] font-medium text-gray-600 ${renderChoiceStyle(
                            idx,
                            cIdx,
                          )}`}
                        >
                          <input
                            type="radio"
                            value={cIdx}
                            checked={selectedAnswers[idx] === cIdx}
                            onChange={() => handleAnswerChange(idx, cIdx)}
                            className="mr-2"
                          />
                          <span>
                            {String.fromCharCode(65 + cIdx)}. {choice}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleSubmitQuiz}
                  className="mt-4 w-full max-w-[200px] rounded border-2 border-green-500 bg-green-500 px-10  py-2 font-semibold  text-white hover:bg-white hover:text-green-500"
                >
                  Submit Answer
                </button>
                {showResult && (
                  <p
                    className={`mt-4 w-full max-w-[200px] rounded border-2 border-green-500 px-10 py-2 font-semibold text-green-500 ${
                      quizResult >= 50 ? "bg-green-200" : "bg-red-200"
                    }`}
                  >
                    Your result: {quizResult}%
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        <div>
          <div className="my-10 w-screen bg-[#B3CBD0] md:w-full">
            <div className="mx-0 my-5 flex w-full flex-col flex-wrap items-center justify-between gap-3 bg-white px-2 py-3 pt-8 sm:px-4 md:flex-row md:px-8 lg:gap-32">
              {selectedItemIndex > 0 && (
                <button
                  onClick={handlePrevItem}
                  className="flex items-center  justify-start rounded-xl bg-white px-16 py-2 font-semibold text-gray-600"
                >
                  <FaArrowLeft className="mr-3 text-slate-800" size={30} />
                  <div className="flex flex-col items-start justify-start">
                    <p className="amir font-normal">
                      {" "}
                      Lesson {selectedItemIndex}
                    </p>
                    <p className="amir items-start justify-start text-lg">
                      {blog[selectedItemIndex - 1].title}
                    </p>
                  </div>
                </button>
              )}
              {selectedItemIndex < blog.length - 1 && (
                <button
                  onClick={handleNextItem}
                  className="flex items-center  justify-end rounded-xl bg-white px-16 py-2 font-semibold text-gray-600"
                >
                  <div className="flex flex-col items-end justify-end">
                    <p className="amir font-normal">
                      Lesson {selectedItemIndex + 2}
                    </p>
                    <p className="amir text-lg">
                      {blog[selectedItemIndex + 1].title}
                    </p>
                  </div>
                  <FaArrowRight className="ml-3 text-slate-800" size={30} />
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-5 border-b-[1px] border-t-[1px] border-gray-300 px-2 py-3 sm:px-4 md:flex-row md:px-10 lg:justify-between lg:gap-2 lg:px-20">
              <p
                onClick={() => handleElement(1)}
                className={
                  element === 1
                    ? "merb cursor-pointer  border-b-2 border-gray-500 px-3 text-2xl font-bold sm:block"
                    : "amir cursor-pointer  text-xl font-semibold sm:block"
                }
              >
                Description
              </p>
              <p
                onClick={() => handleElement(2)}
                className={
                  element === 2
                    ? "merb cursor-pointer  border-b-2 border-gray-500 px-3 text-2xl font-bold sm:block"
                    : "amir cursor-pointer  text-xl font-semibold sm:block"
                }
              >
                Q&A
              </p>
              <p
                onClick={() => handleElement(3)}
                className={
                  element === 3
                    ? "merb cursor-pointer  border-b-2 border-gray-500 px-3 text-2xl font-bold sm:block"
                    : "amir cursor-pointer  text-xl font-semibold sm:block"
                }
              >
                Comments
              </p>
              <p
                onClick={() => handleElement(4)}
                className={
                  element === 4
                    ? "merb cursor-pointer  border-b-2 border-gray-500 px-3 text-2xl font-bold sm:block"
                    : "amir cursor-pointer  text-xl font-semibold sm:block"
                }
              >
                Resource
              </p>
            </div>
            <div>
              <div style={{ display: element === 1 ? "block" : "none" }}>
                <div className="flex flex-col items-center justify-center ">
                  <p className="amir py-2 pt-10 text-center text-2xl font-bold">
                    Elevate Your Impact: Unleash Your Inner Nutrition Leader
                  </p>
                  <br />
                  <p className="amir px-2 text-[16px] font-medium text-gray-600 md:px-6 ">
                    Your description content
                  </p>
                </div>
              </div>
              <div style={{ display: element === 2 ? "block" : "none" }}>
                <div className="flex flex-col items-center justify-center ">
                  <p className="amir px-2 text-[16px] font-medium text-gray-600 md:px-6 ">
                    Q&A Detail
                  </p>
                </div>
              </div>
              <div style={{ display: element === 3 ? "block" : "none" }}>
                <div className="flex flex-col items-center justify-center ">
                  <p className="amir px-2 text-[16px] font-medium text-gray-600 md:px-6 ">
                    Comments Detail
                  </p>
                </div>
              </div>
              <div style={{ display: element === 4 ? "block" : "none" }}>
                <div className="flex flex-col items-center justify-center ">
                  <p className="amir px-2 text-[16px] font-medium text-gray-600 md:px-6 ">
                    Resource Detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLine;
