import { useQuiz } from "../contexts/QuizContext";

function Options({ quest }) {
  const { dispatch, answer } = useQuiz();
  const answered = answer !== null;

  return (
    <div className="optionsCS">
      {quest.options.map((option, index) => (
        <button
          className={`BNsCS optionBNsCS ${index === answer ? "answerCS" : ""}
          ${answered ? index === quest.option ? "trueCS" : "falseCS" : ""}`}
          key={option}
          disabled={answered}
          onClick={() => dispatch({ type: "answerC", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
