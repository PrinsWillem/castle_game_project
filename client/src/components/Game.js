import React, {useState, useEffect} from 'react';
import Player1Hand from './Player1Hand';
import Player1Materials from './Player1Materials';
import Player1Tools from './Player1Tools';
import Player2Hand from './Player2Hand';
import Player2Materials from './Player2Materials';
import Player2Tools from './Player2Tools';
import Player1Points from './Player1Points';
import Player2Points from './Player2Points';
import './Game.css';
import './Player1Hand.css';
import './Player1Materials.css';
import './Player1Tools.css';
import './Player2Hand.css';
import './Player2Materials.css';
import './Player2Tools.css';
import './PlayerPoints.css';
import Battlefield from './Battlefield';

const Game = ({firstPlayerHand, firstComputerHand, deckAfterDealing}) => {

    // USE STATE
    const [updatedDeck, setUpdatedDeck] = useState([]); // 1 State [updatedDeck]
    const [player1Hand, setPlayer1Hand] = useState([]); // 2 State [player1Hand]
    const [player2Hand, setPlayer2Hand] = useState([]); // 3 State [player2Hand]

    const [player1Materials, setPlayer1Materials] = useState([]); // 4 State [player1Materials]
    const [player2Materials, setPlayer2Materials] = useState([]); // 5 State [player2Materials]

    const [player1Tools, setPlayer1Tools] = useState([]);   // 6 State [player1Tools]
    const [player2Tools, setPlayer2Tools] = useState([]);   // 7 State [player2Tools]

    const [player1Attack, setPlayer1Attack] = useState([]); // 8 State [player1Attack]
    const [player2Attack, setPlayer2Attack] = useState([]); // 9 State [player2Attack]
    const [player1Defense, setPlayer1Defense] = useState([]); // 10 State [player1Defense]
    const [player2Defense, setPlayer2Defense] = useState([]); // 11 State [player2Defense]
    const [gamePlayDefenceCard, setGamePlayDefenceCard] = useState(false); // 12 State [gamePlayDefenceCard]

    const [gamePlayPlunderCard, setGamePlayPlunderCard] = useState(false); // 13 State [gamePlayPlunderCard]

    const [gameBattlefield, setGameBattlefield] = useState([]); // 14 State [gameBattlefield]

    const [gameTurnPlayers, setGameTurnPlayers] = useState(true); // 15 State [gameTurnPlayers]
    
    const [gameWon, setGameWon] = useState("none"); // 16 State [gameWon]
    
    // USE EFFECT
    useEffect(() => { // 16 Effect
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

    //PLAYER CLICK FUNCTIONS

    const onMaterialCardClick = function(card){                                                                     ////// [MATERIALCARD CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){       ////
            const materialNames = player1Materials.map(card => card.name);                                          //
            if (!materialNames.includes(card.name)){                                                                //
                const copiedPlayer1Materials = [...player1Materials, card];                                         //
                setPlayer1Materials(copiedPlayer1Materials);                                                        // 
                onDeckCardClick(updatedDeck[0]);                                                                    // PLAYER 1
                addCardFromDeck(updatedDeck[0]);                                                                    //
                removeCardFromPlayer(card);                                                                         //
                removeCardFromDeck(updatedDeck[0]);                                                                 //
                setGameTurnPlayers(false);                                                                          //
            }                                                                                                       //
        }else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){////
            const materialNames = player2Materials.map(card => card.name);                                          //
            if (!materialNames.includes(card.name)){                                                                //
                const copiedPlayer2Materials = [...player2Materials, card];                                         //
                setPlayer2Materials(copiedPlayer2Materials);                                                        // 
                onDeckCardClick(updatedDeck[0]);                                                                    // PLAYER 2
                addCardFromDeck(updatedDeck[0]);                                                                    //
                removeCardFromPlayer(card);                                                                         //
                removeCardFromDeck(updatedDeck[0]);                                                                 //
                setGameTurnPlayers(true);                                                                           //
            }                                                                                                       //
        }                                                                                                           ////
    };                                                                                                              //////

    const onToolCardClick = function(card){                                                                         ////// [TOOLCARD CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){       ////
            const copiedPlayer1Tools = [...player1Tools, card];                                                     //
            setPlayer1Tools(copiedPlayer1Tools);                                                                    //
            onDeckCardClick(updatedDeck[0]);                                                                        // 
            addCardFromDeck(updatedDeck[0]);                                                                        // PLAYER 1
            removeCardFromPlayer(card);                                                                             //
            removeCardFromDeck(updatedDeck[0]);                                                                     //
            setGameTurnPlayers(false);                                                                              //
        }else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){////
            const copiedPlayer2Tools = [...player2Tools, card];                                                     //
            setPlayer2Tools(copiedPlayer2Tools);                                                                    //
            onDeckCardClick(updatedDeck[0]);                                                                        //
            addCardFromDeck(updatedDeck[0]);                                                                        //  PLAYER 2
            removeCardFromPlayer(card);                                                                             //
            removeCardFromDeck(updatedDeck[0]);                                                                     //
            setGameTurnPlayers(true);                                                                               //
        }                                                                                                           ////
    };                                                                                                              //////

    const onPlundercardClick = function(card){                                                                          ////// [PLUNDERCARD CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){           ////
            const battlefieldNames = gameBattlefield.map(card => card.name);                                            //
            if(player2Materials.length > 0 || player2Tools.length > 0){                                                 //
                if(!battlefieldNames.includes(card.name)){                                                              //
                    const copiedBattlefield = [...gameBattlefield, card];                                               //
                    setGameBattlefield(copiedBattlefield);                                                              //  PLAYER 1
                    removeCardFromPlayer(card);                                                                         //
                    setGamePlayPlunderCard(true);                                                                       //
                }                                                                                                       //
            }                                                                                                           //  
        } else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){   ////
            const battlefieldNames = gameBattlefield.map(card => card.name);                                            //
            if(player1Materials.length > 0 || player1Tools.length > 0){                                                 //
                if(!battlefieldNames.includes(card.name)){                                                              //
                    const copiedBattlefield = [...gameBattlefield, card];                                               //  
                    setGameBattlefield(copiedBattlefield);                                                              //  PLAYER 2
                    removeCardFromPlayer(card);                                                                         //
                    setGamePlayPlunderCard(true);                                                                       //
                }                                                                                                       //
            }                                                                                                           //
        }                                                                                                               ////
    };                                                                                                                  //////

    const onCardToPlunderOtherPlayerClick = function(card){                                                             ////// [CARD TO PLUNDER CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === true) && (gamePlayDefenceCard === false)){            ////
            const materialNames = player1Materials.map(card => card.name);                                              //
            if(card.type === "material"){                                                                               //
                if(!materialNames.includes(card.name)){                                                                 //
                    const copiedPlayer1Materials = [...player1Materials, card];                                         //                                       
                    setPlayer1Materials(copiedPlayer1Materials);                                                        //    
                    removeCardFromPlayerMaterials(card);                                                                //
                    removeCardPlunderFromBattlefield(card)                                                              //                                                                                           
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(false);                                                                          //      
                    setGamePlayPlunderCard(false);                                                                      //    
                } else if(materialNames.includes(card.name)){                                                           ///    
                    const copiedPlayer1Hand = [...player1Hand, card];                                                   //    
                    setPlayer1Hand(copiedPlayer1Hand);                                                                  //    
                    removeCardFromPlayerMaterials(card);                                                                //
                    removeCardPlunderFromBattlefield(card)                                                              //  PLAYER 1                                              
                    setGameTurnPlayers(false);                                                                          //    
                    setGamePlayPlunderCard(false);                                                                      //    
                }                                                                                                       //
            } else if(card.type === "tool" || card.type === "plan"){                                                    ///
                const copiedPlayer1Tools = [...player1Tools, card];                                                     //
                setPlayer1Tools(copiedPlayer1Tools);                                                                    //
                removeCardFromPlayerTools(card);                                                                        //
                removeCardPlunderFromBattlefield(card)                                                                  //
                removeCardFromDeck(updatedDeck[0]);                                                                     //
                setGameTurnPlayers(false);                                                                              //
                setGamePlayPlunderCard(false);                                                                          //
            }                                                                                                           //
        } else if((gameTurnPlayers === false) && (gamePlayPlunderCard === true) && (gamePlayDefenceCard === false)){    ////
            const materialNames = player2Materials.map(card => card.name);                                              //  
            if(card.type === "material"){                                                                               //
                if(!materialNames.includes(card.name)){                                                                 //  
                    const copiedPlayer2Materials = [...player2Materials, card];                                         //    
                    setPlayer2Materials(copiedPlayer2Materials);                                                        //    
                    removeCardFromPlayerMaterials(card);                                                                //
                    removeCardPlunderFromBattlefield(card)                                                              //
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(true);                                                                           //    
                    setGamePlayPlunderCard(false);                                                                      //    
                } else if(materialNames.includes(card.name)){                                                           ///    
                    const copiedPlayer2Hand = [...player2Hand, card];                                                   //    
                    setPlayer2Hand(copiedPlayer2Hand);                                                                  //    
                    removeCardFromPlayerMaterials(card);                                                                //    
                    removeCardPlunderFromBattlefield(card)                                                              //  PLAYER 2
                    setGameTurnPlayers(true);                                                                           //    
                    setGamePlayPlunderCard(false);                                                                      //    
                }                                                                                                       //
            } else if(card.type === "tool" || card.type === "plan"){                                                    ///
                const copiedPlayer2Tools = [...player2Tools, card];                                                     //
                setPlayer2Tools(copiedPlayer2Tools);                                                                    //
                removeCardFromPlayerTools(card);                                                                        //
                removeCardPlunderFromBattlefield(card)                                                                  //
                removeCardFromDeck(updatedDeck[0]);                                                                     //
                setGameTurnPlayers(true);                                                                               //
                setGamePlayPlunderCard(false);                                                                          //
            }                                                                                                           //    
        }                                                                                                               ////
    }                                                                                                                   //////

    const onPlancardClick = function(card){                                                                             ////// [PLAN CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){           ////
            if(player1Tools.length > 0){                                                                                //
                const toolNames = player1Tools.map(card => card.name);                                                  //
                if(!toolNames.includes(card.name)){                                                                     //
                    const copiedPlayer1Tools = [...player1Tools, card];                                                 //
                    setPlayer1Tools(copiedPlayer1Tools);                                                                //
                    onDeckCardClick(updatedDeck[0]);                                                                    // PLAYER 1
                    addCardFromDeck(updatedDeck[0]);                                                                    //
                    removeCardFromPlayer(card);                                                                         //
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(false);                                                                          //
                }                                                                                                       //
            }                                                                                                           //
        } else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){   ////
            if(player2Tools.length > 0){                                                                                //
                const toolNames = player2Tools.map(card => card.name);                                                  //
                if(!toolNames.includes(card.name)){                                                                     //
                    const copiedPlayer2Tools = [...player2Tools, card];                                                 //
                    setPlayer2Tools(copiedPlayer2Tools);                                                                //
                    onDeckCardClick(updatedDeck[0]);                                                                    // PLAYER 1
                    addCardFromDeck(updatedDeck[0]);                                                                    //
                    removeCardFromPlayer(card);                                                                         //
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(true);                                                                           //
                }                                                                                                       //
            }                                                                                                           //
        }                                                                                                               ////
    }                                                                                                                   //////

    const onAttackCardClick = function(card){                                                                           ////// [ATTACKCARD CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){           ////
            setPlayer1Attack(card);                                                                                     //
            const materialNames = player2Materials.map(card => card.name);                                              //
            const defenseCard = player2Hand.map(card => card.defence);                                                  //  
            if(player2Materials.length > 0){                                                                            //
                if(materialNames.includes(card.attacks) && !defenseCard.includes(card.name)){                           //
                    onDeckCardClick(updatedDeck[0]);                                                                    //
                    addCardFromDeck(updatedDeck[0]);                                                                    //  
                    removeCardFromPlayer(card);                                                                         //  
                    addCardToDiscardDeck(card);                                                                         //                  
                    const card2remove = materialNames.indexOf(card.attacks);                                            //
                    const copiedPlayer2Materials = [...player2Materials];                                               //
                    copiedPlayer2Materials.splice(card2remove, 1);                                                      //
                    addCardToDiscardDeck(player2Materials[card2remove]);                                                // PLAYER 1
                    setPlayer2Materials(copiedPlayer2Materials);                                                        // 
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(false);                                                                          //
                    setGamePlayDefenceCard(false);                                                                      //
                } else if(materialNames.includes(card.attacks) && defenseCard.includes(card.name)){                     //
                    const card2move = materialNames.indexOf(card.attacks);
                    const copiedBattlefield = [...gameBattlefield, card, player2Materials[card2move]];
                    setGameBattlefield(copiedBattlefield)
                    const copiedPlayer2Materials = [...player2Materials];
                    copiedPlayer2Materials.splice(card2move, 1);
                    setPlayer2Materials(copiedPlayer2Materials); 
                    onDeckCardClick(updatedDeck[0]);                                                                    //
                    addCardFromDeck(updatedDeck[0]);                                                                    //
                    removeCardFromPlayer(card);                                                                         //
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(false);                                                                          //
                    setGamePlayDefenceCard(true);                                                                       //
                }                                                                                                       //
            }                                                                                                           //
        }else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === false)){    ////
            setPlayer2Attack(card);                                                                                     //
            const materialNames = player1Materials.map(card => card.name);                                              //
            const defenseCard = player1Hand.map(card => card.defence);                                                  //
            if(player1Materials.length > 0){                                                                            //
                if(materialNames.includes(card.attacks) && !defenseCard.includes(card.name)){                           //
                    onDeckCardClick(updatedDeck[0]);                                                                    //
                    addCardFromDeck(updatedDeck[0]);                                                                    //
                    removeCardFromPlayer(card);                                                                         //
                    addCardToDiscardDeck(card);                                                                         //
                    const card2remove = materialNames.indexOf(card.attacks);                                            //
                    const copiedPlayer1Materials = [...player1Materials];                                               //
                    copiedPlayer1Materials.splice(card2remove, 1);                                                      //
                    addCardToDiscardDeck(player1Materials[card2remove]);                                                // PLAYER 2
                    setPlayer1Materials(copiedPlayer1Materials);                                                        //
                    removeCardFromDeck(updatedDeck[0]);                                                                 //
                    setGameTurnPlayers(true);                                                                           //
                    setGamePlayDefenceCard(false);                                                                      //
                } else if(materialNames.includes(card.attacks) && defenseCard.includes(card.name)){                     //
                    const card2move = materialNames.indexOf(card.attacks);
                    const copiedBattlefield = [...gameBattlefield, card, player1Materials[card2move]];
                    setGameBattlefield(copiedBattlefield)
                    const copiedPlayer1Materials = [...player1Materials];
                    copiedPlayer1Materials.splice(card2move, 1);
                    setPlayer1Materials(copiedPlayer1Materials); 
                    onDeckCardClick(updatedDeck[0]);                                                                    //
                    addCardFromDeck(updatedDeck[0]);                                                                    //  
                    removeCardFromPlayer(card);                                                                         //
                    removeCardFromDeck(updatedDeck[0]);                                                                 //                                               
                    setGameTurnPlayers(true);                                                                           //
                    setGamePlayDefenceCard(true);                                                                       //
                }                                                                                                       //
            }                                                                                                           //
        }                                                                                                               ////
    };                                                                                                                  //////

    const onDefenseCardClick = function(card){                                                                          ////// [DEFENCECARD CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === true)){            ////
            setPlayer1Defense(card);
            const battlefieldNames = gameBattlefield.map(card => card.name);
            const battlefieldTypes = gameBattlefield.map(card => card.type);                                                                                    //
            if(battlefieldNames.includes(card.defence)){                                                                   //
                const card2move = battlefieldTypes.indexOf("material");
                const copiedPlayer1Materials = [...player1Materials, gameBattlefield[card2move]];
                setPlayer1Materials(copiedPlayer1Materials);
                onDeckCardClick(updatedDeck[0]);                                                                        //
                addCardFromDeck(updatedDeck[0]);                                                                        //
                removeCardFromPlayer(card);                                                                             //
                addCardToDiscardDeck(card);                                                                             // PLAYER 1
                const card2remove = battlefieldNames.indexOf(card.defence);                                                //
                const copiedBattlefield = [...gameBattlefield];                                                   //
                copiedBattlefield.splice(card2move, 1);  
                copiedBattlefield.splice(card2remove, 1);                                                          //
                addCardToDiscardDeck(gameBattlefield[card2remove]);  // 
                setGameBattlefield(copiedBattlefield);                                                            //
                removeCardFromDeck(updatedDeck[0]);                                                                     //
                setGameTurnPlayers(true);                                                                               //
                setGamePlayDefenceCard(false);                                                                          //
            }                                                                                                                     //
        }                                                                                                               //
        else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false) && (gamePlayDefenceCard === true)){      ////
            setPlayer2Defense(card);                                                                                    //
            const battlefieldNames = gameBattlefield.map(card => card.name);                                               //
            const battlefieldTypes = gameBattlefield.map(card => card.type);
            if(battlefieldNames.includes(card.defence)){                                                                   //
                const card2move = battlefieldTypes.indexOf("material");
                const copiedPlayer2Materials = [...player2Materials, gameBattlefield[card2move]];
                setPlayer2Materials(copiedPlayer2Materials);
                onDeckCardClick(updatedDeck[0]);                                                                        //
                addCardFromDeck(updatedDeck[0]);                                                                        //
                removeCardFromPlayer(card);                                                                             //
                addCardToDiscardDeck(card);                                                                             // PLAYER 1
                const card2remove = battlefieldNames.indexOf(card.defence);                                                //
                const copiedBattlefield = [...gameBattlefield];  
                copiedBattlefield.splice(card2move, 1);                                                  //
                copiedBattlefield.splice(card2remove, 1);                                                          //
                addCardToDiscardDeck(gameBattlefield[card2remove]);  // 
                setGameBattlefield(copiedBattlefield);                                                            //
                removeCardFromDeck(updatedDeck[0]);                                                                     //
                setGameTurnPlayers(true);                                                                               //
                setGamePlayDefenceCard(false);     
            }    
        }                                                                                                               ////
    };                                                                                                                  //////



    const onDiscardCardClick = function(card){                                                                          ////// [DISCARDCARD CLICK]
        if((gameTurnPlayers === true) && (gamePlayPlunderCard === false)  && (gamePlayDefenceCard === false)){          ////
            const copiedPlayer1Hand = [...player1Hand, card];                                                           //
            setPlayer1Hand(copiedPlayer1Hand);                                                                          //
            onDeckCardClick(updatedDeck[0]);                                                                            //
            addCardFromDeck(updatedDeck[0]);                                                                            //
            removeCardFromPlayer(card);                                                                                 // PLAYER 1
            addCardToDiscardDeck(card);                                                                                 //
            removeCardFromDeck(updatedDeck[0]);                                                                         //
            setGameTurnPlayers(false);                                                                                  //
        }                                                                                                               //
        else if((gameTurnPlayers === false) && (gamePlayPlunderCard === false)  && (gamePlayDefenceCard === false)){    ////
            const copiedPlayer2Hand = [...player2Hand, card];                                                           //
            setPlayer2Hand(copiedPlayer2Hand);                                                                          //
            onDeckCardClick(updatedDeck[0]);                                                                            //
            addCardFromDeck(updatedDeck[0]);                                                                            //
            removeCardFromPlayer(card);                                                                                 // PLAYER 2
            addCardToDiscardDeck(card);                                                                                 //
            removeCardFromDeck(updatedDeck[0]);                                                                         //
            setGameTurnPlayers(true);                                                                                   //
        }                                                                                                               ////
    }                                                                                                                   //////

    const onDeckCardClick = function(card){                                     ////// [DECKCARD CLICK(AUTO)]
        const copiedDeck = [...updatedDeck, card];                              //
        setUpdatedDeck(copiedDeck);                                             //
    };                                                                          //////

    const addCardFromDeck = function(card){                                         ////// [CARD DEALER]
        if(gameTurnPlayers === true){                                               ////
            player1Hand.push(card);                                                 // PLAYER 1
            setPlayer1Hand(player1Hand);                                            //
        }else if(gameTurnPlayers === false){                                        ////
            player2Hand.push(card);                                                 // PLAYER 2
            setPlayer2Hand(player2Hand);                                            //
        }                                                                           ////
    };                                                                              //////

    const removeCardFromPlayer = function(card){                                    ////// [REMOVECARD FROM HAND]
        if(gameTurnPlayers === true){                                               ////
            const index = player1Hand.indexOf(card);                                //
            const copiedPlayer1Hand = [...player1Hand];                             // PLAYER 1
            copiedPlayer1Hand.splice(index, 1);                                     //
            setPlayer1Hand(copiedPlayer1Hand);                                      //
        } else if(gameTurnPlayers === false){                                       ////
            const index = player2Hand.indexOf(card);                                //
            const copiedPlayer2Hand = [...player2Hand];                             // PLAYER 2
            copiedPlayer2Hand.splice(index, 1);                                     //
            setPlayer2Hand(copiedPlayer2Hand);                                      //
        }                                                                           ////
    };                                                                              //////

    const removeCardFromPlayerMaterials = function(card){                           ////// [REMOVECARD FROM MATERIAL]
        if(gameTurnPlayers === false){                                              ////
            const index = player1Materials.indexOf(card);                           //
            const copiedPlayer1Materials = [...player1Materials];                   // PLAYER 1
            copiedPlayer1Materials.splice(index, 1);                                //
            setPlayer1Materials(copiedPlayer1Materials);                            //
        } else if(gameTurnPlayers === true){                                        ////
            const index = player2Materials.indexOf(card);                           //
            const copiedPlayer2Materials = [...player2Materials];                   // PLAYER 2
            copiedPlayer2Materials.splice(index, 1);                                //
            setPlayer2Materials(copiedPlayer2Materials);                            //
        }                                                                           ////
    };                                                                              //////

    const removeCardFromPlayerTools = function(card){                               ////// [REMOVECARD FROM MATERIAL]
        if(gameTurnPlayers === false){                                              ////
            const index = player1Tools.indexOf(card);                               //
            const copiedPlayer1Tools = [...player1Tools];                           // PLAYER 1
            copiedPlayer1Tools.splice(index, 1);                                    //
            setPlayer1Tools(copiedPlayer1Tools);                                    //
        } else if(gameTurnPlayers === true){                                        ////
            const index = player2Tools.indexOf(card);                               //
            const copiedPlayer2Tools = [...player2Tools];                           // PLAYER 2
            copiedPlayer2Tools.splice(index, 1);                                    //
            setPlayer2Tools(copiedPlayer2Tools);                                    //
        }                                                                           ////
    };                                                                              //////

    const removeCardPlunderFromBattlefield = function(card){                        ////// [REMOVECARD FROM BATTLEFIELD]
        const materialNames1 = player1Materials.map(card => card.name)              ////
        const materialNames2 = player2Materials.map(card => card.name)              //
        const battlefieldNames = gameBattlefield.map(card => card.name);            //
        const card2remove = battlefieldNames.indexOf("Plunder");                    //
        const copiedBattlefield = [...gameBattlefield];                             //
        copiedBattlefield.splice(card2remove, 1);                                   //
        if(gameTurnPlayers === true){                                               ////
            if(materialNames1.includes(card.name)){                                 //
            } else {                                                                //
                onDeckCardClick(updatedDeck[0]);                                    //  PLAYER 1
                addCardFromDeck(updatedDeck[0]);                                    //
            }                                                                       //
        }                                                                           ////
        else if (gameTurnPlayers === false){                                        //
            if(materialNames2.includes(card.name)){                                 //
            } else {                                                                //  PLAYER 2
                onDeckCardClick(updatedDeck[0]);                                    // 
                addCardFromDeck(updatedDeck[0]);                                    //
            }                                                                       ////
        }                                                                           //
        setGameBattlefield(copiedBattlefield);                                      //
        addCardToDiscardDeck(gameBattlefield[card2remove]);                         ////
    }                                                                               //////

    const removeCardFromDeck = function(card){                                      //////  [REMOVE CARD FROM DECK]
        const copiedUpdatedDeck = [...updatedDeck];                                 ////
        copiedUpdatedDeck.splice(card, 1);                                          //
        setUpdatedDeck(copiedUpdatedDeck);                                          ////
    };                                                                              //////

    const addCardToDiscardDeck = function(card){                                    ////// [DISCARD CARD]
        updatedDeck.push(card);                                                     ////
        setUpdatedDeck(updatedDeck);                                                ////
    };                                                                              //////

    const countUseStateTotalCardsCheck = function(){
        const total1 = updatedDeck.length;
        const total2 = player1Hand.length;
        const total3 = player2Hand.length;
        const total4 = player1Materials.length;
        const total5 = player2Materials.length;
        const total6 = player1Tools.length;
        const total7 = player2Tools.length;
        const total8 = gameBattlefield.length
        
        const total = (total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8);

        return total;
    }

    // WINNER
    const assignWinner = function(){
        const castleMaterialRequired = ['Labour', 'Money', 'Mortar', 'Stone', 'Wood'];
        const materialNamesPlayer1 = player1Materials.map(card => card.name).sort();
        const materialNamesPlayer2 = player2Materials.map(card => card.name).sort();
        
        const toolNames = player1Tools.map(card => card.name);
        const toolNames1 = player2Tools.map(card => card.name);
        let sum1 = 0;
        let sum2 = 0;

        if(toolNames.includes("Plan")){
            sum1 = player1Tools.map(card => (card.value + 2)).reduce((c, d) => c + d, 0);
            sum1 -= 2;
        } else if (!toolNames.includes("Plan")){
            sum1 = player1Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        }
        if (toolNames1.includes("Plan")){
            sum2 = player2Tools.map(card => (card.value + 2)).reduce((c, d) => c + d, 0);
            sum2 -= 2;
        } else if (!toolNames1.includes("Plan")){
            sum2 = player2Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        }
        
        // if(gameTurnPlayers === true){
        //     if(toolNames.includes("Plan")){
        //         sum1 = player1Tools.map(card => (card.value + 2)).reduce((c, d) => c + d, 0);
        //         sum1 -= 2;
        //     } else if (!toolNames.includes("Plan")){
        //         sum1 = player1Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        //     }
        //     if (toolNames1.includes("Plan")){
        //         sum2 = player2Tools.map(card => (card.value + 2)).reduce((c, d) => c + d, 0);
        //         sum2 -= 2;
        //     } else if (!toolNames1.includes("Plan")){
        //         sum2 = player2Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        //     }
        // } else if(gameTurnPlayers === false){
        //     if (toolNames1.includes("Plan")){
        //         sum2 = player2Tools.map(card => (card.value + 2)).reduce((c, d) => c + d, 0);
        //         sum2 -= 2;
                
        //     } else if (!toolNames1.includes("Plan")){
        //         sum2 = player2Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        //     }
        //     if(toolNames.includes("Plan")){
        //         sum1 = player1Tools.map(card => (card.value + 2)).reduce((c, d) => c + d, 0);
        //         sum1 -= 2;
        //     } else if (!toolNames.includes("Plan")){
        //         sum1 = player1Tools.map(card => card.value).reduce((c, d) => c + d, 0);
        //     }
        // }

        console.log(sum1);
        console.log(sum2);

        if(castleMaterialRequired.join() === materialNamesPlayer1.join() && sum1 >= 20){
            setGameWon("Player1")
        } else if(castleMaterialRequired.join() === materialNamesPlayer2.join() && sum2 >= 20){
            setGameWon("Player2")
        }
    };

    const handleStartGameClick = () => {
        window.location.reload();
    }
    
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
                <div className="game">
                    <div className="player">
                        <div className="player2-hand">
                            <Player2Hand player2Hand={player2Hand} gameTurnPlayers={gameTurnPlayers} onMaterialCardClick={onMaterialCardClick} onToolCardClick={onToolCardClick} onPlundercardClick={onPlundercardClick} onPlancardClick={onPlancardClick} onAttackCardClick={onAttackCardClick} onDefenseCardClick={onDefenseCardClick} onDiscardCardClick={onDiscardCardClick} player2Attack={player2Attack} player2Defense={player2Defense}/>
                        </div>
                        <div id="player-table">
                            <div className="player2-materials">
                                <div className="player2-materials-container">
                                    <Player2Materials player2Materials={player2Materials} onCardToPlunderOtherPlayerClick={onCardToPlunderOtherPlayerClick} gameTurnPlayers={gameTurnPlayers}/>
                                </div>
                            </div>
                            <div className="player2-tools">
                                <div className="player2-tools-container">
                                    <Player2Tools player2Tools={player2Tools} onCardToPlunderOtherPlayerClick={onCardToPlunderOtherPlayerClick} gameTurnPlayers={gameTurnPlayers}/>
                                        <Player2Points player2Tools={player2Tools}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>{countUseStateTotalCardsCheck()}</p>
                        <Battlefield gameBattlefield={gameBattlefield}/>
                    </div>
                    <div className="player">
                        <div id="player-table">
                            <div className="player-materials">
                                <div className="player-materials-container">
                                    <Player1Materials player1Materials={player1Materials} onCardToPlunderOtherPlayerClick={onCardToPlunderOtherPlayerClick} gameTurnPlayers={gameTurnPlayers}/>
                                </div>
                            </div>
                            <div className="player-tools">
                                <div className="player-tools-container">
                                    <Player1Tools player1Tools={player1Tools} onCardToPlunderOtherPlayerClick={onCardToPlunderOtherPlayerClick} gameTurnPlayers={gameTurnPlayers}/>
                                        <Player1Points player1Tools={player1Tools}/>
                                </div>
                            </div>
                        </div>
                        <div className="player-hand">
                            <Player1Hand player1Hand={player1Hand} gameTurnPlayers={gameTurnPlayers} onMaterialCardClick={onMaterialCardClick} onToolCardClick={onToolCardClick} onPlundercardClick={onPlundercardClick} onPlancardClick={onPlancardClick} onAttackCardClick={onAttackCardClick} onDefenseCardClick={onDefenseCardClick} onDiscardCardClick={onDiscardCardClick} player1Attack={player1Attack} player1Defense={player1Defense}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Game;