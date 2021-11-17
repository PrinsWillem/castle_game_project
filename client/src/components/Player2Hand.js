import React from 'react';

const Player2Hand = ({player2Hand, gameTurnPlayers, onMaterialCardClick, onToolCardClick, onPlancardClick, onDiscardCardClick, onAttackCardClick, onDefenseCardClick, onPlundercardClick}) => {

    const handleClickPlay2 = function(card){
        if(gameTurnPlayers === false){
            if(card.type === "material"){
                onMaterialCardClick(card);
            } else if(card.type === "tool"){
                onToolCardClick(card);
            } else if(card.type === "attack"){
                onAttackCardClick(card);
            } else if(card.type === "defense"){
                onDefenseCardClick(card);
            } else if(card.type === "plunder"){
                onPlundercardClick(card);
            } else if(card.type === "plan"){
                onPlancardClick(card);
            }
        }
    };

    const handleClickDiscard = function(card){
        if(gameTurnPlayers === false){
            onDiscardCardClick(card);
        }
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