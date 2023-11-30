import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Quest() {
  const { quests, index } = useQuiz();
  const quest = quests.at(index);

  return (
    <div>
      <p className="questPCS" > {quest.quest} </p>
      <Options quest={quest} />
    </div>
  );
}

export default Quest;
