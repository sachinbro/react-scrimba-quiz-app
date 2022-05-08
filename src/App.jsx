import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Intro from "./Intro.jsx"
import Quiz from "./Quiz.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [startGame, SetStartGame] = useState(false)

  const handleClick = () => {
    
    SetStartGame(oldVal => !oldVal)
  }
  return (
    <div>
      {
      
      startGame ?
       <Quiz /> : <Intro startGame={handleClick} />
     
    }
    </div>
    
  )
}

export default App
