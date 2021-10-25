import React from 'react';

const Player1Hand = ({player1Hand, onMaterialCardClick, onToolCardClick}) => {

    const handleClickPlay = function(card){
        if(card.type === "material"){
            onMaterialCardClick(card)
        } else if(card.type === "tool"){
            onToolCardClick(card)
        }
    };

    const player1Cards = player1Hand.map((card) => {
        return <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/><button onClick={() => {handleClickPlay(card)}} type="play">Play</button></li>
    });
        
    return(
        <>
        {player1Cards}
        </>
        )

};

export default Player1Hand;