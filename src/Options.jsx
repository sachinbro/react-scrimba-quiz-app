import React from "react"

export default function Options(props){

    
    const [marked, setMarked] = React.useState(false)
    const [isCorrect, setIsCorrect] = React.useState(false)
    const [isIncorrect, setIsIncorrect] = React.useState()

    function optionSelected(){
        if(!marked && !props.marked){
        setMarked(true)
        props.checkAnswer(props.item)
        
        }
        
    }

    React.useEffect(() =>{
        if(props.gameStatus){
            if(props.item === props.correctAnswer){
                setIsCorrect(true)
                console.log("correct")
            }
            else if(marked && props.item !== props.correctAnswer) {
                setIsIncorrect(true)
            }
        }

    },[props.gameStatus])

    const style = {
        cursor: "not-allowed",
        backgroundColor: "#D6DBF5"
    }



    return (
        <div className={ isCorrect ? "option-items correct" : isIncorrect? "option-items incorrect": "option-items"} style={(marked && props.marked) ? style : {}} onClick={() => optionSelected()}>{props.item}</div>
    )
}