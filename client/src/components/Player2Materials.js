import React from 'react';

const Player2Materials = ({player2Materials}) => {

     const player2Cards = player2Materials.map((card) => {
          return <div className={card.name} key={card._id}><img src={card.img} alt={card.name}/></div>
      });  

     return(
          <>{player2Cards}</>
     );

};

export default Player2Materials;