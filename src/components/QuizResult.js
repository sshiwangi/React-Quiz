import React, {useState} from "react"
import Congrats from "../components/Congrats"

export default function QuizResult(props) {
    return (
        <>
        <div className="result-container-items">
            {props.showCongrats? (
                <Congrats />
            ):(
            <>
            <div className="scores">
                <span> Your Score:</span> 
                <span className="player-score"> {props.score} </span>
           </div>
           <div className="scores">
                <span>Total Score:</span>
                <span className="player-score">{props.totalScore} </span> 
           </div>
           </>)}
        </div>
        
        <button className="prev-question" onClick={props.tryAgain}>Try Again</button>
        </>
        
    )
}