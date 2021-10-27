import React from 'react';

const Player2Hand = ({player2Hand, onMaterialCardClick2, onToolCardClick2, onDiscardCardClick2, onAttackCardClick2, onDefenseCardClick2}) => {

    const handleClickPlay2 = function(card){
        if(card.type === "material"){
            onMaterialCardClick2(card);
        } else if(card.type === "tool"){
            onToolCardClick2(card);
        } else if(card.type === "attack"){
            onAttackCardClick2(card);
        } else if(card.type === "defense"){
            onDefenseCardClick2(card);
        }
    };

    const handleClickDiscard = function(card){
        onDiscardCardClick2(card);
    };

    const player2Cards = player2Hand.map((card) => {
        return(
            <div className="player2-card" key={card._id}>
                <p><button className="discard-button" onClick={() => {handleClickDiscard(card)}} type="button">&#215;</button></p>
                <img onClick={() => {handleClickPlay2(card)}} src={card.img} alt={card.name}/>
            </div>
        );
        
    });
        
    return(
        <>
        {player2Cards}
        </>
        )

};

export default Player2Hand;