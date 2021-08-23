import React from 'react'

export default function Header(props) {
    const {score, highScore} = props
    return (
        <div className="header-main">
            <div>
                <h1>Dota Memory Game</h1>
                <h2>Get points by clicking unique heroes</h2>
            </div>
            <div>
                <div className="header-secondary">
                    <h2>Score: </h2>
                    <h2>{score}</h2>
                </div>
                <div className="header-secondary">
                    <h2>High Score: </h2>
                    <h2>{highScore}</h2>
                </div>
            </div>
        </div>
    )
}
