import React from "react";

const Player2Points = ({player2Tools}) => {

    const totalPointsPlayer2 = function(){
        const pointsArrayPlayer2 = player2Tools.map(card => card.value);
        const toolNames = player2Tools.map(card => card.name);
        
        if(player2Tools.length > 0){
            if(toolNames.includes("Plan")){
                const array1 = pointsArrayPlayer2;
                var total2 = 0;
                for (let i = 0; i < array1.length; i++){
                    total2 += array1[i] +2;
                }
                total2 -= 2;
            } else {
                const array1 = pointsArrayPlayer2;
                total2 = 0;
                for (let i = 0; i < array1.length; i++){
                    total2 += array1[i];
                }
            }
            
            return total2;
        }
    }

    return(
        <div className="player-points">
            {totalPointsPlayer2()}
        </div>
    )
}
export default Player2Points;