import React from "react";

const Battlefield = ({gameBattlefield}) => {

    const BattlefieldCards = gameBattlefield.map((card) => {
        return(
             <div className="player-card-table" key={card._id}>
                  <img src={card.img} alt={card.name}/>
             </div>
        );
    });  

    return(
        <>{BattlefieldCards}</>
    );
};

export default Battlefield;