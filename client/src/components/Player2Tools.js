import React from 'react';

const Player2Tools = ({player2Tools}) => {

     const player2Cards = player2Tools.map((card) => {
          return <div className="player-card-table" key={card._id}><img src={card.img} alt={card.name}/></div>
      });  

     return(
          <>{player2Cards}</>
     );

};

export default Player2Tools;