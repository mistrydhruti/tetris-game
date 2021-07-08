import React from 'react'
import { useSelector } from 'react-redux'

// Displays a message
export default function MessagePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)

  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'GAME OVER'
    isHidden = ''
  } else if (!isRunning) {
    message = 'PAUSE'
    isHidden = ''
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  )
}