import React from 'react';

const Player1Hand = ({player1Hand, onMaterialCardClick}) => {

    if(player1Hand.length > 0){
    const handleClickPlay = function(card){
        if(card.type === "material"){
            onMaterialCardClick(card)
        };
    };

    const player1Cards = player1Hand.map((card) => {
        return <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/><button onClick={() => {handleClickPlay(card)}} type="play">Play</button></li>
    });
        
    return(
        <>
        {player1Cards}
        </>
        )
    }else{
        return(
            <h1>Loading....</h1>
        )
    }
};

export default Player1Hand;