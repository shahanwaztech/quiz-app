'use client'
import React, {useState} from 'react'
import Questions from "@/components/qustions";
import question from "../../contants/question.json";
import Result from "@/components/result";

export default function Home() {
    const [currentQuestions, setCurrentQuestions] = useState<number>(0)
    const [userAnswer, setUserAnswer] = useState<any>([])

    const handleNextQuestions = (isCorrect: boolean) => {
        setCurrentQuestions(currentQuestions + 1);
        setUserAnswer([...userAnswer, isCorrect])
    }

    const resetQuiz = () => {
        setCurrentQuestions(0)
        setUserAnswer([])
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-[700px] mt-[40px] flex flex-col items-center justify-center">
                <p className="text-center w-[100%] font-semibold text-[28px] text-[#1a1a1]">ReactJS Quiz</p>
                {currentQuestions < question.length && (
                    <Questions
                        questions={question[currentQuestions]}
                        currentQustion={currentQuestions}
                        onAnswerClick={handleNextQuestions}
                    />
                )}
                {currentQuestions === question.length && (
                    <Result
                        userAnswer={userAnswer}
                        questions={question}
                        resetQuiz={resetQuiz}
                    />
                )}
            </div>
        </div>
    );
}
