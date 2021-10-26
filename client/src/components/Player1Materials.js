import React from 'react';

const Player1Materials = ({player1Materials}) => {

     const player1Cards = player1Materials.map((card) => {
          return <div className="player-card" key={card._id}><img src={card.img} alt={card.name}/></div>
      });  

     return(
          <p >{player1Cards}</p>
     );

};

export default Player1Materials;