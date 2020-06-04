import React, { useState } from 'react';
import './styles.css';
import mnplImg from '../../assets/monopolyTitle.png';
import uncle from '../../assets/kisspng-rich-uncle-pennybags-monopoly-party-game-monopoly-monopoly-man-5b22af6d52e541.5594076215289997893396.png'
import board from '../../assets/monopoly3.png';
import { FiPlayCircle } from 'react-icons/fi';

import api from '../../services/api';

export default function Menu() {

    const [playerName, setPlayerName] = useState(''); 
    const [playerColour, setPlayerColour] = useState(''); 
    const playerBalance = 2500;
    const playerBoardPosition = 0;

    async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            playerName,
            playerColour,
            playerBalance,
            playerBoardPosition
        }
        
        console.log(data);
        try {
            // const response = await api.post('/api/players/new', data);
            api.post('/api/players/new', data);
            // alert(`Your player id is ${response.data}`);
        } catch (err) {
            alert("Error on registering new player. Try again");
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
                        onChange={e => setPlayerName(e.target.value)}
                    />
                    <input
                        placeholder="Colour"
                        value={playerColour}
                        onChange={e => setPlayerColour(e.target.value)}
                    />
                    <button className= "regbutton" type="submit">REGISTER</button>
                    <button className="button" type="submit">PLAY</button>
                    
                    <div>
                        <FiPlayCircle size={30} color="E02041" />   
                    </div>
                </form>

            </section>
            <img className="boardimg" src={board} alt="Monopoly" />
        </div>
    );
}