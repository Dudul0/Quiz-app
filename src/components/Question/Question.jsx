import React, {useRef} from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../App'
import QuestionEmptyList from './QuestionEmptyList'
import css from './question.css'
export default function Question() {
  const {questions, index, setIndex, currentQuestion, setCurentQuestion, NextButton, findCorrectAnswer} = useContext(QuizContext)
  const questionRef = useRef('null')
  return (
    <>
      <div className="question-wrapper">
        {
        questions.length > index
        ?
          (<div className="question">
          <h2 className='fs-1'>{index+1}. {currentQuestion.question}</h2>
          <hr/>
          <ul className='fs-2' ref={questionRef}>
            <li className='question'  onClick={(e) => { findCorrectAnswer(e,currentQuestion.answers[0]) }}>{currentQuestion.answers[0]}</li>
            <li className='question'  onClick={(e) => { findCorrectAnswer(e,currentQuestion.answers[1]) }}>{currentQuestion.answers[1]}</li>
            <li className='question'  onClick={(e) => { findCorrectAnswer(e,currentQuestion.answers[2]) }}>{currentQuestion.answers[2]}</li>
            <li className='question'  onClick={(e) => { findCorrectAnswer(e,currentQuestion.answers[3]) }}>{currentQuestion.answers[3]}</li>
          </ul>
          <button variant="dark" className='fs-3 button' onClick={() => { 
            NextButton()
            Array.from(questionRef.current.children).map((question) =>  question.classList.remove('correct', 'wrong') )
            }}>Next</button>{' '}
        </div>)
        :
        <QuestionEmptyList/>
        }
      </div>
    </>
  )
}
