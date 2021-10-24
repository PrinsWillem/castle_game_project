import React from 'react';
import './game.css';

const Game = ({allCards, firstPlayerHand, firstComputerHand, deckAfterDealing}) => {

    const playerCards = firstPlayerHand(allCards).map((card) => {
        return(
            <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/></li>
        )
    });

    const computerCards = firstComputerHand(allCards).map((card) => {
        return(
            <li className="computer-card" key={card._id}><img src="./images/back_image/castle.png" alt={card.name}/></li>
        )
    });

    const cardsDeck = deckAfterDealing(allCards).map((card) => {
        return(
            <li className="deck-card" key={card._id}><img src={"./images/back_image/castle.png"} alt={card.name}/></li>
        )
    });

    return(
        <div id="grid-container">
            <div className="deck">
                <p>This is the deck</p>
                    <ul className="dealing-deck">
                        {cardsDeck}
                    </ul>
            </div>
            <div className="game">
                <div>
                    <p>This is computer hand</p>
                        <ul className="computer-hand">
                            {computerCards}
                        </ul>
                    <div id="computer-table">
                        <div className="computer-material">
                            <p>Material cards</p>
                        </div>
                        <div className="computer-tools">
                            <p>Tools cards</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="player-table">
                        <div className="player-material">
                            <p>Material cards</p>
                        </div>
                        <div className="player-tools">
                            <p>Tools cards</p>
                        </div>
                    </div>
                    <p>This is your hand</p>
                        <ul className="player-hand">
                            {playerCards}
                        </ul>
                </div>
            </div>
            <div className="discard">
                <p>This is the discard deck</p>
            </div>
        </div>
    );

};

export default Game;