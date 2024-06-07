import { useEffect, useState } from 'react';
import api from '../../api/api';
import PropTypes from 'prop-types';

const Quiz = ({ slug }) => {
  const [faq, setFaq] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState(0);

  useEffect(() => {
    const fetchCourseData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const faqResponse = await api.get(`/quizzes`);
        const faqs = faqResponse.data.data;

        const courseResponse = await api.get(`/courses/${slug}`);
        const results = courseResponse.data.data;

        const filteredFaqs = faqs.filter(
          (chapter) => chapter.course_id === results.id
        );

        setFaq(filteredFaqs);
      } catch (error) {
        setIsError(true);
        setError(error.message);
        console.error('Error fetching course data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, [slug]);

  const handleAnswerChange = (questionIdx, choiceIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIdx]: choiceIdx });
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    faq.forEach((question, idx) => {
      const selectedOption = selectedAnswers[idx];
      const correctOption = ["optionA", "optionB", "optionC", "optionD"].findIndex(option => question[option] === question.correct_answer);
      if (selectedOption === correctOption) {
        correctAnswers += 1;
      }
    });

    const resultPercentage = (correctAnswers / faq.length) * 100;
    setQuizResult(resultPercentage);
    setShowResult(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {faq.length > 0 && (
        <>
          <p className='text-primary font-bold text-lg md:text-xl lg:text-2xl text-center py-10 xl:text-3xl'>Quiz Time</p>
          {faq.map((question, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start justify-start px-2 text-black sm:px-4 md:px-8"
            >
              <h3 className="amir py-4 text-[18px] font-semibold text-gray-700">
                {idx + 1}. {question.question}
              </h3>
              <div className="flex flex-col">
                {["optionA", "optionB", "optionC", "optionD"].map((optionKey, cIdx) => {
                  const isCorrect = selectedAnswers[idx] === cIdx && cIdx === ["optionA", "optionB", "optionC", "optionD"].findIndex(option => question[option] === question.correct_answer);
                  const isIncorrect = selectedAnswers[idx] === cIdx && cIdx !== ["optionA", "optionB", "optionC", "optionD"].findIndex(option => question[option] === question.correct_answer);

                  return (
                    <label
                      key={cIdx}
                      className={`mb-2 flex items-center px-2 text-[16px] font-medium ${
                        isCorrect ? 'bg-green-200' : isIncorrect ? 'bg-red-200' : 'text-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        value={cIdx}
                        checked={selectedAnswers[idx] === cIdx}
                        onChange={() => handleAnswerChange(idx, cIdx)}
                        className="mr-2"
                      />
                      <span>
                        {String.fromCharCode(65 + cIdx)}. {question[optionKey]}
                      </span>
                    </label>
                  );
                })}
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
              className={`mt-4 w-full max-w-[200px] rounded border-2 border-green-500 px-10 py-2 font-semibold text-green-500 ${
                quizResult >= 50 ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
              Your result: {quizResult}%
            </p>
          )}
        </>
      )}
    </>
  );
};

Quiz.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Quiz;
