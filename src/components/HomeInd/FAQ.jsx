import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleToggle = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="mx-auto my-8 w-11/12">
      <h1 className="heading py-5">Frequently Asked Questions</h1>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="mx-auto flex w-10/12 cursor-pointer items-center justify-between border border-secondary p-4"
              onClick={() => handleToggle(index)}
            >
              <p className="text-lg font-semibold">{item.question}</p>
              <svg
                className={`transform transition-transform ${
                  selectedQuestion === index ? "" : "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#025464"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <AnimatePresence>
              {selectedQuestion === index && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mx-auto w-10/12 overflow-hidden bg-white p-4"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
