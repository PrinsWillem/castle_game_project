import React from 'react';
import './game.css';

const Game = ({allCards, firstHand}) => {

    const playerCards = firstHand(allCards).map((card) => {
        return(
            <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/></li>
        )
    });

    return(
        <div>
            <p>This is computer hand</p>
                <ul className="player-hand">
                    {playerCards}
                </ul>
            <p>This is your hand</p>
                <ul className="player-hand">
                    {playerCards}
                </ul>
        </div>
    );

};

export default Game;