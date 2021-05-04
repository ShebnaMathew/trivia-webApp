import { useEffect, useState } from "react";
import * as shuffle from 'shuffle-array';
import Question from "./Question";

const QuestionStack = props => {

    const [currentQuestion, setCurrentQuestion] = useState(props.results[0]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [choices, setChoices] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (questionNumber < props.results.length) {
            setCurrentQuestion(props.results[questionNumber])
        } else {
            props.clearResults([])
            props.setTotal(questionNumber)
            props.setScore(score)
            props.setScorePresent(true)
        }
    },[questionNumber, props, score])
    
    useEffect(() => {
        let options = []
        options.push(...currentQuestion["incorrect_answers"], currentQuestion["correct_answer"])
        shuffle(options)
        setChoices(options)
    },[currentQuestion])

    return (
        <Question question={currentQuestion["question"]} choices={choices} 
        correct={currentQuestion["correct_answer"]} 
        questionNumber={questionNumber} showNext={setQuestionNumber} score={score} updateScore={setScore}/>
    )
}

export default QuestionStack;