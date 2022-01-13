import { useState,useEffect } from "react"
import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3"
import correct from "../assets/src_sounds_correct.mp3"
import wrong from "../assets/src_sounds_wrong.mp3"

export default function Quiz({data,setStop,questionNumber,setQuestionNumber}) {
    const [question,setQuestion]=useState(null);

    const [selectedAnswer,setSelectedAnswer]=useState(null);

    const [className,setClassName]=useState("answer");

    const [letsplay] =useSound(play);
    const [correctAnswer] =useSound(correct);
    const [wrongAnswer] =useSound(wrong);

    useEffect(() => {
        letsplay();
    }, [letsplay])

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
        delay(3000,()=>{

            if(a.correct){
                delay(1000,()=>{
                    setQuestionNumber((prev)=>prev+1)
                    setSelectedAnswer(null)
                });
            }else{
                wrongAnswer();
                delay(4000,()=>{

                    setStop(true)
                })
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
