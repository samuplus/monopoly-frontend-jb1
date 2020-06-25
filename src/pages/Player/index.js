import React from 'react';

export default function Player() {
    const playerName = localStorage.getItem('playerName'); 
    const playerColour = localStorage.getItem('playerColour'); 

    return (
        <div className="players">
            <ul>
                <li>
                    <h1> { playerName }</h1>
                    <h3> {playerColour} </h3>
                </li>
            </ul>
            {/* <div className="player">
                <h1>Player</h1>
                <h3>Colour</h3>
            </div>
            <div className="player">
                <h1>Player 2</h1>
                <h3>Colour 2</h3>
            </div> */}
        </div>
    ) 
}