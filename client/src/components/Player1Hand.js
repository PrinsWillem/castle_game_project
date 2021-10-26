import React from 'react';

const Player1Hand = ({player1Hand, onMaterialCardClick, onToolCardClick, onDiscardCardClick}) => {

    const handleClickPlay = function(card){
        if(card.type === "material"){
            onMaterialCardClick(card);
        } else if(card.type === "tool"){
            onToolCardClick(card);
        };
    };

    const handleClickDiscard = function(card){
        onDiscardCardClick(card);
    };

    const handleClickDiscard = function(card){
        onDiscardCardClick(card);
    };

    const player1Cards = player1Hand.map((card) => {
        return(
            <div className="player-card" key={card._id}>
                <img src={card.img} alt={card.name}/>
                <p><button onClick={() => {handleClickPlay(card)}} type="button">Play</button>
                <button onClick={() => {handleClickDiscard(card)}} type="button">Discard</button></p>
            </div>
        );

    });
        
    return(
        <>
        {player1Cards}
        </>
        )

};

export default Player1Hand;