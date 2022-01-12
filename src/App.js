import {useEffect, useState,useMemo} from "react";
import "./app.css"
import Quiz from "./components/Quiz";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$0")
  const data=[
    {
      id:1,
      question: "When is Anwesha's Birthday?",
      answers:[
        {
          text: "1st jan",
          correct: false,
        },
        {
          text: "2nd jan",
          correct: false,
        },
        {
          text: "3rd jan",
          correct: true,
        },
        {
          text: "4th jan",
          correct: false,
        },
      ]
    },
    {
      id:2,
      question: "Whats's Anwesha's Favourite Food",
      answers:[
        {
          text: "1st jan",
          correct: false,
        },
        {
          text: "2nd jan",
          correct: false,
        },
        {
          text: "3rd jan",
          correct: true,
        },
        {
          text: "4th jan",
          correct: false,
        },
      ]
    },
    {
      id:3,
      question: "When is Anwesha's Birthday?",
      answers:[
        {
          text: "1st jan",
          correct: false,
        },
        {
          text: "2nd jan",
          correct: false,
        },
        {
          text: "3rd jan",
          correct: true,
        },
        {
          text: "4th jan",
          correct: false,
        },
      ]
    },
    {
      id:4,
      question: "When is Anwesha's Birthday?",
      answers:[
        {
          text: "1st jan",
          correct: false,
        },
        {
          text: "2nd jan",
          correct: false,
        },
        {
          text: "3rd jan",
          correct: true,
        },
        {
          text: "4th jan",
          correct: false,
        },
      ]
    }

  ]
  const moneyPyramid= useMemo(() => 
    [
      {id:1,amount:"$100"},
      {id:2,amount:"$200"},
      {id:3,amount:"$300"},
      {id:4,amount:"$500"},
      {id:5,amount:"$1000"},
      {id:6,amount:"$2000"},
      {id:7,amount:"$4000"},
      {id:8,amount:"$8000"},
      {id:9,amount:"$16000"},
      {id:10,amount:"$32000"},
      {id:11,amount:"$64000"},
      {id:12,amount:"$125000"},
      {id:13,amount:"$250000"},
      {id:14,amount:"$500000"},
      {id:15,amount:"$1000000"},
    ].reverse(),
  [])
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find(m=> m.id===questionNumber-1).amount)
  },[moneyPyramid, questionNumber])
  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endtext">You Earned:{earned} </h1>:(
          <>
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz 
          data={data}
           setStop={setStop} 
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}/>
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
      <ul className="moneylist">
        {moneyPyramid.map((m)=>(
        <li className={questionNumber===m.id ? "moneylistitem active":"moneylistitem"}>
         <span className="moneylistitemnumber">{m.id}</span>
         <span className="moneylistitemamount">{m.amount}</span>
         </li>
        ))}
  

      </ul>
      </div>
    </div>
  );
}

export default App;
