import React from 'react';

const Player1Tools = ({gameTurnPlayers, player1Tools, onCardToPlunderOtherPlayerClick}) => {

     const handleClickPlay = function(card){
          if(gameTurnPlayers === false){
               if(card.type === "tool" || card.type === "plan"){
                    onCardToPlunderOtherPlayerClick(card);
               }
          }
     };

     const player1Cards = player1Tools.map((card) => {
          return(
               <div className="player-card-table" key={card._id}>
                    <img onClick={() => {handleClickPlay(card)}} src={card.img} alt={card.name}/>
               </div>
          );
      });  

     return(
          <>{player1Cards}</>
     );

};

export default Player1Tools;