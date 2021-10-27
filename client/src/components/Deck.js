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
            <li className="deck-card" key={card._id}><button className="draw-button" onClick={() => {handleClickPlay2(card)}} type="button">Draw</button>
            <p><img src={"./images/back_image/castle.png"} alt={card.name}/></p>
            <button className="draw-button" onClick={() => {handleClickPlay(card)}} type="button">Draw</button></li>
        )
    });

    return(
        <>
        {cardsDeck}
        </>
    )
}

export default Deck;