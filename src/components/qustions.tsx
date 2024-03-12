import React from 'react';

interface answerOptions {
    text: string,
    isCorrect: boolean
}

interface questions {
    questions: string,
    answerOptions: answerOptions[]
}

interface PropTypes {
    questions: questions,
    currentQustion: number,
    onAnswerClick: (isCorrect: boolean) => void,
}

const Questions: React.FC<PropTypes> = (props) => {

    const handleClick = (isCorrect: boolean) => {
        props.onAnswerClick(isCorrect)
    }

    return (
        <div className="w-[95%] md:w-[100%] mt-[10px] mx-[20px] md:mt-[20px]  p-[10px] md:p-[20px] border rounded-md flex flex-col">
            <h1 className="text-[18px] text-[#1A1A1A] w-[100%] text-center font-semibold">
                Q{props.currentQustion + 1}&#41; {props.questions.questions}
            </h1>
            <div className="w-[100%] md:w-[80%] grid grid-cols-2  mx-auto gap-[20px] mt-[30px]">
                {props.questions.answerOptions.map((options: answerOptions, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleClick(options.isCorrect)}
                        className="w-[100%] py-[35px] text-[#1A1A1A] text-[14px] font-semibold hover:shadow-md
                        hover:scale-105 transform px-[20px] transition-transform delay-150 rounded-md cursor-pointer bg-gray-100"
                    >
                        {options.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Questions;
