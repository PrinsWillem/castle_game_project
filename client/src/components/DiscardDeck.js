import React from 'react';

const DiscardDeck = ({updatedDiscardDeck}) => {

    const discardCardsDeck = updatedDiscardDeck.map((card) => {
        return(
            <li className="deck-card" key={card._id}><img src={"./images/back_image/castle.png"} alt={card.name}/></li>
        )
    });

    return(
        <>
        {discardCardsDeck}
        </>
    )
}

export default DiscardDeck;