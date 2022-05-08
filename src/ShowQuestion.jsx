import {useState} from 'react'
import React from "react"
import Options from "./Options"

export default function Question(props){
    
    const [options, setOptions] = useState([...props.options, props.correctAnswer])

    const [marked, setMarked] = useState(false)
    

    React.useState(() =>{
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            setOptions(array)
    }
    shuffleArray(options)
    }, [])

   function checkAnswer(answer){
        setMarked(true)
        if(answer === props.correctAnswer){
            props.scoreUpdate("correct")
        }
        else {
            props.scoreUpdate("incorrect")
        }

   }
    
    const option = options.map((item, index) => (
       
        <Options key={index} marked={marked} item={item} correctAnswer={props.correctAnswer} checkAnswer={checkAnswer} gameStatus={props.gameStatus} />
        ))

    return (
        <div className="questions">
            <p className="each-question">{props.question}</p>
            <div className="each-option" > {option}</div>
            
        </div>
    )
}