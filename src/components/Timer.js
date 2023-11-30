import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secsPerQuests } = useQuiz();
  const mins = Math.floor(secsPerQuests / 60);
  const secs = secsPerQuests % 60;

  useEffect(() => {
    const tickin = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(tickin);
  },
    [dispatch]
  );

  return (
    <div className="timerCS">
      <span className="material-symbols-rounded">
        timer
      </span> &nbsp;
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
