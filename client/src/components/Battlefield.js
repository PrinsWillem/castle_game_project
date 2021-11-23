import React from "react";

const Battlefield = ({gameBattlefield}) => {

    const BattlefieldCards = gameBattlefield.map((card) => {
        return(
             <div className={card.name} key={card._id}>
                  <img src={card.img} alt={card.name}/>
             </div>
        );
    });  

    return(
        <>{BattlefieldCards}</>
    );
};

export default Battlefield;