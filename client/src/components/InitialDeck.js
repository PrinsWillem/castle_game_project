import React, {useState} from 'react';

const InitialDeck = ({allCards}) => {
    
    const shuffleCards = function(){
        allCards.sort(() => Math.random - 0.5);
        return console.log(shuffleCards)
    }

    return(
        <>
        <p>Initial Deck</p>
        {shuffleCards()}
        </>
    );
};

export default InitialDeck;