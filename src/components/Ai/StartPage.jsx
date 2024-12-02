import React from "react";

const StartPage = ({ onStart }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded hover:bg-blue-600"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
