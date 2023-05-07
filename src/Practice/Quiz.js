import React, { useReducer, useState } from "react";
const INCRESESCORE = 'incresescore'
const CORRECTANS ='correctans'
const reducer= (state,action)=>{  
  switch(action.type){
    case INCRESESCORE :
      return {
        ...state,score:state.score+1
      }
    
  }

}

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer,{
    qn:0,
    correctAns:null,
    score:0
  })
  const [qn, setQn] = useState(0);
  const [correctAns, setCorrectAns] = useState(null);
  const selectAnswer = (option) => {
    const trueAnswer = Questions[qn].correct;
    if (option == trueAnswer) {
      setCorrectAns(true);
      dispatch({
        type:INCRESESCORE
      })
    } else {
      setCorrectAns(true);
    }
  };
  const Questions = [
    {
      Question: "Whas is capital of France?",
      Answers: ["Paris", "France", "Rome", "Delhi"],
      id: 1,
      correct: "Paris",
    },

    {
      Question: "Whas is capital of India?",
      Answers: ["Newyork", "Tokyo", "Ahmedabad", "Delhi"],
      id: 2,
      correct: "Delhi",
    },
    {
      Question: "Whas is capital of USA?",
      Answers: ["Ahmedabad", "Moscow", "Washington", "Delhi"],
      id: 3,
      correct: "Washington",
    },
  ];
  const renderedAnswers = Questions[qn].Answers.map((option) => {
    return (
      <button
        className="btn btn-primary"
        onClick={() => selectAnswer(option)}
        key={option}
      >
        {option}
      </button>
    );
  });
  const renderedTrueAnswers = Questions[qn].Answers.map((option) => {
    if (option == Questions[qn].correct) {
      return (
        <button
          className="btn btn-success"
         key={option}
        
        >
          {option}
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-danger"
          key={option}
          disabled
        >
          {option}
        </button>
      );
    }
  });
  let answerbox = renderedAnswers;
  if (correctAns !== null) {
    answerbox = renderedTrueAnswers;
  }
  const prevQuestion = (e) => {
    e.preventDefault();
    if (!qn <= 0) {
      setQn(qn - 1);
    }
  };

  const nextQuestion = (e) => {
    e.preventDefault();
    setQn(qn + 1);
    setCorrectAns(null);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <p className="score">
        Score: <span id="score">{state.score}</span>
      </p>
      <div className="question">
        <p key={Questions[qn].id}>{Questions[qn].Question}</p>
        <div className="answers">{answerbox}</div>
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevQuestion} type="button">
          Prev
        </button>
        <button
          id="next"
          onClick={nextQuestion}
          type="button"
          disabled={qn === Questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
