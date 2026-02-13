import "./Quiz.css";

export default function Quiz() {
  return (
    <div className="quiz-page">
      <h1 className="quiz-title">Ocean Quiz 🌊</h1>

      <div className="quiz-card">
        <h3>Question 1</h3>
        <p>Which fish is known as the “King of Herrings”?</p>

        <div className="options">
          <button>Angler Fish</button>
          <button>Oar Fish</button>
          <button>Blue Tang</button>
          <button>Lion Fish</button>
        </div>
      </div>

      <button className="next-btn">Next Question →</button>
    </div>
  );
}
