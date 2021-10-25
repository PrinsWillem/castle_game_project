import React from 'react';

const Player1Tools = ({player1Tools}) => {

     const player1Cards = player1Tools.map((card) => {
          return <li className="player-card" key={card._id}><img src={card.img} alt={card.name}/></li>
      });  

     return(
          <p >{player1Cards}</p>
     );

};

export default Player1Tools;