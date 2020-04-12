import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    // send the captureSquare action
    // invoke dispatch function and pass in the action we want to run
    // pass an object with key index. index is shorthand for index: index
    // index of the current square, starting at 0 going to 8
    // tells Redux we have clicked on square 4, so the Action can act on it
    // this is the payload, we sent an object with a key of 'index' and a value of what that currently is
    dispatch(game.actions.captureSquare({ index }))
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
