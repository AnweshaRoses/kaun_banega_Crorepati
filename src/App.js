import {useEffect, useState,useMemo} from "react";
import "./app.css"
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [userName, setUserName] = useState(null)
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
      question: "Whats is Anwesha's Favourite Food",
      answers:[
        {
          text: "Biryani",
          correct: false,
        },
        {
          text: "Pasta",
          correct: false,
        },
        {
          text: "Pizza",
          correct: true,
        },
        {
          text: "Dahi vada",
          correct: false,
        },
      ]
    },
    {
      id:3,
      question: "Which year did Anwesha Start coding",
      answers:[
        {
          text: "2017",
          correct: true,
        },
        {
          text: "2018",
          correct: false,
        },
        {
          text: "2019",
          correct: false,
        },
        {
          text: "2020",
          correct: false,
        },
      ]
    },
    {
      id:4,
      question: "What is Anwesha's Favourite Video Game",
      answers:[
        {
          text: "Team Fortress 2",
          correct: false,
        },
        {
          text: "Overcooked 2",
          correct: false,
        },
        {
          text: "Dead By Daylight",
          correct: false,
        },
        {
          text: "Among Us",
          correct: true,
        },
      ]
    },
    {
      id:5,
      question: "What is Anwesha's favoutite season",
      answers:[
        {
          text: "Spring",
          correct: false,
        },
        {
          text: "Summer",
          correct: false,
        },
        {
          text: "Autumn",
          correct: false,
        },
        {
          text: "Winter",
          correct: true,
        },
      ]
    },
    {
      id:6,
      question: "Which of these states have I not visited",
      answers:[
        {
          text: "Sikkim",
          correct: false,
        },
        {
          text: "Rajasthan",
          correct: true,
        },
        {
          text: "J&K",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: false,
        },
      ]
    },
    {
      id:7,
      question: "What is my personality type",
      answers:[
        {
          text: "Defender",
          correct: true,
        },
        {
          text: "Adventurer",
          correct: false,
        },
        {
          text: "Architect",
          correct: false,
        },
        {
          text: "Mediator",
          correct: false,
        },
      ]
    },
    {
      id:8,
      question: "What is the best coding language",
      answers:[
        {
          text: "Javascript",
          correct: true,
        },
        {
          text: "Javascript",
          correct: true,
        },
        {
          text: "Javascript",
          correct: true,
        },
        {
          text: "Javascript",
          correct: true,
        },
      ]
    },
    {
      id:9,
      question: "Which is my spirit animal",
      answers:[
        {
          text: "Panda",
          correct: false,
        },
        {
          text: "Parrot",
          correct: false,
        },
        {
          text: "Whale",
          correct: true,
        },
        {
          text: "Sloth",
          correct: false,
        },
      ]
    },
    {
      id:10,
      question: "Favourite Tv show",
      answers:[
        {
          text: "Brooklyn nine nine",
          correct: false,
        },
        {
          text: "How I met your mother",
          correct: true,
        },
        {
          text: "Friends",
          correct: false,
        },
        {
          text: "Office",
          correct: false,
        },
      ]
    },
    {
      id:11,
      question: "My favourite makeup product",
      answers:[
        {
          text: "Eyeshadow",
          correct: false,
        },
        {
          text: "Foundation",
          correct: false,
        },
        {
          text: "Blush",
          correct: false,
        },
        {
          text: "Lipstick",
          correct: true,
        },
      ]
    },
    {
      id:12,
      question: "My Favourite fast food chain",
      answers:[
        {
          text: "MCD",
          correct: false,
        },
        {
          text: "KFC",
          correct: false,
        },
        {
          text: "Pizza Hut",
          correct: false,
        },
        {
          text: "Subway",
          correct: true,
        },
      ]
    },
    {
      id:13,
      question: "How many languages can I understand and speak",
      answers:[
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
        {
          text: "5",
          correct: false,
        },
      ]
    },
    {
      id:14,
      question: "Most used Emoji",
      answers:[
        {
          text: "OwO",
          correct: false,
        },
        {
          text: "UwU",
          correct: false,
        },
        {
          text: ":3",
          correct: true,
        },
        {
          text: ":)",
          correct: false,
        },
      ]
    },
    {
      id:15,
      question: "What will you do with this money?",
      answers:[
        {
          text: "Buy new House for you",
          correct: false,
        },
        {
          text: "Give Anwesha all this money because she deserves the world ",
          correct: true,
        },
        {
          text: "Go for a vacation",
          correct: false,
        },
        {
          text: "Start a new company",
          correct: false,
        },
      ]
    },
    {
      id:16,
      question: "Who will you do with this money?",
      answers:[
        {
          text: "Buy new House for you",
          correct: false,
        },
        {
          text: "Give Anwesha all this money because she deserves the world ",
          correct: true,
        },
        {
          text: "Go for a vacation",
          correct: false,
        },
        {
          text: "Start a new company",
          correct: false,
        },
      ]
    },
    
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
      {userName ? (
        <>
                <div className="main">
        {stop ? <h1 className="endtext">You Won:{earned} </h1>:(
          <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
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
        </>
      ): <Start setUserName={setUserName}/> }

    </div>
  );
}

export default App;
