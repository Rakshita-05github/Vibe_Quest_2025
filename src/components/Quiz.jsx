import { useState } from "react";
import questions from "../data/questions";

function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (vibe) => {
    const newAnswers = [...answers, vibe];
    if (current + 1 < questions.length) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const q = questions[current];

  return (
    <div className="quiz">
      <h2>{q.question}</h2>
      {q.options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt.vibe)}>
          {opt.text}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
