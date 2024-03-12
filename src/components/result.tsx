import React from "react";

interface PropTypes {
    userAnswer: any
    questions: any
    resetQuiz: () => void
}

const Result: React.FC<PropTypes> = (props) => {

    const correctAnswers = props.userAnswer.filter((answer: any) => answer).length

    return (
        <div className="w-[95%] md:w-[100%] mt-[10px] mx-[20px] md:mt-[20px]  p-[10px] md:p-[20px] border rounded-md flex flex-col">
            <h2 className="text-center  text-[18px] text-[#1A1A1A] font-semibold">Results</h2>
            <div
                className="flex flex-col justify-center items-center gap-[5px] md:flex-row text-center text-[16px] md:text-[16px] text-[#1a1a1a] font-medium mt-[10px]">
                <span>You Answered {correctAnswers} out of {props.questions.length} questions</span>
                <span
                    className="rounded  bg-gray-500 bg-opacity-20 py-[5px] px-[10px] text-[14px] font-medium text-[#1a1a1a] cursor-pointer"
                    onClick={props.resetQuiz}>Click here to Retry</span>
            </div>
            <div className="flex flex-col gap-[15px] mt-[15px] ">
                {props.questions.map((q: any, index: number) => (
                    <p key={index}
                       className={`${props.userAnswer[index] ? 'bg-[#e6ffeb] text-[#009a2a]' : 'bg-[#ffe6e9] text-[#cc0016]'} rounded p-[10px] cursor-pointer transform transition-transform delay-150 hover:scale-105 text-[14px] font-medium`}>Q{index + 1}&#41; {q.questions}</p>
                ))}
            </div>
        </div>
    )
}

export default Result;
