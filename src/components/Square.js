import React from 'react'
import './Square.css'

const Square = (props) => {
  return (
    <button className='square' onClick={props.click}>
      {props.state}
    </button>
  )
}

export default Square
