import React from 'react';

const Player1Hand = ({player1Hand, gameTurnPlayers, onMaterialCardClick, onToolCardClick, onDiscardCardClick, onAttackCardClick, onDefenseCardClick}) => {

    const handleClickPlay = function(card){
        if(gameTurnPlayers === true){
            if(card.type === "material"){
                onMaterialCardClick(card);
            } else if(card.type === "tool"){
                onToolCardClick(card);
            } else if(card.type === "attack"){
                onAttackCardClick(card);
            } else if(card.type === "defense"){
                onDefenseCardClick(card);
            }
        }
    };

    const handleClickDiscard = function(card){
        if(gameTurnPlayers === true){
            onDiscardCardClick(card);
        }
    };

    const player1Cards = player1Hand.map((card) => {
        return(
            <div className="player-card" key={card._id}>
                <p><button className="discard-button" onClick={() => {handleClickDiscard(card)}} type="button">&#215;</button></p>
                <img onClick={() => {handleClickPlay(card)}} src={card.img} alt={card.name}/>
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