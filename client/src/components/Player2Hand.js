import React from 'react';

const Player2Hand = ({player2Hand, onMaterialCardClick2, onToolCardClick2, onDiscardCardClick2}) => {

    const handleClickPlay2 = function(card){
        if(card.type === "material"){
            onMaterialCardClick2(card)
        } else if(card.type === "tool"){
            onToolCardClick2(card)
        }
    };

    const handleClickDiscard = function(card){
        onDiscardCardClick2(card);
    };

    const player2Cards = player2Hand.map((card) => {
<<<<<<< HEAD
        return(
            <div className="player2-card" key={card._id}><img src={card.img} alt={card.name}/>
                <p><button onClick={() => {handleClickPlay2(card)}} type="button">Play</button>
                <button onClick={() => {handleClickDiscard(card)}} type="button">Discard</button></p>
            </div>
        );
        
=======
        return <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/>
        <button onClick={() => {handleClickPlay(card)}} type="button">Play</button>
        <button onClick={() => {handleClickDiscard(card)}} type="button">Discard</button>
        </li>
>>>>>>> 9ab2ec65e75a7f026eb756c13e3519fe5f926fcb
    });
        
    return(
        <>
        {player2Cards}
        </>
        )

};

export default Player2Hand;