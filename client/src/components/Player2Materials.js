import React from 'react';

const Player2Materials = ({player2Materials}) => {

     const player2Cards = player2Materials.map((card) => {
          return <div className="player2-card" key={card._id}><img src={card.img} alt={card.name}/></div>
      });  

     return(
          <p >{player2Cards}</p>
     );

};

export default Player2Materials;