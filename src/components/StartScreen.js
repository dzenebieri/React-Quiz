import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { dispatch } = useQuiz();

  return (
    <div className="startCS">
      <button
        className="BNsCS"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start 🔝
      </button>
    </div>
  );
}

export default StartScreen;
