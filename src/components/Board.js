import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
  // Use the 'squares' state from the game reducer
  // This function takes the entire store from Redux and returns something from that store 
  // It is an implicit return that returns the array of squares
  const squares = useSelector((store) => store.game.squares)

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
