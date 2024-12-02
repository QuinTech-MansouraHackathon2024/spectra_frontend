import React, { useState } from "react";
import aiImg from '../../assets/Ai.png';

const QuestionPage = ({
  question,
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer); // Update the selected answer
  };

    return (
        <div className="flex flex-col max-h-screen bg-gray-50">
            {/* Progress Bar */}
            <div className="flex justify-between items-center px-6 py-4 mt-14">
                <h1 className="text-xl font-bold">Awesome</h1>
                <div className="text-sm">{`${currentQuestion + 1} of ${totalQuestions}`}</div>
            </div>
            <div className="h-1 bg-gray-300 mx-6">
                <div
                    className="bg-blue-500 h-full"
                    style={{
                        width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
                    }}
                ></div>
            </div>

            {/* Question Section */}
            <div className="flex-grow flex flex-col h-screen md:flex-row justify-between overflow-hidden items-center px-6 py-8">
                {/* Left Section */}
                <div className="flex-[100%] lg:flex-[90%] flex flex-col justify-center items-start h-full">
                    <h2 className="text-4xl font-bold mb-24">{question}</h2>
                    <div className="flex space-x-28">
                        {/* Yes Button */}
                        <button
                            className={`flex flex-col justify-center items-center w-52 h-52 border-2 rounded-lg transition ${selectedAnswer === "yes"
                                    ? "border-blue-500 bg-blue-50 text-blue-500"
                                    : "border-gray-500 hover:bg-gray-100 text-gray-500"
                                }`}
                            onClick={() => handleAnswerSelect("yes")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke={selectedAnswer === "yes" ? "blue" : "gray"}
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="mt-2 text-4xl font-medium">Yes</span>
                        </button>

                        {/* No Button */}
                        <button
                            className={`flex flex-col justify-center items-center w-52 h-52 border-2 rounded-lg transition ${selectedAnswer === "no"
                                    ? "border-blue-500 bg-blue-50 text-blue-500"
                                    : "border-gray-500 hover:bg-gray-100 text-gray-500"
                                }`}
                            onClick={() => handleAnswerSelect("no")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke={selectedAnswer === "no" ? "blue" : "gray"}
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            <span className="mt-2 text-4xl font-medium">No</span>
                        </button>
                    </div>
                </div>

                {/* Image - Hidden on small screens, shown on medium and larger */}
                <img
                    src={aiImg}
                    alt="Illustration"
                    className="flex-[0%] lg:flex-[10%] w-[50%] xl:w-[75%] max-h-full object-contain hidden lg:block"
                />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between px-6 py-4">
                <button
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                    onClick={onPrev}
                    disabled={currentQuestion === 0}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={() => {
                        onNext();
                        setSelectedAnswer(null);
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default QuestionPage;
