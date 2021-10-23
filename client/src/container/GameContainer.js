import React, {useState, useEffect} from 'react';
import GameService from '../services/GameService';
import InitialDeck from '../components/InitialDeck';

const GameContainer = () => {

    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        GameService.getCards()
        .then(cards => setAllCards(cards))
    }, []);

    return(
        <div>
            <h1>Castle Game</h1>
            <InitialDeck allCards={allCards}/>
        </div>
    );

};

export default GameContainer;