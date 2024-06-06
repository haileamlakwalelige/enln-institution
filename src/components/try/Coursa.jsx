import { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Ask from '../Reusable/Ask';
import api from '../../api/api';
// import Ask from "../Reusable/Ask";


const Coursa = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [openDropdown, setOpenDropdown] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [courseId, setCourseId]=useState(1)

  useEffect(() => {
    const fetchCoursesAndChapters = async () => {
      try {
        const courseResponse = await api.get('/courses');
        if (!courseResponse.ok) {
          throw new Error('Failed to fetch courses data');
        }

        const chapterResponse = await api.get('/chapters');
        if (!chapterResponse.ok) {
          throw new Error('Failed to fetch chapters data');
        }

        const courseData = await courseResponse.json();
        const chapterData = await chapterResponse.json();

        setCourses(courseData.data);
        setChapters(chapterData.data);
        setSelectedCourse(courseData.data[0] || null);
        setOpenDropdown(new Array(courseData.data.length).fill(false));

        // Automatically select the first chapter of the first course
        const initialChapters = chapterData.data.filter(chapter => chapter.course_id === courseData.data[0]?.id);
        if (initialChapters.length > 0) {
          setSelectedChapter(initialChapters[0]);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCoursesAndChapters();
  }, []);

  // Handle course click to update selected course and chapters
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setSelectedAnswers({});
    setShowResult(false);
    setQuizResult(null);
    setSubmitted(false);

    // Select the first chapter of the selected course
    const courseChapters = chapters.filter(chapter => chapter.course_id === course.id);
    if (courseChapters.length > 0) {
      setSelectedChapter(courseChapters[0]);
    } else {
      setSelectedChapter(null); // Handle case where no chapters are found
    }
  };

  // Call the handleCourseClick function when the component is first rendered
  useEffect(() => {
    if (courses.length > 0) {
      handleCourseClick(courses[0], 0);
    }
  }, [courses]);

  // Handle user selecting an answer for a quiz question
  const handleAnswerChange = (questionIndex, choiceIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choiceIndex,
    });
  };

  // Render background style for selected quiz answer
  const renderChoiceStyle = (questionIndex, choiceIndex) => {
    if (!submitted) return '';
    const selectedAnswerIndex = selectedAnswers[questionIndex];
    const question = selectedCourse.quiz_questions[questionIndex];
    const correctAnswerIndex = question.choices.indexOf(question.correct_answer);
    if (selectedAnswerIndex !== undefined && selectedAnswerIndex === choiceIndex) {
      return correctAnswerIndex === choiceIndex ? 'bg-green-500' : 'bg-red-500';
    }
    return correctAnswerIndex === choiceIndex ? 'bg-green-500' : '';
  };

  // Handle quiz submission to calculate and display result
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

  // Toggle dropdown state for chapters in each course
  const handleToggleDropdown = index => {
    setOpenDropdown(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Handle user clicking on a chapter to view details
  const handleChapterClick = chapter => {
    setSelectedChapter(chapter);
  };

  // Handle moving to the next chapter within the selected course
  const handleNextChapter = () => {
    if (!selectedCourse || !selectedChapter) return;
  
    const currentChapterIndex = chapters.findIndex(chapter => chapter.id === selectedChapter.id);
    if (currentChapterIndex !== -1 && currentChapterIndex < chapters.length - 1) {
      const nextChapter = chapters[currentChapterIndex + 1];
      setSelectedChapter(nextChapter);
    }
  };
  
  // Handle moving to the previous chapter within the selected course
  const handlePrevChapter = () => {
    if (!selectedCourse || !selectedChapter) return;
  
    const currentChapterIndex = chapters.findIndex(chapter => chapter.id === selectedChapter.id);
    if (currentChapterIndex !== -1 && currentChapterIndex > 0) {
      const prevChapter = chapters[currentChapterIndex - 1];
      setSelectedChapter(prevChapter);
    }
  };

  // Convert YouTube video URL to embedded format
  const convertToEmbeddedURL = inputUrl => {
    const parts = inputUrl.split('/');
    const videoId = parts[parts.length - 1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClickId = (courseId) => {
    setCourseId(courseId);
  };
  

  return (
    <div className='mt-32'>
      <div className="grid grid-cols-1 gap-6 text-black bg-white py-6 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-6 lg:px-10">
        <div className="col-span-1 py-4 px-2 md:border-r-[1px] md:border-gray-400">
          {courses.map((course, index) => (
            <div className='min-h-[100px] border-t-[1px] border-gray-300 flex justify-center items-start flex-col' key={course.id} >
              <div className='flex gap-5 w-full justify-between items-center'>
                <div onClick={() => handleClickId(course.id)} className='cursor-pointer'>
                  <h3 className="text-xl font-bold">Course {index + 1} : </h3>
                  <h3 className="text-base line-clamp-2 font-light">{course.title}</h3>
                </div>
                {openDropdown[index] ? (
                  <FaCaretDown onClick={() => handleToggleDropdown(index)} className='cursor-pointer'/>
                ) : (
                  <FaCaretUp onClick={() => handleToggleDropdown(index)} className='cursor-pointer'/>
                )}
              </div>
              {openDropdown[index] && (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3 w-full">
                    {chapters.filter(chapter => chapter.course_id === course.id).map(chapter => (
                      <div
                        key={chapter.id}
                        className={`border-b-2 border-gray-200 py-2 cursor-pointer w-full min-w-[200px] lg:min-w-[250px] px-2 ${selectedChapter?.id === chapter.id ? 'bg-gray-200' : ''}`}
                        onClick={() => handleChapterClick(chapter)}
                      >
                        <h4>{chapter.title}</h4>
                        <p>{chapter.duration} min</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {selectedChapter ? (
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">{selectedChapter.title}</h2>
              {/* <h2>{selectedChapter.id}</h2> */}
              {selectedChapter.video !== null && (
                <div>
                  <iframe
                  src={convertToEmbeddedURL(selectedChapter.video)}
                  title={selectedChapter.title}
                  style={{ border: 0 }}
                  allowFullScreen
                  className="mt-10 h-[600.44px] w-full lg:max-w-full rounded-xl"
                ></iframe>
                {/* <p>{selectedChapter.description}</p> */}
                <div
                  className="my-10 text-slate-800"
                  dangerouslySetInnerHTML={{ __html: selectedChapter.description }}
                ></div>
                </div>
              )}
              {selectedChapter.pdf !== null && (
                <div className="mt-4 text-slate-800">
                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={selectedChapter.pdf} plugins={[defaultLayoutPluginInstance]}/>
              </Worker>
              <div
                  className="my-10 text-slate-800"
                  dangerouslySetInnerHTML={{ __html: selectedChapter.description }}
                ></div>
                </div>
              )}

              {selectedChapter.text_content && (
                <div
                  className="mt-4 text-slate-800"
                  dangerouslySetInnerHTML={{ __html: selectedChapter.text_content }}
                ></div>
              )}

              {selectedCourse.content_type === 'quiz' && (
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
                            className={`mb-2 flex items-center px-2 text-[16px] font-medium text-slate-800 ${renderChoiceStyle(
                              idx,
                              cIdx
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
                        <div
                  className="my-10 text-slate-800"
                  dangerouslySetInnerHTML={{ __html: selectedChapter.description }}
                ></div>
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
                      className={`mt-4 w-full max-w-[200px] rounded border-2 px-10 py-2 font-semibold ${
                        quizResult >= 50
                          ? 'bg-green-200 border-green-500 text-green-500'
                          : 'bg-red-200 border-red-500 text-red-500'
                      }`}
                    >
                      Your result: {quizResult}%
                    </p>
                  )}
                  <div>
                    <p>{selectedChapter.description}</p>
                  </div>
                </div>
              )}

<div className="mt-10 flex justify-between">
  <button
    onClick={handlePrevChapter}
    className={`${
      !selectedChapter || selectedChapter.id === chapters[0]?.id ? 'cursor-not-allowed opacity-50' : ''
    } flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600`}
    disabled={!selectedChapter || selectedChapter.id === chapters[0]?.id}
  >
    <FaArrowLeft />
    Previous
  </button>
  <button
    onClick={handleNextChapter}
    className={`${
      !selectedChapter || selectedChapter.id === chapters[chapters.length - 1]?.id
        ? 'cursor-not-allowed opacity-50'
        : ''
    } flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600`}
    disabled={!selectedChapter || selectedChapter.id === chapters[chapters.length - 1]?.id}
  >
    Next
    <FaArrowRight />
  </button>
</div>
<div>
  <Ask id={courseId}/>
</div>
            </div>
          ) : (
            <p>Select a course and chapter to view its details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coursa;
