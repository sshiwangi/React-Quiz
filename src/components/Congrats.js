import React from "react"
import congratsIcon from "../images/congratulation.png"

export default function Congrats () {
    return (
        <div className="congrats-emoji">
            <image src={congratsIcon}/>
            <div className="congrats-text">Congratulations! <br/> You completed the Quiz</div>
        </div>
    )
}