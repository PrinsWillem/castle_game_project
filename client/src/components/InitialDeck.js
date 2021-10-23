import React, {useState} from 'react';

const InitialDeck = ({allCards}) => {
    
    let randomDeck = [];
    while(allCards.length !== 0){
        let randomIndex = Math.floor(Math.random() * allCards.length);
        randomDeck.push(allCards[randomIndex]);
        allCards.splice(randomIndex, 1);
    }
    allCards = randomDeck;

    return(
        <>
        <p>Initial Deck</p>
        {console.log(randomDeck)}
        </>
    );
};

export default InitialDeck;