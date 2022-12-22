import React from "react";
import { Answerobject } from "../App";

type Props = {
  question: string;
  answers: string[];
  Callback: (e: React.MouseEvent<HTMLButtonElement>) =>void;
  useranswer: Answerobject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  Callback,
  useranswer,
  questionNr,
  totalQuestion,
}) => {
  return (
    <div>
      <p className="number">
        Question:{questionNr} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key = {answer}>
            <button disabled={useranswer ? true : false} onClick={Callback} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
