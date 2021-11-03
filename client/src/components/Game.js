import React, {useState, useEffect} from 'react';
import Player1Hand from './Player1Hand';
import Player1Materials from './Player1Materials';
import Player1Tools from './Player1Tools';
import Player2Hand from './Player2Hand';
import Player2Materials from './Player2Materials';
import Player2Tools from './Player2Tools';
import Player1Points from './Player1Points';
import Player2Points from './Player2Points';
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

    const [player1Attack, setPlayer1Attack] = useState([]);
    const [player2Attack, setPlayer2Attack] = useState([]);
    const [player1Defense, setPlayer1Defense] = useState([]);
    const [player2Defense, setPlayer2Defense] = useState([]);

    const [gameWon, setGameWon] = useState("none");
    
    // PLAYER 1
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

    const onAttackCardClick = function(card){
        setPlayer1Attack(card);
        const materialNames = player2Materials.map(card => card.name);
        const defenseCard = player2Hand.map(card => card.defence);
        if(player2Materials.length > 0){
            if(materialNames.includes(card.attacks) && !defenseCard.includes(card.name)){
                removeCardFromPlayer(card);
                addCardToDiscardDeck(card);
                const card2remove = materialNames.indexOf(card.attacks);
                const copiedPlayer2Materials = [...player2Materials];
                copiedPlayer2Materials.splice(card2remove, 1);
                setPlayer2Materials(copiedPlayer2Materials);
            } else if(materialNames.includes(card.attacks) && defenseCard.includes(card.name)){
                const copiedPlayer2Materials = [...player2Materials, card];
                setPlayer2Materials(copiedPlayer2Materials);
                removeCardFromPlayer(card);
            }
        }
    };

    const onDefenseCardClick = function(card){
        setPlayer1Defense(card);
        const materialNames = player1Materials.map(card => card.name);
        if(materialNames.includes(card.defence)){
            removeCardFromPlayer(card);
            addCardToDiscardDeck(card);
            const card2remove = materialNames.indexOf(card.defence);
            const copiedPlayer1Materials = [...player1Materials];
            copiedPlayer1Materials.splice(card2remove, 1);
            setPlayer1Materials(copiedPlayer1Materials);
        }
    };

    const onDeckCardClick = function(card){
        if(player1Hand.length < 5){
            const copiedDeck = [...updatedDeck, card];
            setUpdatedDeck(copiedDeck);
            addCardFromDeck(card);
            removeCardFromDeck(card);
        }
    };

    const removeCardFromPlayer = function(card){
        const index = player1Hand.indexOf(card);
        const copiedPlayer1Hand = [...player1Hand];
        copiedPlayer1Hand.splice(index, 1);
        setPlayer1Hand(copiedPlayer1Hand);
    };

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
        const materialNames = player2Materials.map(card => card.name);
        if (!materialNames.includes(card.name)){
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

    const onAttackCardClick2 = function(card){
        setPlayer2Attack(card);
        const materialNames = player1Materials.map(card => card.name);
        const defenseCard = player1Hand.map(card => card.defence);
        if(player1Materials.length > 0){
            if(materialNames.includes(card.attacks) && !defenseCard.includes(card.name)){
                removeCardFromPlayer2(card);
                addCardToDiscardDeck(card);
                const card2remove = materialNames.indexOf(card.attacks);
                const copiedPlayer1Materials = [...player1Materials];
                copiedPlayer1Materials.splice(card2remove, 1);
                setPlayer1Materials(copiedPlayer1Materials);
            } else if(materialNames.includes(card.attacks) && defenseCard.includes(card.name)){
                const copiedPlayer1Materials = [...player1Materials, card];
                setPlayer1Materials(copiedPlayer1Materials);
                removeCardFromPlayer2(card);
            }
        }
    };

    const onDefenseCardClick2 = function(card){
        setPlayer2Defense(card);
        const materialNames = player2Materials.map(card => card.name);
        if(materialNames.includes(card.defence)){
            removeCardFromPlayer2(card);
            addCardToDiscardDeck(card);
            const card2remove = materialNames.indexOf(card.defence);
            const copiedPlayer2Materials = [...player2Materials];
            copiedPlayer2Materials.splice(card2remove, 1);
            setPlayer2Materials(copiedPlayer2Materials);
        }
    };

    const onDeckCardClick2 = function(card){
        if(player2Hand.length < 5){const copiedDeck = [...updatedDeck, card];
            setUpdatedDeck(copiedDeck);
            addCardFromDeck2(card);
            removeCardFromDeck(card);
        }
    };

    const removeCardFromPlayer2 = function(card){
        const index = player2Hand.indexOf(card);
        const copiedPlayer2Hand = [...player2Hand];
        copiedPlayer2Hand.splice(index, 1);
        setPlayer2Hand(copiedPlayer2Hand);
    };

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
    const removeCardFromDeck = function(card){
        const index = updatedDeck.indexOf(card);
        const copiedUpdatedDeck = [...updatedDeck];
        copiedUpdatedDeck.splice(index, 1);
        setUpdatedDeck(copiedUpdatedDeck);
    };

    const addCardToDiscardDeck = function(card){
        updatedDeck.unshift(card);
        setUpdatedDeck(updatedDeck);
    };

    // WINNER
    const assignWinner = function(){
        const castleMaterialRequired = ['Labour', 'Money', 'Mortar', 'Stone', 'Wood'];
        const materialNamesPlayer1 = player1Materials.map(card => card.name).sort();
        const materialNamesPlayer2 = player2Materials.map(card => card.name).sort();
        
        let sum1 = player1Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        let sum2 = player2Tools.map(card => card.value).reduce((c, d) => c + d, 0);

        if(castleMaterialRequired.join() === materialNamesPlayer1.join() && sum1 >= 20){
            setGameWon("Player1")
        } else if(castleMaterialRequired.join() === materialNamesPlayer2.join() && sum2 >= 20){
            setGameWon("Player2")
        }
    };

    const handleStartGameClick = () => {
        window.location.reload();
    }

    // USE EFFECT
    useEffect(() => {
        setUpdatedDeck(deckAfterDealing)
    }, [deckAfterDealing]);

    useEffect(() => {
        setPlayer1Hand(firstPlayerHand)
    }, [firstPlayerHand]);

    useEffect(() => {
        setPlayer2Hand(firstComputerHand)
    }, [firstComputerHand]);

    useEffect(() => {
        assignWinner()
        //eslint-disable-next-line
    }, [player1Materials, player2Materials, player1Tools, player2Tools]);
    
    if(gameWon === "Player1"){
        return(
            <div className="winner">
                <img src="./images/index.png" height="475" alt="Winner"/>
                <h1>Player 1 wins</h1>
                <button className="play-button" onClick={handleStartGameClick}>Start a new Castle</button>
            </div>
        )
    }else if(gameWon === "Player2"){
        return(
            <div className="winner">
                <img src="./images/index.png" height="475" alt="Winner"/>
                <h1>Player 2 wins</h1>
                <button className="play-button" onClick={handleStartGameClick}>Start a new Castle</button>
            </div>
        )
    }else{

        return(
            <div id="grid-container">
                <div className="deck">
                    <Deck updatedDeck={updatedDeck} onDeckCardClick={onDeckCardClick} onDeckCardClick2={onDeckCardClick2}/>
                </div>
                <div className="game">
                    <div className="player2">
                        <div className="player2-hand">
                            <Player2Hand player2Hand={player2Hand} onMaterialCardClick2={onMaterialCardClick2} onToolCardClick2={onToolCardClick2} onAttackCardClick2={onAttackCardClick2} onDefenseCardClick2={onDefenseCardClick2} onDiscardCardClick2={onDiscardCardClick2} player2Attack={player2Attack} player2Defense={player2Defense}/>
                        </div>
                        <div id="player2-table">
                            <div className="player2-material">
                                <div className="player-container">
                                    <Player2Materials player2Materials={player2Materials}/>
                                </div>
                            </div>
                            <div className="player2-tools">
                                <div className="player-container">
                                    <Player2Tools player2Tools={player2Tools}/>
                                        <Player2Points player2Tools={player2Tools}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="player">
                        <div id="player-table">
                            <div className="player-material">
                                <div className="player-container">
                                    <Player1Materials player1Materials={player1Materials}/>
                                </div>
                            </div>
                            <div className="player-tools">
                                <div className="player-container">
                                    <Player1Tools player1Tools={player1Tools}/>
                                        <Player1Points player1Tools={player1Tools}/>
                                </div>
                            </div>
                        </div>
                        <div className="player-hand">
                            <Player1Hand player1Hand={player1Hand} onMaterialCardClick={onMaterialCardClick} onToolCardClick={onToolCardClick} onAttackCardClick={onAttackCardClick} onDefenseCardClick={onDefenseCardClick} onDiscardCardClick={onDiscardCardClick} player1Attack={player1Attack} player1Defense={player1Defense}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Game;