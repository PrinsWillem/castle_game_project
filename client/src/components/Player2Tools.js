import React from 'react';

const Player2Tools = ({player2Tools}) => {

     const player2Cards = player2Tools.map((card) => {
          return <div className="player2-card" key={card._id}><img src={card.img} alt={card.name}/></div>
      });  

     return(
          <p >{player2Cards}</p>
     );

};

export default Player2Tools;