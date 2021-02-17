import React from "react";
import { ColumButtton, ButtonWrapper } from "./styled";

//TODO: add DOMpurify
import DOMPurify from "isomorphic-dompurify";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /*
userAnswer: any;
or import { AnswerObject } from '../App';
userAnswer: AnswerObject | undefined;
*/
    userAnswer: any;
    questionNumber: number;
    totalQuestion: number;
};

export const Question: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestion,
}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(question),
                }}
            />
            <ColumButtton className="questions">
                {answers.map((answer) => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button
                            disabled={userAnswer}
                            value={answer}
                            onClick={callback}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(answer),
                                }}
                            />
                        </button>
                    </ButtonWrapper>
                ))}
            </ColumButtton>
        </div>
    );
};
