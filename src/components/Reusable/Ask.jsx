import { useEffect, useState } from "react";
import { SiNike } from "react-icons/si";
import RatingsDisplay from "./RatingsDisplay";
import PropTypes from "prop-types";
import { useMutation } from "react-query";
import api from "../../api/api";

const Ask = ({ slug }) => {
  const [element, setElement] = useState(1);
  const [result, setResult] = useState({});
  const [faq, setFaq] = useState([]);
  const [success, setSuccess] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const faqResponse = await api.get(`/faqs`);
        const faqs = faqResponse.data.data;

        const courseResponse = await api.get(`/courses/${slug}`);
        const results = courseResponse.data.data;
        setResult(results);

        const filteredfaqs = faqs.filter(
          (chapter) => chapter.course_id === results.id
        );

        setFaq(filteredfaqs);
        setCourseId(results.id);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [slug]);

  const handleElement = (newElement) => {
    setElement(newElement);
  };

  const { mutate: createPost } = useMutation(
    async (newPost) => {
      setIsLoading(true);
      try {
        const response = await api.post("/faqs", newPost);
        return response.data;
      } catch (error) {
        setIsError(true);
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    {
      onSuccess: () => {
        setSuccess(true);
        setQuestion(""); // Clear the input field
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ course_id: courseId, question });
  };

  return (
    <div>
      <div className="flex flex-wrap sm:flex-nowrap md:justify-between items-center gap-6 py-6 justify-center px-2 sm:px-4 md:px-6 lg:px-16">
        <p
          onClick={() => handleElement(1)}
          className={`${
            element === 1
              ? "cursor-pointer font-bold text-lg duration-150 border-b-[1px] border-primary"
              : "cursor-pointer text-primary font-semibold hover:border-b-[1px] hover:border-primary hover:text-slate-800 duration-300"
          }`}
        >
          Description
        </p>
        <p
          onClick={() => handleElement(2)}
          className={`${
            element === 2
              ? "cursor-pointer font-bold text-lg duration-150 border-b-[1px] border-primary"
              : "cursor-pointer text-primary font-semibold hover:border-b-[1px] hover:border-primary hover:text-slate-800 duration-300"
          }`}
        >
          Q&A
        </p>
        <p
          onClick={() => handleElement(3)}
          className={`${
            element === 3
              ? "cursor-pointer font-bold text-lg duration-150 border-b-[1px] border-primary"
              : "cursor-pointer text-primary font-semibold hover:border-b-[1px] hover:border-primary hover:text-slate-800 duration-300"
          }`}
        >
          Resources
        </p>
      </div>
      <div>
        {element === 1 && result && (
          <div className="flex flex-col justify-center items-start px-w sm:px-4 md:px-8 lg:px-16">
            <div className="flex justify-center items-center text-center">
              <p className="my-3 text-center items-center font-bold text-xl max-w-fit px-3">
                {result.title}
              </p>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: result.description }}
            />
            <div>
              <RatingsDisplay rating={result.rate} />
            </div>
          </div>
        )}
        {element === 2 && (
          <div className="flex flex-col">
            {faq.map((item) => (
              <div key={item.id} className="w-full flex flex-col">
                <div className="flex px-2 sm:px-4 md:px-6 lg:px-10 border-primary border-[1px] max-w-fit py-4 rounded shadow-xl justify-center items-start gap-2 my-4">
                  <span className="px-2 font-bold text-primary text-xl">?</span>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: item.question }}
                  />
                </div>
                <div className="flex px-2 lg:ml-20 sm:px-4 md:px-6 lg:px-10 border-primary border-[1px] max-w-fit py-4 rounded shadow-xl justify-center items-start gap-2 my-4">
                  <span className="px-2 font-bold text-primary text-xl">
                    <SiNike />
                  </span>
                  <div>
                    {item.answer && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-end items-end">
              {isLoading && <div>Loading...</div>}
              {isError && <div className="text-red-500">Error: {error.message}</div>}
                {success && <div className="text-green-500">Post created successfully!</div>}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-fit justify-center items-end gap-3"
              >
                <textarea
                  name="content"
                  type="text"
                  rows={5}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Write your Question here?"
                  className="rounded p-1 text-slate-800 min-w-[300px] sm:min-w-[330px] md:min-w-[400px] lg:min-w-[500px] placeholder-text-primary w-full max-w-full"
                />
                <button
                  type="submit"
                  className="text-white bg-primary w-fit rounded px-6 py-1"
                >
                  Send
                </button>
                
              </form>
            </div>
          </div>
        )}
        {element === 3 && result && (
          <div className="flex flex-col justify-center items-start px-w sm:px-4 md:px-8 lg:px-16">
            <p className="my-3 text-center items-center font-bold text-xl max-w-fit px-2">
              {result.title}
            </p>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: result.description }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Ask.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Ask;
