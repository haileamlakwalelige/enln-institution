import { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import api from '../../api/api';

const Coursa = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [openDropdown, setOpenDropdown] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    const fetchCoursesAndChapters = async () => {
      try {
        const courseResponse = await api.get('/courses');
        const chapterResponse = await api.get('/chapters');

        const courseData = courseResponse.data; // Adjust according to how `api` handles response
        const chapterData = chapterResponse.data; // Adjust according to how `api` handles response

        setCourses(courseData);
        setChapters(chapterData);
        setSelectedCourse(courseData[0] || null);
        setOpenDropdown(new Array(courseData.length).fill(false));

        const initialChapters = chapterData.filter(chapter => chapter.course_id === courseData[0]?.id);
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

  useEffect(() => {
    if (courses.length > 0) {
      handleCourseClick(courses[0]);
    }
  }, [courses]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);

    const courseChapters = chapters.filter(chapter => chapter.course_id === course.id);
    if (courseChapters.length > 0) {
      setSelectedChapter(courseChapters[0]);
    } else {
      setSelectedChapter(null);
    }
  };

  const handleToggleDropdown = index => {
    setOpenDropdown(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleChapterClick = chapter => {
    setSelectedChapter(chapter);
  };

  const handleNextChapter = () => {
    if (!selectedCourse || !selectedChapter) return;

    const currentChapterIndex = chapters.findIndex(chapter => chapter.id === selectedChapter.id);
    if (currentChapterIndex !== -1 && currentChapterIndex < chapters.length - 1) {
      const nextChapter = chapters[currentChapterIndex + 1];
      setSelectedChapter(nextChapter);
    }
  };

  const handlePrevChapter = () => {
    if (!selectedCourse || !selectedChapter) return;

    const currentChapterIndex = chapters.findIndex(chapter => chapter.id === selectedChapter.id);
    if (currentChapterIndex !== -1 && currentChapterIndex > 0) {
      const prevChapter = chapters[currentChapterIndex - 1];
      setSelectedChapter(prevChapter);
    }
  };

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

  return (
    <div className='mt-32'>
      <div className="grid grid-cols-1 gap-6 text-black bg-white py-6 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-6 lg:px-10">
        <div className="col-span-1 py-4 px-2 md:border-r-[1px] md:border-gray-400">
          {courses.map((course, index) => (
            <div className='min-h-[100px] border-t-[1px] border-gray-300 flex justify-center items-start flex-col' key={course.id} >
              <div className='flex gap-5 w-full justify-between items-center'>
                <div className='cursor-pointer'>
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
              {selectedChapter.video !== null && (
                <div>
                  <iframe
                    src={convertToEmbeddedURL(selectedChapter.video)}
                    title={selectedChapter.title}
                    style={{ border: 0 }}
                    allowFullScreen
                    className="mt-10 h-[600.44px] w-full lg:max-w-full rounded-xl"
                  ></iframe>
                  <div className="my-10 text-slate-800" dangerouslySetInnerHTML={{ __html: selectedChapter.description }}></div>
                </div>
              )}
              {selectedChapter.pdf !== null && (
                <div className="mt-4 text-slate-800">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={selectedChapter.pdf} plugins={[defaultLayoutPluginInstance]} />
                  </Worker>
                  <div className="my-10 text-slate-800" dangerouslySetInnerHTML={{ __html: selectedChapter.description }}></div>
                </div>
              )}

              {selectedChapter.text_content && (
                <div className="mt-4 text-slate-800" dangerouslySetInnerHTML={{ __html: selectedChapter.text_content }}></div>
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
