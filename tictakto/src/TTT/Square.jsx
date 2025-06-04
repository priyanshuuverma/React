import React from 'react'
import './Sq.css'
const Square = (props) => {
  return (
    <div
    style={{color: props.value == 'X' ? "Red" : "White"}}
     onClick={props.onClick}
     className='square'>
      <h2>{props.value}</h2>
    </div>
  )
}

export default Square
