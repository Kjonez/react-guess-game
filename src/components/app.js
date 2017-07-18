import React from 'react';
import Guess from './guess';
import './style.css';

const App = () => (
    <div>
        <h1 id= "game_header">Guessing Game</h1>
        <Guess/>
    </div>
);

export default App;
