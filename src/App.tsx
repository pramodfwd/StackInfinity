import React, { useState } from "react";
import QuestionCard from "./Components/Question";
import { fetchquistions } from "./API";
import { questionState, Difficulty } from "./API";
import { Globalstyle } from "./App.style";


export type Answerobject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const total_questions = 10;

const App = () => {
  const [loading, setloading] = useState(false);
  const [questions, setquestions] = useState<questionState[]>([]);
  const [number, setnumber] = useState(0);
  const [useranss, setuseranss] = useState<Answerobject[]>([]);
  const [score, setscore] = useState(0);
  const [gameover, setgameover] = useState(true);

  console.log(questions);

  const start = async () => {
    setloading(true);
    setgameover(false);

    const newquestions = await fetchquistions(total_questions, Difficulty.EASY);

    setquestions(newquestions);

    setscore(0);
    setuseranss([]);
    setnumber(0);
    setloading(false);
  };

  const chcekanswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      //users anwer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answwer is correct
      if (correct) setscore((prev) => prev + 1);
      //save answer in the array for user answer
      const answerobject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setuseranss((prev) => [...prev , answerobject]);
    }
  };

  const nextquestion = () => {
    //move on to next question 
    const nxtquestion = number+1;
    if(nxtquestion === total_questions){
      setgameover(true)
    }
    else{
      setnumber(nxtquestion)
    }
  };

  return (
    <>
    <Globalstyle/>
    <div className="App">
      <h1>React Quiz</h1>
      {gameover || useranss.length === total_questions ? (
        <button onClick={start}>start</button>
      ) : null}

      {!gameover ? <p className="score">Score:{score}</p> : null}
      {loading ? <p>Loading Questions...</p> : null}

      {!loading && !gameover && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestion={total_questions}
          question={questions[number].question}
          answers={questions[number].answers}
          useranswer={useranss ? useranss[number] : undefined}
          Callback={chcekanswers}
          />
          )}

      {!gameover &&
      !loading &&
      useranss.length === number + 1 &&
      number !== total_questions - 1 ? (
        <button onClick={nextquestion}>Next</button>
      ) : null}
    </div>
        </>
  );
};

export default App;
