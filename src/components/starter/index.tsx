import React, { useState } from "react";
import { Wrapper, Content, StartButton, NextButton } from "./styled";

import { Question } from "@components";

import { Difficulty, fetchQuizQuestions, QuestionsState } from "@services/api";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

export const Starter: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    //console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.HARD));

    const StartTrivia = async () => {
        setLoading(true);
        setGameOver(false);
        const NewQuestion = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.MEDIUM,
        );
        setQuestions(NewQuestion);
        setScore(0);
        setUserAnswer([]);
        setNumber(0);
        setLoading(false);
    };

    const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // User's answer
            const answer = e.currentTarget.value;
            // Check answer against correct answer
            const correct = questions[number].correct_answer === answer;
            // Add score if answer is correct
            if (correct) setScore((prev) => prev + 1);
            // Save the answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            //setUserAnswer((prev) => [...prev, answerObject]);
            setUserAnswer((prev) => [...prev, answerObject]);
        }
    };

    const NextQuestion = () => {
        // Move on to the next question if not the last question
        const nextQ = number + 1;

        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            console.log(TOTAL_QUESTIONS);
            setNumber(nextQ);
        }
    };

    return (
        <Wrapper>
            <Content>
                <h1>QUIZ</h1>
                {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
                    <StartButton className="start" onClick={StartTrivia}>
                        Start
                    </StartButton>
                ) : null}

                {!gameOver ? <p className="score">Score: {score}</p> : null}
                {loading && <p>Loading Questions...</p>}
                {!loading && !gameOver && (
                    <Question
                        questionNumber={number + 1}
                        totalQuestion={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswer ? userAnswer[number] : undefined}
                        callback={CheckAnswer}
                    />
                )}
                {!gameOver &&
                !loading &&
                userAnswer.length === number + 1 &&
                number !== TOTAL_QUESTIONS - 1 ? (
                    <NextButton
                        className="next-question"
                        onClick={NextQuestion}
                    >
                        Next Question
                    </NextButton>
                ) : null}
            </Content>
        </Wrapper>
    );
};
