import { useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import api from "../api/api";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllCourse = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [openDropdown, setOpenDropdown] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chapters, setChapters] = useState([]);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [payments, setPayment] = useState([]);
    const [single, setSingle] = useState({});
    const [userId, setUserId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCoursesAndChapters = async () => {
            try {
                const courseResponse = await api.get('/courses');
                const paymentResponse = await api.get('/payments');
                const singleResponse = await api.get('/courses/all-course');
                const chapterResponse = await api.get('/chapters');

                const courseData = courseResponse.data.data; // Adjust according to how `api` handles response
                const chapterData = chapterResponse.data.data; 
                const paymentData = paymentResponse.data.data; 
                const singleData = singleResponse.data.data; 

                setCourses(courseData);
                setChapters(chapterData);
                setPayment(paymentData);
                setSingle(singleData);

                console.log("single data", singleData);

                // Select the first course by default
                setSelectedCourse(courseData[0] || null);
                setOpenDropdown(new Array(courseData.length).fill(false).map((_, index) => index === 0)); // Set the first item to true for openDropdown

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCoursesAndChapters();
    }, []);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
          const userData = JSON.parse(user);
          setUserId(userData[0].id);
        }
      }, []);

    useEffect(() => {
        if (userId && single.id && payments) {
            const pay = payments.find(
                (pay) => pay.course_id === single.id && pay.user_id === userId
            );

            if (Number(single.price) === 0) {
                toast.success(`Welcome to ${single.title} Course`, { toastId: 'free-course' });
            } else if (pay && pay.status === "completed") {
                toast.success(`Welcome to ${single.title} Course`, { toastId: 'paid-course' });
            } else {
                toast.warn("Please Buy Course First", { toastId: 'buy-course' });
                navigate(`/course/${single.slug}`);
            }
        }
    }, [userId, single.id, payments, navigate]);

    useEffect(() => {
        if (selectedCourse) {
            const filteredChapters = chapters.filter(chapter => chapter.course_id === selectedCourse.id);
            console.log("Filtered Chapters:", filteredChapters);
            // Select the first chapter for the selected course by default
            if (filteredChapters.length > 0) {
                setSelectedChapter(filteredChapters[0]);
            }
        }
    }, [selectedCourse, chapters]);

    const handleCourse = (courseId) => () => {
        // Update selected course based on courseId
        const course = courses.find(course => course.id === courseId);
        setSelectedCourse(course);

        // Fetch chapters for the selected course and set the first chapter as selectedChapter
        const filteredChapters = chapters.filter(chapter => chapter.course_id === courseId);
        if (filteredChapters.length > 0) {
            setSelectedChapter(filteredChapters[0]);
        }
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const convertToEmbeddedURL = (inputUrl) => {
        const parts = inputUrl.split('/');
        const videoId = parts[parts.length - 1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const handlePrevChapter = () => {
        if (!selectedChapter || !selectedCourse) return;

        const filteredChapters = chapters.filter(chapter => chapter.course_id === selectedCourse.id);
        const currentIndex = filteredChapters.findIndex(chapter => chapter.id === selectedChapter.id);
        if (currentIndex > 0) {
            const prevChapter = filteredChapters[currentIndex - 1];
            setSelectedChapter(prevChapter);
        }
    };

    const handleNextChapter = () => {
        if (!selectedChapter || !selectedCourse) return;

        const filteredChapters = chapters.filter(chapter => chapter.course_id === selectedCourse.id);
        const currentIndex = filteredChapters.findIndex(chapter => chapter.id === selectedChapter.id);
        if (currentIndex < filteredChapters.length - 1) {
            const nextChapter = filteredChapters[currentIndex + 1];
            setSelectedChapter(nextChapter);
        }
    };

    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min-h-screen pt-10 flex">
            <div className="flex flex-wrap gap-0 lg:flex-nowrap">
                <div className="w-full md:w-1/2 lg:w-1/4 md:border-r-[1px] border-t-[1px] md:border-gray-300 max-w-[400px] min-w-[250px] lg:min-w-[300px]">
                    {courses.map((course, index) => (
                        <div key={course.id}>
                            <div onClick={handleCourse(course.id)} className="cursor-pointer flex items-center justify-between px-4 py-2 my-6 rounded border-b-[1px] border-gray-300 mb-2">
                                <span className="mr-2">{`${index + 1}:`}</span>
                                <span className="line-clamp-1">{course.title}</span>
                                {openDropdown[index] ? (
                                    <FaCaretUp onClick={() => toggleDropdown(index)} className="ml-2 cursor-pointer" />
                                ) : (
                                    <FaCaretDown onClick={() => toggleDropdown(index)} className="ml-2 cursor-pointer" />
                                )}
                            </div>
                            {openDropdown[index] && (
                                <div className="ml-4 mt-2">
                                    <ul>
                                        {chapters
                                            .filter(chapter => chapter.course_id === course.id)
                                            .map((chapter, idx) => (
                                                <li className="cursor-pointer" key={chapter.id} onClick={() => handleChapterClick(chapter)}>
                                                    {`Chapter ${idx + 1}: ${chapter.title}`}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 lg:w-3/4">
                    {selectedChapter ? (
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-4"><span className="font-light  pr-2">Title:</span> {selectedChapter.title}</h2>
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
                        <p className="p-4">Select a course and chapter to view its details.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllCourse;
