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

    function firstPlayerHand(cards){
        const deck = cards;
        const fiveCards = 5;
        const hand = deck.slice(0, fiveCards);
        return hand;
    };

    function firstComputerHand(cards){
        const deck = cards;
        const fiveCards = 10;
        const hand = deck.slice(5, fiveCards);
        return hand;
    };

    function deckAfterDealing(cards){
        const deck = cards;
        const remainingCards = 79;
        const hand = deck.slice(10, remainingCards);
        return hand;
    };

    const dealtDeck = deckAfterDealing(allCards);
    const firstCompHand = firstComputerHand(allCards);
    const firstPlayHand = firstPlayerHand(allCards)

    return(
        <div>
            <Game allCards={allCards} firstPlayerHand={firstPlayHand} firstComputerHand={firstCompHand} deckAfterDealing={dealtDeck}/>
        </div>
    );

};

export default GameContainer;