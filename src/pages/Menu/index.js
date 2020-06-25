import React, { useState } from 'react';
import './styles.css';
import mnplImg from '../../assets/monopolyTitle.png';
import uncle from '../../assets/kisspng-rich-uncle-pennybags-monopoly-party-game-monopoly-monopoly-man-5b22af6d52e541.5594076215289997893396.png'
import board from '../../assets/monopoly3.png';
import { FiPlayCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Menu() {
    const playerId = null;
    const [playerName, setPlayerName] = useState(''); 
    const [playerColour, setPlayerColour] = useState(''); 
    const playerBalance = 0;
    const playerBoardPosition = 0;
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();     // prevent default behaviour, including refreshing the page when the form is submitted
        
        const data = {
            playerId,
            playerName,
            playerColour,
            playerBalance,
            playerBoardPosition
        }
        
        console.log(data);
        try {
            const response = await api.post('/api/players', data);
            localStorage.setItem('playerId', response.data.playerId)
            localStorage.setItem('playerName', response.data.playerName);
            localStorage.setItem('playerColour', response.data.playerColour);
            alert(`Your player ${response.data.playerName} with ID ${response.data.playerId} has been created!`);
            history.push('/player');
        } catch (err) {
            alert("Error on registering new player. Try again and make sure you are not leaving any blank fields.");
        }
    }

    return (
        <div className="menu-container">
            <section className="form">
                <img src={mnplImg} alt="Rich Uncle"/>

                <form onSubmit={handleRegister}>
                    <h1>Create a player</h1>

                    <input 
                        placeholder="Name"
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}       // e.target.value represents the input value. This value is assigned to playerName in this case. This is done via an arrow function associated with the event
                    />
                    <input
                        placeholder="Colour"
                        value={playerColour}
                        onChange={e => setPlayerColour(e.target.value)}
                    />
                    {/* <button className= "regbutton" type="submit">REGISTER</button> */}
                    
                    <button className="button" type="submit">PLAY</button>
                    
                    {/* <div>
                        <FiPlayCircle size={30} color="E02041" />   
                    </div> */}
                </form>

            </section>

        </div>
    );
}