import React, {useState, useEffect} from 'react';
import Player1Hand from './Player1Hand';
import Player1Materials from './Player1Materials';
import Player1Tools from './Player1Tools';
import Deck from './Deck';
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

    const onToolCardClick = function(card){
            const copiedPlayer1Tools = [...player1Tools, card];
            setPlayer1Tools(copiedPlayer1Tools);
            removeCardFromPlayer(card)
    };

    const removeCardFromPlayer = function(card){
        const index = player1Hand.indexOf(card)
        const copiedPlayer1Hand = [...player1Hand];
        copiedPlayer1Hand.splice(index, 1)
        setPlayer1Hand(copiedPlayer1Hand); 
    }

    useEffect(() => {
        setUpdatedDeck(deckAfterDealing)
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

 

    return(
        <div id="grid-container">
            <div className="deck">
                <Deck updatedDeck={updatedDeck}/>
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
                            <p>Tool cards</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="player-table">
                        <div className="player-material">
                            <Player1Materials player1Materials={player1Materials}/>
                        </div>
                        <div className="player-tools">
                            <Player1Tools player1Tools={player1Tools}/>
                        </div>
                    </div>
                    <p>This is your hand</p>
                        <Player1Hand className="player-hand" player1Hand={player1Hand} onMaterialCardClick={onMaterialCardClick} onToolCardClick={onToolCardClick}/>
                </div>
            </div>
            <div className="discard">
                <p>This is the discard deck</p>
            </div>
        </div>
    );

};

export default Game;