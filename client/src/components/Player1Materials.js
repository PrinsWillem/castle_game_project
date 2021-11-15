import React from 'react';

const Player1Materials = ({gameTurnPlayers, player1Materials, onCardToPlunderOtherPlayerClick}) => {

     const handleClickPlay = function(card){
          if(gameTurnPlayers === true){
               if(card.type === "material"){
                    onCardToPlunderOtherPlayerClick(card);
               }
          }
     };

     const player1Cards = player1Materials.map((card) => {
          return(
               <div className={card.name} key={card._id}>
                    <img onClick={() => {handleClickPlay(card)}} src={card.img} alt={card.name}/>
               </div>
          );
     });  

     return(
          <>{player1Cards}</>
     );

};

export default Player1Materials;