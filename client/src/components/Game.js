import React, {useState, useEffect} from 'react';
import Player1Hand from './Player1Hand';
import Player1Materials from './Player1Materials';
import Player1Tools from './Player1Tools';
import Player2Hand from './Player2Hand';
import Player2Materials from './Player2Materials';
import Player2Tools from './Player2Tools';
import DiscardDeck from './DiscardDeck';
import Deck from './Deck';
import DiscardDeck from './DiscardDeck';
import './game.css';

const Game = ({firstPlayerHand, firstComputerHand, deckAfterDealing}) => {

    const [updatedDeck, setUpdatedDeck] = useState([]);    
    const [player1Hand, setPlayer1Hand] = useState([]); 
    const [player2Hand, setPlayer2Hand] = useState([]);

    const [player1Materials, setPlayer1Materials] = useState([]);
    const [player2Materials, setPlayer2Materials] = useState([]);
    const [player1Tools, setPlayer1Tools] = useState([]);
    const [player2Tools, setPlayer2Tools] = useState([]);
<<<<<<< HEAD

    const [attackedCard, setAttacked] = useState([]);
    const [defenceCard, setDefenceCard] = useState([]);
    const [updatedDiscardDeck, setUpdatedDiscardDeck] = useState([]);
    
    // PLAYER 1 
=======
    const [updatedDiscardDeck, setUpdatedDiscardDeck] = useState([]);
    
    useEffect(() => {
        setUpdatedDeck(deckAfterDealing)
    }, [deckAfterDealing]);

    useEffect(() => {
        setPlayer1Hand(firstPlayerHand)
    }, [firstPlayerHand]);

    useEffect(() => {
        setPlayer2Hand(firstComputerHand)
    }, [firstComputerHand])
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb

    const onMaterialCardClick = function(card){
        const materialNames = player1Materials.map(card => card.name);
        if (!materialNames.includes(card.name)){
            const copiedPlayer1Materials = [...player1Materials, card];
            setPlayer1Materials(copiedPlayer1Materials);
            removeCardFromPlayer(card);
        }
    };

    const onToolCardClick = function(card){
        const copiedPlayer1Tools = [...player1Tools, card];
        setPlayer1Tools(copiedPlayer1Tools);
        removeCardFromPlayer(card);
    };

    // const onAttackCardClick = function(card, materialCard, defenceCard){            // By playing a attackcard(RED) -> check if player2Materials has the opposite MaterialCard on the table. -> if 'true' -> playcard and check if player 2 has opposite defencecard(Green) in Player2Hand -> if true discard both cards attackcard & defencecard (RED & GREEN) and keep player2MaterialCard stays on the table. If not discard Attackcard en MaterialCard. 
    //     if(player2Materials.includes(materialCard)){
    //         if(Player1Hand.includes()){

    //         }
    //     }
    // };

<<<<<<< HEAD
    const onDeckCardClick = function(card){
        if(player1Hand.length < 5){
            const copiedDeck = [...updatedDeck, card];
            setUpdatedDeck(copiedDeck);
            addCardFromDeck(card);
            removeCardFromDeck(card);
        }
    };

=======
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
    const removeCardFromPlayer = function(card){
        const index = player1Hand.indexOf(card);
        const copiedPlayer1Hand = [...player1Hand];
        copiedPlayer1Hand.splice(index, 1);
        setPlayer1Hand(copiedPlayer1Hand); 
    };

<<<<<<< HEAD
    const addCardFromDeck = function(card){
        player1Hand.push(card);
        setPlayer1Hand(player1Hand); 
    };

    const onDiscardCardClick = function(card){
        const copiedPlayer1Hand = [...player1Hand, card];
        setPlayer1Hand(copiedPlayer1Hand);
        removeCardFromPlayer(card);
        addCardToDiscardDeck(card);
    }

    // PLAYER 2

    const onMaterialCardClick2 = function(card){
        if(!player2Materials.includes(card)){
            const copiedPlayer2Materials = [...player2Materials, card];
            setPlayer2Materials(copiedPlayer2Materials);
            removeCardFromPlayer2(card);
        }
    };

    const onToolCardClick2 = function(card){
        const copiedPlayer2Tools = [...player2Tools, card];
        setPlayer2Tools(copiedPlayer2Tools);
        removeCardFromPlayer2(card);
    };

    const onDeckCardClick2 = function(card){
        if(player2Hand.length < 5){const copiedDeck = [...updatedDeck, card];
            setUpdatedDeck(copiedDeck);
            addCardFromDeck2(card);
            removeCardFromDeck(card);
        }
    };

=======
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
    const removeCardFromPlayer2 = function(card){
        const index = player2Hand.indexOf(card);
        const copiedPlayer2Hand = [...player2Hand];
        copiedPlayer2Hand.splice(index, 1);
        setPlayer2Hand(copiedPlayer2Hand); 
    };

<<<<<<< HEAD
    const addCardFromDeck2 = function(card){
        player2Hand.push(card);
        setPlayer2Hand(player2Hand); 
    };

    const onDiscardCardClick2 = function(card){
        const copiedPlayer2Hand = [...player2Hand, card];
        setPlayer2Hand(copiedPlayer2Hand);
        removeCardFromPlayer2(card);
        addCardToDiscardDeck(card);
    }

    //PLAYER1 & PLAYER2

=======
    const onDeckCardClick = function(card){
        const copiedDeck = [...updatedDeck, card];
        setUpdatedDeck(copiedDeck);
        addCardFromDeck(card);
        removeCardFromDeck(card);
    };

>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
    const removeCardFromDeck = function(card){
        const index = updatedDeck.indexOf(card);
        const copiedUpdatedDeck = [...updatedDeck];
        copiedUpdatedDeck.splice(index, 1);
        setUpdatedDeck(copiedUpdatedDeck); 
    };

    const addCardToDiscardDeck = function(card){
        updatedDiscardDeck.push(card);
        setUpdatedDiscardDeck(updatedDiscardDeck); 
    };

    const onDiscardCardClick = function(card){
        const copiedPlayer1Hand = [...player1Hand, card];
        setPlayer1Hand(copiedPlayer1Hand);
        removeCardFromPlayer(card);
        addCardToDiscardDeck(card);
    }

    const onDiscardCardClick2 = function(card){
        const copiedPlayer2Hand = [...player2Hand, card];
        setPlayer2Hand(copiedPlayer2Hand);
        removeCardFromPlayer2(card);
        addCardToDiscardDeck(card);
    }

    const addCardToDiscardDeck = function(card){
        updatedDiscardDeck.push(card);
        setUpdatedDiscardDeck(updatedDiscardDeck); 
    };

    return(
        <div id="grid-container">
            <div className="deck">
                <Deck updatedDeck={updatedDeck} onDeckCardClick={onDeckCardClick} onDeckCardClick2={onDeckCardClick2}/>
            </div>
            <div className="game">
<<<<<<< HEAD
                <div className="player2">
                    <div className="player2-hand">
                        <Player2Hand player2Hand={player2Hand} onMaterialCardClick2={onMaterialCardClick2} onToolCardClick2={onToolCardClick2} onDiscardCardClick2={onDiscardCardClick2}/>
                    </div>
                    <div id="player2-table">
                        <div className="player2-material">
=======
                <div>
                    <div id="player2-table">
                        <div className="computer-material">
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
                            <Player2Materials player2Materials={player2Materials}/>
                        </div>
                        <div className="player2-tools">
                            <Player2Tools player2Tools={player2Tools}/>
                        </div>
                    </div>
<<<<<<< HEAD
=======
                    <p>This is your hand</p>
                        <Player2Hand className="player-hand" player2Hand={player2Hand} onMaterialCardClick2={onMaterialCardClick2} onToolCardClick2={onToolCardClick2} onDiscardCardClick2={onDiscardCardClick2}/>
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
                </div>
                <div class="player">
                    <div id="player-table">
                        <div className="player-material">
                            <Player1Materials player1Materials={player1Materials}/>
                        </div>
                        <div className="player-tools">
                            <Player1Tools player1Tools={player1Tools}/>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="player-hand">
                        <Player1Hand player1Hand={player1Hand} onMaterialCardClick={onMaterialCardClick} onToolCardClick={onToolCardClick} onDiscardCardClick={onDiscardCardClick}/>
                    </div>
=======
                    <p>This is your hand</p>
                        <Player1Hand className="player-hand" player1Hand={player1Hand} onMaterialCardClick={onMaterialCardClick} onToolCardClick={onToolCardClick} onDiscardCardClick={onDiscardCardClick}/>
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
                </div>
            </div>
            <div className="discard">
                <DiscardDeck updatedDiscardDeck={updatedDiscardDeck}/>
            </div>
        </div>
    );

};

export default Game;