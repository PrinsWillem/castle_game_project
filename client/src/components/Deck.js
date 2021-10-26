import React from "react";

const Deck = ({updatedDeck, onDeckCardClick, onDeckCardClick2}) => {

    const handleClickPlay = function(card){
        onDeckCardClick(card);
    };

    const handleClickPlay2 = function(card){
        onDeckCardClick2(card);
    };

    const cardsDeck = updatedDeck.map((card) => {
        return(
            <li className="deck-card" key={card._id}><button onClick={() => {handleClickPlay2(card)}} type="take-card">Take Card</button><br/><img src={"./images/back_image/castle.png"} alt={card.name}/><br/><button onClick={() => {handleClickPlay(card)}} type="take-card">Take Card</button></li>
        )
    });

    return(
        <>
        {cardsDeck}
        </>
    )
}

export default Deck;