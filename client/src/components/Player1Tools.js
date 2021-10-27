import React from 'react';

const Player1Tools = ({player1Tools}) => {

     const player1Cards = player1Tools.map((card) => {
          return <div className="player-card-table" key={card._id}><img src={card.img} alt={card.name}/></div>
      });  

     return(
          <>{player1Cards}</>
     );

};

export default Player1Tools;