import logo from './logo.svg';
import './App.css';
import './quiz.css'
import Stars from 'react-stars-display'
import React, { useState } from 'react';

export default function App() {

  const questions = [
    {
      questionText: '4 * 7 =?',
      answerOptions: [
        { answerText: '11', isCorrect: false },
        { answerText: '47', isCorrect: false },
        { answerText: '28', isCorrect: true },
        { answerText: '14', isCorrect: false },
      ],
    },
    {
      questionText: '13 + 17 =?',
      answerOptions: [
        { answerText: '20', isCorrect: false },
        { answerText: '30', isCorrect: true },
        { answerText: '31', isCorrect: false },
        { answerText: '21', isCorrect: false },
      ],
    },
    {
      questionText: '58 - 19 =?',
      answerOptions: [
        { answerText: '39', isCorrect: true },
        { answerText: '37', isCorrect: false },
        { answerText: '41', isCorrect: false },
        { answerText: '47', isCorrect: false },
      ],
    },
    {
      questionText: '20 / 5?',
      answerOptions: [
        { answerText: '6', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },
    {
      questionText: '34 + 17 =?',
      answerOptions: [
        { answerText: '51', isCorrect: true },
        { answerText: '62', isCorrect: false },
        { answerText: '50', isCorrect: false },
        { answerText: '49', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showCase, setShowCase] = useState(true);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className='app'>
        {showCase ? (<div className='abc'>) : (
          {showScore ? (
            //<div className='score-box'>
            <div className='score-section'>
              <p>You scored {score} out of {questions.length} </p>
              <Stars stars={score} size={45} spacing={2} fill='#ea9c46' />
            </div>
            //  </div>
          ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
        )}
       </div>
    </>
  );
}

