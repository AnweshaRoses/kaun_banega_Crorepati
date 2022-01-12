import { useState,useEffect } from "react"

export default function Quiz({data,setStop,questionNumber,setQuestionNumber}) {
    const [question,setQuestion]=useState(null);

    const [selectedAnswer,setSelectedAnswer]=useState(null);

    const [className,setClassName]=useState("answer");

    const delay=(duration,callback)=>{
        setTimeout(() => {
            callback();
        }, duration);
    }

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data,questionNumber])

    const handleClick=(a)=>{
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(1000,()=>{
            setClassName(a.correct ? "answer correct":"answer wrong")
        });
        delay(4000,()=>{

            if(a.correct){
                setQuestionNumber((prev)=>prev+1)
                setSelectedAnswer(null)
            }else{
                setStop(true)
            }
            
        });
    }

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=>(
                <div className={selectedAnswer===a ? className:"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
                ))}
            </div>
        </div>
    );
}
