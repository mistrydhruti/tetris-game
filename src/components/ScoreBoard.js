import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pause, resume, restart } from '../actions'


export default function ScoreBoard(props) {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { score, isRunning, gameOver } = game

    return (
        <div className="score-board">
            <div>SCORE:{ score }</div>
            <button className="score-board-button" onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? 'PAUSE' : 'PLAY'}</button>
            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}>RESTART</button>
        </div>
    )
}