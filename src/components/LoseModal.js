import React from 'react'

export default function LoseModal(props) {
    const {score, onPress} = props
    return (
        <div id="loseModal" className="modal" onClick={onPress}>
            <h1>You Lose!</h1>
            <h1>Score: {score}</h1>
        </div>
    )
}
