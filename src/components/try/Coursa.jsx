import { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Coursa = () => {
  const [openDropdown, setOpenDropdown] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  // const [element, setElement] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://orginalenlndashboard.redshiftbusinessgroup.com/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCourses(data.data);
        setSelectedCourse(data.data[0]);
        setOpenDropdown(new Array(data.data.length).fill(false));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (course, index) => {
    setSelectedCourse(course);
    setSelectedCourseIndex(index);
    setSelectedAnswers({});
    setShowResult(false);
    setQuizResult(null);
    setSubmitted(false);
  };

  const handleAnswerChange = (questionIndex, choiceIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choiceIndex,
    });
  };

  const renderChoiceStyle = (questionIndex, choiceIndex) => {
    if (!submitted) return "";
    const selectedAnswerIndex = selectedAnswers[questionIndex];
    const question = selectedCourse.quiz_questions[questionIndex];
    const correctAnswerIndex = question.choices.indexOf(question.correct_answer);
    if (selectedAnswerIndex !== undefined && selectedAnswerIndex === choiceIndex) {
      return correctAnswerIndex === choiceIndex ? "bg-green-500" : "bg-red-500";
    }
    return correctAnswerIndex === choiceIndex ? "bg-green-500" : "";
  };

  const handleSubmitQuiz = () => {
    const questions = selectedCourse.quiz_questions;
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const selectedAnswerIndex = selectedAnswers[i];
      const correctAnswerIndex = question.choices.indexOf(question.correct_answer);
      if (selectedAnswerIndex !== undefined && selectedAnswerIndex === correctAnswerIndex) {
        correctAnswers++;
      }
    }
    const percentage = (correctAnswers / questions.length) * 100;
    setQuizResult(percentage);
    setShowResult(true);
    setSubmitted(true);
  };

  const handleToggleDropdown = (index) => {
    setOpenDropdown(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleNextCourse = () => {
    if (selectedCourseIndex < courses.length - 1) {
      const nextCourseIndex = selectedCourseIndex + 1;
      setSelectedCourse(courses[nextCourseIndex]);
      setSelectedCourseIndex(nextCourseIndex);
      setSelectedAnswers({});
      setShowResult(false);
      setQuizResult(null);
      setSubmitted(false);
    }
  };

  const handlePrevCourse = () => {
    if (selectedCourseIndex > 0) {
      const prevCourseIndex = selectedCourseIndex - 1;
      setSelectedCourse(courses[prevCourseIndex]);
      setSelectedCourseIndex(prevCourseIndex);
      setSelectedAnswers({});
      setShowResult(false);
      setQuizResult(null);
      setSubmitted(false);
    }
  };

  // const handleElement = (element) => {
  //   setElement(element);
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-32'>
      <div className="grid grid-cols-1 gap-6 bg-[white] py-6 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-6 lg:px-10">
        <div className="col-span-1 py-4 px-2">
          {courses.map((course, index) => (
            <div className='min-h-[100px] flex justify-center items-start flex-col' key={course.id}>
              <div className='flex gap-5 w-full justify-between items-center'>
                <p>{course.title}</p>
                {openDropdown[index] ? (
                  <FaCaretDown onClick={() => handleToggleDropdown(index)} />
                ) : (
                  <FaCaretUp onClick={() => handleToggleDropdown(index)} />
                )}
              </div>
              {openDropdown[index] && (
                <div className='flex flex-col gap-5'>
                  <div
                    key={course.id}
                    className={`flex cursor-pointer border-b-2 border-primary hover:bg-gray-200 px-2 flex-col justify-start py-4 items-start gap-3 ${selectedCourse.id === course.id ? "bg-gray-200" : ""}`}
                    onClick={() => handleCourseClick(course, index)}
                  >
                    <div className='flex justify-start items-start gap-2'>
                      <input type="checkbox" />
                      <p>{index + 1}.</p>
                      <p>{course.title}</p>
                    </div>
                    <p className='text-primary text-sm text-center'>${course.price}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {selectedCourse ? (
            <div className="p-4 border-l-2 border-primary">
              <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
              <p className='text-primary text-sm'><strong>Price:</strong> ${selectedCourse.price}</p>
              <p className="mt-2">{selectedCourse.description}</p>
              {selectedCourse.content_type === "video" && (
                <iframe
                  src={convertToEmbeddedURL(selectedCourse.video_url)}
                  title={selectedCourse.title}
                  frameBorder="0"
                  allowFullScreen
                  className="mt-10 h-[600.44px] w-full lg:max-w-full rounded-xl"
                ></iframe>
              )}
              {selectedCourse.content_type === "text" && (
                <div
                  className="mt-4 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: selectedCourse.text_content }}
                ></div>
              )}
              {selectedCourse.content_type === "quiz" && (
                <div>
                  {selectedCourse.quiz_questions.map((question, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-start justify-start px-2 text-black sm:px-4 md:px-8"
                    >
                      <h3 className="py-4 text-[18px] font-semibold text-gray-700">
                        {question.question}
                      </h3>
                      <div className="flex flex-col">
                        {question.choices.map((choice, cIdx) => (
                          <label
                            key={cIdx}
                            className={`mb-2 flex items-center px-2 text-[16px] font-medium text-gray-600 ${renderChoiceStyle(idx, cIdx)}`}
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
                    className="mt-4 w-full max-w-[200px] rounded border-2 border-green-500 bg-green-500 px-10 py-2 font-semibold text-white hover:bg-white hover:text-green-500"
                  >
                    Submit Answer
                  </button>
                  {showResult && (
                    <p
                      className={`mt-4 w-full max-w-[200px] rounded border-2 px-10 py-2 font-semibold ${quizResult >= 50 ? "bg-green-200 border-green-500 text-green-500" : "bg-red-200 border-red-500 text-red-500"}`}
                    >
                      Your result: {quizResult}%
                    </p>
                  )}
                </div>
              )}
              <div className="mt-10 flex justify-between">
                <button
                  onClick={handlePrevCourse}
                  className={`${
                    selectedCourseIndex === 0 ? "cursor-not-allowed opacity-50" : ""
                  } flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600`}
                  disabled={selectedCourseIndex === 0}
                >
                  <FaArrowLeft />
                  Previous
                </button>
                <button
                  onClick={handleNextCourse}
                  className={`${
                    selectedCourseIndex === courses.length - 1
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  } flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600`}
                  disabled={selectedCourseIndex === courses.length - 1}
                >
                  Next
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <p>Select a course to view its details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const convertToEmbeddedURL = (url) => {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

export default Coursa;
