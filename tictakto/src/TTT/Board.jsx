import React, { useState } from 'react'
import Square from './Square'
import '../App.css'
const Board = () => {
  const [playerO, setPlayerO] = useState(0);
   const [playerX, setPlayerX] = useState(0);
  const [array, setArray] = useState(Array(9).fill(null))
  const [xturn, setXturn] = useState(false)
  const [counter, setCounter] = useState(0);
  const handleState= (ind) =>{
    if(array[ind] != null){
      return
    }
    const copy = [...array];
    copy[ind] =  xturn ? "X" : "O";
    setArray(copy);
    setCounter(counter+1)
    setXturn(!xturn);       
    if(counter == 8){
      setArray(Array(9).fill(null));
      setCounter(0);
    }  
    console.log(counter)
  }
  const handleReset =() => {
    setArray(Array(9).fill(null))
    setCounter(0)
  }
  const winnerLogic  = () => {
    const checkWin = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let logic of checkWin){
      const[a,b,c] = logic;
      if(array[a] != null && array[a] == array[b] && array[a] == array[c]){
         return array[a]
      }
    }
    return false;
  }
  const isWinner = winnerLogic();
  return (
    <div>
      <div className='board-container'>
        {
          isWinner ? <>
          <h2 style={{color:"lightblue"}}>
            "Boyahhhhhh! player {isWinner} Won "
            </h2> <button className='Reset'>Replay</button>
          </> : (<>
          <div className="container">
          <Square onClick={() => handleState(0)} value={array[0]} />
          <Square onClick={() => handleState(1)}  value={array[1]} />
          <Square onClick={() => handleState(2)}  value={array[2]} />
        </div>
        <div className="container">
          <Square onClick={() => handleState(3)}  value={array[3]} />
          <Square onClick={() => handleState(4)}  value={array[4]} />
          <Square onClick={() => handleState(5)}  value={array[5]} />
        </div>
        <div className="container">
          <Square onClick={() => handleState(6)}  value={array[6]} />
          <Square onClick={() => handleState(7)}  value={array[7]} />
          <Square  onClick={() => handleState(8)}  value={array[8]}/>
        </div>
         <button onClick={handleReset} className='Reset'>
        Reset
      </button>
          </>)
        }
      </div>
    
    </div>
  )
}

export default Board
