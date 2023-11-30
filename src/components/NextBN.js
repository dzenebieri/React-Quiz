import { useQuiz } from "../contexts/QuizContext";

function NextBN() {
  const { dispatch, answer, index, maxQuests } = useQuiz();

  if (answer === null) return null;

  if (index < maxQuests - 1)
    return (
      <button
        className="BNsCS nextBNCS"
        onClick={() => dispatch({ type: "nextQuest" })}
      >
        Next &nbsp;
        <span className="material-symbols-rounded">
          arrow_forward
        </span>
      </button>
    );

  if (index === maxQuests - 1)
    return (
      <button
        className="BNsCS nextBNCS finishBNCS"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish &nbsp;
        <span className="material-symbols-rounded">
          done
        </span>
      </button >
    );
}

export default NextBN;
