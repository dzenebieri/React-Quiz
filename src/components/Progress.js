import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, answer, points, maxPoints, maxQuests } = useQuiz();

  return (
    <header className="progressCS">
      <progress max={maxQuests} value={index + Number(answer !== null)} />

      <p> Quest <b> {index + 1} </b> / {maxQuests} </p>

      <p> <b> {points} </b> / {maxPoints} </p>
    </header>
  );
}

export default Progress;
