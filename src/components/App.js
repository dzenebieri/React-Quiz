import Dze from "./Dze"
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Quest from "./Quest";
import NextBN from "./NextBN";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Dze />
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Quest />
            <Footer>
              <Timer />
              <NextBN />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>

    </div>
  );
}
