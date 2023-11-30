import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { dispatch, points, maxPoints } = useQuiz();

  return (
    <>
      <p className="pointsPCS">
        <b> {points} </b> / {maxPoints} ✅
      </p>

      <button
        className="BNsCS restartBNCS"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz &nbsp;
        <span className="material-symbols-rounded">
          restart_alt
        </span>
      </button>
    </>
  );
}

export default FinishScreen;
