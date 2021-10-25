import React, {useState, useEffect} from 'react';
import Player1Hand from './Player1Hand';
import Player1Materials from './Player1Materials';
import './game.css';

const Game = ({firstPlayerHand, firstComputerHand, deckAfterDealing}) => {

    const [updatedDeck, setUpdatedDeck] = useState([]);    
    const [player1Hand, setPlayer1Hand] = useState([]); 
    const [player2Hand, setPlayer2Hand] = useState([]);

    const [player1Materials, setPlayer1Materials] = useState([]);
    const [player2Materials, setPlayer2Materials] = useState([]);
    const [player1Tools, setPlayer1Tools] = useState([]);
    const [player2Tools, setPlayer2Tools] = useState([]);
    

    const onMaterialCardClick = function(card){
        if(!player1Materials.includes(card)){
            const copiedPlayer1Materials = [...player1Materials, card];
            setPlayer1Materials(copiedPlayer1Materials);
            removeCardFromPlayer(card)
        }
    };

    const removeCardFromPlayer = function(card){
        const index = player1Hand.indexOf(card)
        const copiedPlayer1Hand = [...player1Hand];
        copiedPlayer1Hand.splice(index, 1)
        setPlayer1Hand(copiedPlayer1Hand); 
    }

    useEffect(() => {
        setPlayer1Hand(deckAfterDealing)
    }, [deckAfterDealing]);

    useEffect(() => {
        setPlayer1Hand(firstPlayerHand)
    }, [firstPlayerHand]);

    useEffect(() => {
        setPlayer2Hand(firstComputerHand)
    }, [firstComputerHand])
    // const playerCards = firstPlayerHand(allCards).map((card) => {
    //     return(
    //         <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/><button type="play">Play</button><button type="discard">Discard</button></li>
    //     )
    // });

    // const computerCards = firstComputerHand(allCards).map((card) => {
    //     return(
    //         <li className="computer-card" key={card._id}><img src={card.img} alt={card.name}/></li>
    //     )
    // });

    // const cardsDeck = deckAfterDealing(allCards).map((card) => {
    //     return(
    //         <li className="deck-card" key={card._id}><img src={"./images/back_image/castle.png"} alt={card.name}/></li>
    //     )
    // });

    return(
        <div id="grid-container">
            <div className="deck">
                <p>This is the deck</p>
                    <ul className="dealing-deck">
                        {/* {cardsDeck} */}
                    </ul>
            </div>
            <div className="game">
                <div>
                    <p>This is computer hand</p>
                        <ul className="computer-hand">
                            {/* {computerCards} */}
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
                            <Player1Materials player1Materials={player1Materials}/>
                        </div>
                        <div className="player-tools">
                            <p>Tools cards</p>
                        </div>
                    </div>
                    <p>This is your hand</p>
                        <Player1Hand className="player-hand" player1Hand={player1Hand} onMaterialCardClick={onMaterialCardClick}/>
                </div>
            </div>
            <div className="discard">
                <p>This is the discard deck</p>
            </div>
        </div>
    );

};

export default Game;