import React, {useState} from "react"
import {quizdata} from '../quizdata'
import QuizResult from "./QuizResult";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);

    function nextQuestion () {
        updateScore();
        if(currentQuestion < quizdata.length-1){
            setCurrentQuestion(prevQuestion => prevQuestion + 1)
            setClickedOption(0);
        }
        else{
            if(score === quizdata.length){
                setShowCongrats(true)
            }
            setShowResult(true)
            
        }
        
    }
    function prevQuesiton () {
        updateScore()
        if(currentQuestion > 0){
            setCurrentQuestion(prevQuesiton => prevQuesiton -1)
        }
        
    }
    function updateScore () {
        if(clickedOption===quizdata[currentQuestion].answer){
            setScore(score + 1);
        }
    }
    // function checkWinner() {
    //     if(score === quizdata.length){
    //         setShowCongrats(true)
    //     }
    // }
    function resetAll () {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div className="container">
            {showResult? (
                <QuizResult score={score} totalScore={quizdata.length} tryAgain={resetAll} showCongrats={showCongrats}/>
            ):(
            <>
            <div className="container-items">
            <div className="question-container">
                <div className="question-number">{currentQuestion + 1}.</div>
                <div className="question">{quizdata[currentQuestion].question}</div>
            </div>
            <div className="options-container">
                {quizdata[currentQuestion].options.map((option,i)=>{
                    return(
                        <div 
                        className={`options ${
                            clickedOption == i+1?"checked": null
                        }`}
                        key={i} 
                        onClick={() => setClickedOption(i+1)}
                        >
                            <div className="option-number">{String.fromCharCode(97 + i)}</div>
                            <div className="option-txt">{option}</div>
                        </div>
                    )
                })}
                
            </div>
            <div className="button-container">
                <button className="prev-question" onClick={prevQuesiton}>Previous</button>
                <button className="save-next-button" onClick={nextQuestion} >Save and Next</button>
            </div>
            </div>
           </>)} 
        </div>
        
        
    )
}