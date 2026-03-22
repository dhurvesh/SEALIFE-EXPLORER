// import "./Quiz.css";

// export default function Quiz() {
//   return (
//     <div className="quiz-page">
//       <h1 className="quiz-title">Ocean Quiz 🌊</h1>

//       <div className="quiz-card">
//         <h3>Question 1</h3>
//         <p>Which fish is known as the “King of Herrings”?</p>

//         <div className="options">
//           <button>Angler Fish</button>
//           <button>Oar Fish</button>
//           <button>Blue Tang</button>
//           <button>Lion Fish</button>
//         </div>
//       </div>

//       <button className="next-btn">Next Question →</button>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import API from "../../../api/axiox";
import { toast } from "react-toastify";
import "./Quiz.css";

export default function Quiz() {
  const [animalId] = useState(1); // You can make this dynamic later
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Load Questions
  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const res = await API.get(`/quiz/animal/${animalId}`);
        setQuestions(res.data);
      } catch (err) {
        toast.error("Failed to load quiz");
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [animalId]);

  // Load Options when question changes
  useEffect(() => {
    if (questions.length > 0) {
      const loadOptions = async () => {
        const res = await API.get(
          `/quiz/question/${questions[currentIndex].id}/options`
        );
        setOptions(res.data);
      };
      loadOptions();
    }
  }, [questions, currentIndex]);

  const handleAnswer = async (optionId) => {
    setSelected(optionId);

    try {
      const res = await API.post(
        `/quiz/submit?questionId=${questions[currentIndex].id}&optionId=${optionId}`
      );

      if (res.data.correct) {
        toast.success("Correct 🎉");
      } else {
        toast.error("Wrong ❌");
      }

      setScore(res.data.score);

      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex(currentIndex + 1);
          setSelected(null);
        } else {
          setCompleted(true);
        }
      }, 1200);
    } catch (err) {
      toast.error("Submission failed");
    }
  };

  const handleSearch = async () => {
    if (!search) return;
    const res = await API.get(`/quiz/search?keyword=${search}`);
    setSearchResults(res.data);
  };

  if (loading) return <div className="quiz-loading">Loading...</div>;

  if (completed)
    return (
      <div className="quiz-complete">
        <h2>Quiz Completed 🌊</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button onClick={() => window.location.reload()}>
          Restart Quiz
        </button>
      </div>
    );

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Ocean Animal Quiz 🌊</h1>

      {/* Progress */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>

      <div className="quiz-card fade-in">
        <h3>
          Question {currentIndex + 1} / {questions.length}
        </h3>
        <p>{currentQuestion.questionText}</p>

        <div className="options">
          {options.map((opt) => (
            <button
              key={opt.id}
              className={`option-btn ${
                selected === opt.id
                  ? opt.correct
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => handleAnswer(opt.id)}
              disabled={selected !== null}
            >
              {opt.optionText}
            </button>
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="quiz-search">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((q) => (
              <div key={q.id} className="search-item">
                {q.questionText}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="score-display">Score: {score}</div>
    </div>
  );
}