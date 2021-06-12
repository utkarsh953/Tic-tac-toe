import './App.css'
import React, { useState, useEffect } from 'react'
import Square from './components/Square'

function App() {
  const initialState = Array(9).fill('')
  const [isXChance, setIsXChance] = useState(false)
  const [gameState, setGameState] = useState(initialState)

  const clearGame = () => {
    setGameState(initialState)
  }

  const onSquareClicked = (index) => {
    let copiedState = Array.from(gameState)
    copiedState[index] = isXChance ? 'X' : 'O'
    setGameState(copiedState)
    setIsXChance(!isXChance)
    console.log(gameState)
  }

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        console.log(gameState[a])
        return gameState[a]
      }
    }
    return null
  }
  useEffect(() => {
    let winner = checkWinner()
    if (winner) {
      clearGame()
      alert(`Congrats! Player ${winner} won the Game !`)
    }
    let result = gameState.every(function (el) {
      return el !== ''
    })
    if (result) {
      clearGame()
      alert(`Its a tie!`)
    }
  }, [gameState, checkWinner, clearGame])
  return (
    <div className='container'>
      <h2 style={{ color: 'grey' }}>Tic Tac Toe</h2>
      <div className='sqaure__row'>
        <Square state={gameState[0]} click={() => onSquareClicked(0)} />
        <Square state={gameState[1]} click={() => onSquareClicked(1)} />
        <Square state={gameState[2]} click={() => onSquareClicked(2)} />
      </div>
      <div className='sqaure__row'>
        <Square state={gameState[3]} click={() => onSquareClicked(3)} />
        <Square state={gameState[4]} click={() => onSquareClicked(4)} />
        <Square state={gameState[5]} click={() => onSquareClicked(5)} />
      </div>
      <div className='sqaure__row'>
        <Square state={gameState[6]} click={() => onSquareClicked(6)} />
        <Square state={gameState[7]} click={() => onSquareClicked(7)} />
        <Square state={gameState[8]} click={() => onSquareClicked(8)} />
      </div>
    </div>
  )
}

export default App
