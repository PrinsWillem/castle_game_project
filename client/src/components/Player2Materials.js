import React from 'react';

const Player2Materials = ({gameTurnPlayers, player2Materials, onCardToPlunderOtherPlayerClick}) => {

     const handleClickPlay = function(card){
          if(gameTurnPlayers === false){
               if(card.type === "material"){
                    onCardToPlunderOtherPlayerClick(card);
               }
          }
     };

     const player2Cards = player2Materials.map((card) => {
          return(
               <div className={card.name} key={card._id}>
                    <img onClick={() => {handleClickPlay(card)}} src={card.img} alt={card.name}/>
               </div>
          );
     });  

     return(
          <>{player2Cards}</>
     );

};

export default Player2Materials;