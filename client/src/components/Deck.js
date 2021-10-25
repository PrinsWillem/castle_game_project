import React from "react";

const Deck = ({updatedDeck}) => {

    const cardsDeck = updatedDeck.map((card) => {
        return(
            <li className="deck-card" key={card._id}><img src={"./images/back_image/castle.png"} alt={card.name}/></li>
        )
    });

    return(
        <>
        {cardsDeck}
        </>
    )
}

export default Deck;