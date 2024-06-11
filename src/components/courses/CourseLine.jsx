import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Ask from "../Reusable/Ask";
import api from "../../api/api";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Quiz from "../Reusable/Quiz";
import note from "../../assets/note.png";
import vid from "../../assets/vid.png";
import open from "../../assets/open.png";
import { MdQuiz } from "react-icons/md";

const convertToEmbeddedURL = (inputUrl) => {
  const parts = inputUrl.split("/");
  const videoId = parts[parts.length - 1];
  return `https://www.youtube.com/embed/${videoId}`;
};

const CourseLine = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { slug } = useParams();
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [single, setSingle] = useState({});
  const [userId, setUserId] = useState(null);
  const [quiz, setQuiz] = useState(false);

  const navigate = useNavigate();

  const {
    data: course,
    isLoading: isLoadingCourse,
    isError: isErrorCourse,
    error: errorCourse,
  } = useQuery(["course", slug], async () => {
    const response = await api.get(`/courses/${slug}`);
    return response.data.data;
  });

  const {
    data: chapters,
    isLoading: isLoadingChapter,
    isError: isErrorChapter,
    error: errorChapter,
  } = useQuery(["chapters"], async () => {
    const response = await api.get("/chapters");
    return response.data.data;
  });

  const {
    data: payments,
    isLoading: isLoadingPayment,
    isError: isErrorPayment,
    error: errorPayment,
  } = useQuery(["payments"], async () => {
    const response = await api.get("/payments");
    return response.data.data;
  });

  useEffect(() => {
    if (course) {
      setSingle(course);
    }
  }, [course]);

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

      if (Number(single.price) == 0) {
        toast.success(`Welcome to ${single.title} Course`);
      } else if (pay && pay.status === "completed") {
        toast.success(`Welcome to ${single.title} Course`);
      } else {
        toast.warn("Please Buy Course First");
        navigate(`/course/${single.slug}`);
      }
    }
  }, [userId, single, payments, navigate]);

  if (isLoadingCourse || isLoadingChapter || isLoadingPayment) {
    return <div>Loading...</div>;
  }

  if (isErrorCourse || isErrorChapter || isErrorPayment) {
    return (
      <div>
        Error:{" "}
        {errorCourse?.message || errorChapter?.message || errorPayment?.message}
      </div>
    );
  }

  const handleNextItem = () => {
    if (selectedItemIndex < chapters.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };

  const handlePrevItem = () => {
    if (selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 bg-[#B3CBD0] py-6 md:grid-cols-2 lg:grid-cols-4 overflow-x-hidden">
      <div className="col-span-1 min-h-screen border-2 border-gray-100 bg-white py-5 shadow-xl">
        <p className="merb mb-5 pt-2 text-center text-[20px]">
          Course Progress
        </p>
        <div className="flex items-center justify-between border-b-2 border-gray-300 px-3 pb-5 lg:px-6">
          <p className="amir text-[18px] text-[#445D6E]">Videos Watched</p>
          <p className="font-serif font-semibold">{selectedItemIndex + 1}/{chapters.length}</p>
        </div>
        {chapters.map((item, index) => (
          <div onClickCapture={()=>setQuiz(false)}
            key={index}
            className={`cursor-pointer justify-center px-2 pt-8 flex-col text-black md:px-6 ${
              selectedItemIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedItemIndex(index)}
          >
            <div className="flex items-start justify-start gap-3">
              {item.video ? (
                <img src={vid} alt="" className="h-[25px] w-[25px]" />
              ) : item.pdf ? (
                <img src={note} alt="" className="h-[25px] w-[25px] " />
              ) : (
                <img src={open} alt="" className="h-[25px] w-[25px] " />
              )}
              <div>
                <h1 className="amir text-[17px]">{item.title}</h1>
                <p className="amir mt-1 text-[16px] text-gray-500">
                  {item.min}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div
          onClick={() => setQuiz(!quiz)}
          className=" flex items-center gap-3 font-semibold text-primary px-2 sm:px-4 md:px-6 py-3  border-primary border-t-[1px] cursor-pointer hover:bg-green-500 hover:text-white hover:text-center duration-200 hover:justify-center"
        >
          <MdQuiz size={20} />
          <p>Quiz time</p>
        </div>
      </div>
      <div className="col-span-1 min-h-screen rounded border-2 border-gray-100 bg-white p-5 text-black shadow-xl lg:col-span-3">
        <div className="amir flex gap-2 mt-4 font-semibold text-gray-700">
          <Link to="/course">Home</Link> &gt; {quiz ? (<p>Quiz Time</p>):(<p>{single.title}</p>)}
        </div>

        <div>
          {quiz ? (
            <Quiz slug={slug} />
          ) : (
            <div>
              {chapters[selectedItemIndex] && (
                <div>
                  <p className="py-5 text-[20px] font-semibold text-gray-800 md:text-[22px] lg:text-[24px] ">
                    {selectedItemIndex + 1}- {chapters[selectedItemIndex].title}
                  </p>
                  <p className="pop text-[16px] font-medium text-[#445D6E]">
                    {chapters[selectedItemIndex].description}
                  </p>
                  {chapters[selectedItemIndex].video ? (
                    <iframe
                      src={convertToEmbeddedURL(
                        chapters[selectedItemIndex].video
                      )}
                      title={chapters[selectedItemIndex].title}
                      frameBorder="0"
                      allowFullScreen
                      className="mt-10 h-[600.44px] w-full lg:max-w-full"
                    ></iframe>
                  ) : (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={chapters[selectedItemIndex].pdf}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </Worker>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          <div className="my-10 w-screen bg-[#B3CBD0] md:w-full">
            <div className="mx-0 my-5 flex w-full flex-col flex-wrap items-center justify-between gap-3 bg-white px-3 py-5 shadow-xl md:my-20 md:flex-row md:flex-nowrap md:gap-0">
              <button
                onClick={handlePrevItem}
                disabled={selectedItemIndex === 0}
                className="mx-5 flex cursor-pointer items-center justify-center gap-3 rounded border-2 border-green-500 bg-green-500 px-10 py-2 text-center font-serif text-[17px] font-semibold text-white hover:bg-white hover:text-green-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaArrowLeft /> Previous
              </button>
              <button
                onClick={handleNextItem}
                disabled={selectedItemIndex === chapters.length - 1}
                className="mx-5 flex cursor-pointer items-center justify-center gap-3 rounded border-2 border-green-500 bg-green-500 px-10 py-2 text-center font-serif text-[17px] font-semibold text-white hover:bg-white hover:text-green-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <Ask slug={single.slug} />
      </div>
    </div>
  );
};

export default CourseLine;