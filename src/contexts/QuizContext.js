import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();
const secsPerQuest = 30;
const initState = {
  quests: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secsPerQuests: null,
};

function reducerFN(state, action) {
  switch (action.type) {
    case "dataReady":
      return {
        ...state,
        quests: action.payload,
        status: "ready",
      };
    case "dataErr":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secsPerQuests: state.quests.length * secsPerQuest,
      };
    case "answerC":
      const quest = state.quests.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === quest.option
          ? state.points + quest.points
          : state.points,
      };
    case "nextQuest":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...initState,
        quests: state.quests,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secsPerQuests: state.secsPerQuests - 1,
        status: state.secsPerQuests === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Case Action ERROR");
  }
}

function QuizProvider({ children }) {
  const [{ quests, status, index, answer, points, secsPerQuests }, dispatch]
    = useReducer(reducerFN, initState);
  const maxQuests = quests.length;
  const maxPoints = quests.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    fetch("https://dzenebieri-react-quiz-api.onrender.com/quests")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReady", payload: data }))
      .catch((err) => {
        console.error(err);
        dispatch({ type: "dataErr" });
      });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quests,
        status,
        index,
        answer,
        points,
        secsPerQuests,
        maxQuests,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz Context ERROR");
  return context;
}

export { QuizProvider, useQuiz };
