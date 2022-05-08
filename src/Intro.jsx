import React from "react"

export default function Intro(props){
    return (
        <div className="intro"> 
            <h3>Quizzical</h3>
            <p>Text your mind</p>
            <button onClick={() => props.startGame()}>Start Quiz</button>
        </div>
    )
}