import React, { useEffect, useState } from "react";
import StartPage from "./StartPage";
import QuestionPage from "./QuestionPage";
import axios from "axios";

const url = 'https://ahmedmostafa.us-east-2.aws.modelbit.com/v1/prediction1/latest';
const Ai = () => {
  const [currentPage, setCurrentPage] = useState("start"); // Tracks the current page
  const [currentQuestion, setCurrentQuestion] = useState(0); // Tracks the current question

  // List of questions
  const questions = [
    "Response to sensory stimuli (e.g., sensitivity to sounds or textures).",
    "Do you enjoy social interactions?",
    "Are you comfortable with changes in routine?",
    "Do you prefer working alone or in a group?",
    "Do you find certain textures uncomfortable?",
    "Do you like exploring new environments?",
    "Do you have any repetitive habits?",
    "How do you handle conflict in daily life?",
    "Do you enjoy physical activities?",
    "Do you feel confident when solving problems?",
    ];

     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from an API
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array to run only once

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

    return (
    <div>
      {currentPage === "start" ? (
        <StartPage onStart={() => setCurrentPage("questions")} />
      ) : (
        <QuestionPage
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          onNext={() =>
            currentQuestion < questions.length - 1
              ? setCurrentQuestion(currentQuestion + 1)
              : alert("You have completed all questions!")
          }
          onPrev={() =>
            currentQuestion > 0 ? setCurrentQuestion(currentQuestion - 1) : null
          }
        />
      )}
        </div>
        
  );
};

export default Ai;
