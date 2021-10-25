import React from "react";

const Deck = ({updatedDeck, onDeckCardClick}) => {

    const handleClickPlay = function(card){
        onDeckCardClick(card);
    };

    const cardsDeck = updatedDeck.map((card) => {
        return(
            <li className="deck-card" key={card._id}><img src={"./images/back_image/castle.png"} alt={card.name}/><br/><button onClick={() => {handleClickPlay(card)}} type="take-card">Take Card</button></li>
        )
    });

    return(
        <>
        {cardsDeck}
        </>
    )
}

export default Deck;