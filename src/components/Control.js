import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { AiFillCaretLeft, AiFillCaretRight,AiFillCaretDown } from "react-icons/ai";
import {FiRotateCcw} from "react-icons/fi"



export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver) 

    return (
        <div className={`controls`}>
            {/* left */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveLeft())
                }}><AiFillCaretLeft/></button>

            {/* right */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveRight())
                }}><AiFillCaretRight/></button>

            {/* rotate */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(rotate())
                }}><FiRotateCcw/></button>

            {/* down */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveDown())
                }}><AiFillCaretDown/></button>

        </div>
    )
}