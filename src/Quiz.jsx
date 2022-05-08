import React from "react"
import Question1 from "./ShowQuestion"
import {nanoid} from "nanoid"

export default function Quiz(){

    const [question, setQuestion] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [incorrect, setIncorrect] = React.useState(0)
    const [gameStatus, setGameStatus] = React.useState(false)

    React.useEffect(() =>{
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => setQuestion(data.results))
    }, [])
  
   function scoreUpdate(answer){
       if(answer === "correct"){
       setScore(score + 1)
       }
         else {setIncorrect(incorrect + 1)}
       
   }

   function gameOver(){
       console.log(score + incorrect)
       if(score + incorrect === 5){
              setGameStatus(true)
       }
       
   }
   
    const mapQuestion = question.map((item, index) => {
        return (
        <Question1
            key={item.question} 
            question={item.question} 
            correctAnswer={item.correct_answer}
            options={item.incorrect_answers}
            scoreUpdate={scoreUpdate}
            gameStatus={gameStatus}
            />
        )
    })

    return (
        <div className="main-section"> 
        {mapQuestion}
            <div className="game-controll">
                {gameStatus ?
                ( <div> <span>You scored {score} / 5 correct answers</span> <button className="play-again" onClick={()=> window.location.reload()}>Play Again</button></div>) : <button onClick={() =>gameOver()}>Check Answers</button>}
                
            </div>
        </div>
    )
}