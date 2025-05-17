import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [answers, setAnswers] = useState(null);

  return (
    <div className="App">
      <h1>VIBE QUEST 2025!!!</h1>
      <p>Have a fun time answering!!!</p>
      {answers ? (
        <Result answers={answers} onRestart={() => setAnswers(null)} />
      ) : (
        <Quiz onFinish={setAnswers} />
      )}
    </div>
  );
}

export default App;
