import React from 'react';

const Player2Tools = ({player2Tools}) => {

     const player2Cards = player2Tools.map((card) => {
          return <li className="player2-card" key={card._id}><img src={card.img} alt={card.name}/></li>
      });  

     return(
          <p >{player2Cards}</p>
     );

};

export default Player2Tools;