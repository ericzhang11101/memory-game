import React from 'react'

export default function NewHighScoreModal(props) {
    const {score, onPress} = props
    return (
        <div id="scoreModal" className='modal' onClick={onPress}>
            <h1>New High Score!</h1>
            <h1>{score}</h1>
        </div>
    )
}
