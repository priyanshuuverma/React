import React, { useState } from 'react'
import Square from './Square'
import './Sq.css'
const Board = () => {
  const [stat, setStat] = useState(Array(9).fill(null))
  const checkWinner = () => {
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let logic of winnerLogic){
      const [ a,b,c]  = logic;
      if(stat[a] !== null && stat[a] == stat[b] && stat[a]==stat[c]){
        return stat[a];
      }
    
    }
      return false;
  }
  const isWinner = checkWinner();
  
  const [isXTurn, setIsXTurn] = useState(false);
  const handleClick = (index) => {
    if(stat[index] != null){
      return;
    }
    index.preventDefault;
    const copyS = [...stat];
    copyS[index] = isXTurn ? 'X' : 'O';
    setStat(copyS);
    setIsXTurn(!isXTurn)
  }
  const handleReset  = () => {
    setStat(Array(9).fill(null))
  }
  return (
    <div className='board-container'>
        {
          isWinner ? <>Player {isWinner} won the game <button className='Reset' onClick={handleReset}>Start Again</button></>:(
            <>
            <div className="board-row">
            <Square onClick={() => handleClick(0)} value={stat[0]} />
            <Square onClick={() => handleClick(1)} value={stat[1]} />
            <Square onClick={() => handleClick(2)} value={stat[2]}/>
        </div>
        <div className="board-row">
            <Square onClick={() => handleClick(3)} value={stat[3]}/>
            <Square onClick={() => handleClick(4)} value={stat[4]}/>
            <Square onClick={() => handleClick(5)} value={stat[5]}/>
        </div>
        <div className="board-row">
            <Square onClick={() => handleClick(6)} value={stat[6]}/>
            <Square onClick={() => handleClick(7)} value={stat[7]}/>
            <Square onClick={() => handleClick(8)} value={stat[8]}/>
        </div>   
        <button className='Reset' onClick={handleReset}>Restart</button>
            </>
          )
        }   
    </div>
  )
}

export default Board
