import React from 'react';

const Player2Tools = ({gameTurnPlayers, player2Tools, onCardToPlunderOtherPlayerClick}) => {

     const handleClickPlay = function(card){
          if(gameTurnPlayers === true){
               if(card.type === "tool" || card.type === "plan"){
                    onCardToPlunderOtherPlayerClick(card);
               }
          }
     };

     const player2Cards = player2Tools.map((card) => {
          return(
               <div className="player-card-table" key={card._id}>
                    <img onClick={() => {handleClickPlay(card)}} src={card.img} alt={card.name}/>
               </div>
          );
      });  

     return(
          <>{player2Cards}</>
     );

};

export default Player2Tools;