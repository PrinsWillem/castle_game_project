import React from 'react';

const Player2Hand = ({player2Hand, onMaterialCardClick2, onToolCardClick2}) => {

    const handleClickPlay = function(card){
        if(card.type === "material"){
            onMaterialCardClick2(card)
        } else if(card.type === "tool"){
            onToolCardClick2(card)
        }
    };

    const player2Cards = player2Hand.map((card) => {
        return <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/><button onClick={() => {handleClickPlay(card)}} type="play">Play</button></li>
    });
        
    return(
        <>
        {player2Cards}
        </>
        )

};

export default Player2Hand;