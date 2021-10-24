import React, {useState, useEffect} from 'react';
import GameService from '../services/GameService';
import Game from '../components/Game';

const GameContainer = () => {

    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        GameService.getCards()
        .then(cards => setAllCards(shuffleDeck(cards)))
    }, []);

    function shuffleDeck(cards){
        let randomDeck = [];
        while(cards.length !== 0){
            let randomIndex = Math.floor(Math.random() * cards.length);
            randomDeck.push(cards[randomIndex]);
            cards.splice(randomIndex, 1);
        }
        cards = randomDeck;
        return randomDeck;
    }

    function firstHand(cards){
        const deck = cards;
        const fiveCards = 5;
        const hand = deck.slice(0, fiveCards);
        return hand;
    };

    return(
        <div>
            <Game allCards={allCards} firstHand={firstHand}/>
        </div>
    );

};

export default GameContainer;