import React from "react";

const Player1Points = ({player1Tools}) => {

    const totalPointsPlayer1 = function(){
        const pointsArrayPlayer1 = player1Tools.map(card => card.value);
        
        if(player1Tools.length > 0){
            const array1 = pointsArrayPlayer1;
            var total = 0;
            for (let i = 0; i < array1.length; i++){
                total += array1[i]
            }
            return total;
        }
    }

    return(
        <div className="player-points">
            {totalPointsPlayer1()}
        </div>
    )
}
export default Player1Points;