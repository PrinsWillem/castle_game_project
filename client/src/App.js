import React, {useState} from 'react';
import GameContainer from './container/GameContainer';
import './App.css';

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGameClick = () => {
    setGameStarted(true)
  }

  return (
    <div className="App">
      {gameStarted ? <GameContainer/> :
        <main className="App-body">
          <img src="./images/index-(3).gif" height="600" alt="Castle Logo"/>
          <p><button className="play-button" onClick={handleStartGameClick}>Play</button></p>
          
          <h1>Game Rules</h1>
          
          <h2>Goal of the game</h2>
          <p>Be the first to build your castle</p>
          <p>To ensure your victory you must complete <b>2 objectives</b>:</p>
          <p><b>1. Amassing 20 points or more of technology</b></p>
            <ul>
              <li>
                <img src="./images/tools/treadwheel_crane.png" height="150" alt="Treadwheel Crane Card"/>
                <img src="./images/tools/wheelbarrow.png" height="150" alt="Wheelbarrow Card"/>
                <img src="./images/tools/carpenter.png" height="150" alt="Carpenter Card"/>
                <img src="./images/tools/blacksmith.png" height="150" alt="Blacksmith Card"/>
              </li>
          <p><b>2. Gathering all necessary material cards</b></p>
              <li>
                <img src="./images/material/money.png" height="150" alt="Money Card"/>
                <img src="./images/material/labour.png" height="150" alt="Labour Card"/>
                <img src="./images/material/wood.png" height="150" alt="Wood Card"/>
                <img src="./images/material/stone.png" height="150" alt="Stone Card"/>
                <img src="./images/material/mortar.png" height="150" alt="Mortar Card"/>
              </li>
            </ul>
          <p>Your opponent can also <b>sabotage</b> your material cards by using an <b>attack card</b></p>
          <p>These attacks are:</p>
            <ul>
                <li>
                  <img src="./images/attack/bankruptcy.png" height="150" alt="Bankruptcy Card"/>
                  <img src="./images/attack/plague.png" height="150" alt="Plague Card"/>
                  <img src="./images/attack/fire.png" height="150" alt="Fire Card"/>
                  <img src="./images/attack/shortage.png" height="150" alt="Shortage Card"/>
                  <img src="./images/attack/frost.png" height="150" alt="Frost Card"/>
                </li>
                <li>
                    <em>Bankruptcy to sabotage Money</em>
                </li>
                <li>
                    <em>Plague to sabotage Labour</em>
                </li>
                <li>
                    <em>Fire to sabotage Wood</em>
                </li>
                <li>
                    <em>Shortage to sabotage Stone</em>
                </li>
                <li>
                    <em>Frost to sabotage Mortar</em>
                </li>
            </ul>
          <p>Luckily you also have <b>defence</b> cards that you can use to thwart the enemies attack on your materials</p>
          <p>These defence cards include:</p>
          <ul>
              <li>
                <img src="./images/defense/loan.png" height="150" alt="Loan Card"/>
                <img src="./images/defense/apothecary.png" height="150" alt="Apothecary Card"/>
                <img src="./images/defense/water.png" height="150" alt="Water Card"/>
                <img src="./images/defense/quarry.png" height="150" alt="Quarry Card"/>
                <img src="./images/defense/thaw.png" height="150" alt="Thaw Card"/>
              </li>
              <li>
                <em>Loan to defend against Bankruptcy</em>
              </li>
              <li>
                <em>Apothecary to defend against Plague</em>
              </li>
              <li>
                <em>Water to defend against Fire</em>
              </li>
              <li>
                <em>Quarry to defend against Shortage</em>
              </li>
              <li>
                <em>Thaw to defend against Frost</em>
              </li>
          </ul>
        <p>If an attack is successful and the player has no defence, the material card that was attacked is discarded along with the attack card used by your opponent</p>
        <p>If the player has a defence card to protect his materials, then both the defence and attack cards are discarded and the material card stays in play</p>

        <h3>Game Walkthrough</h3>

        <p>At the start of the game each player draws 5 cards.</p>
        <p>Each turn a player must draw a card and play a card, if the players have no cards to play they must discard one from their hand.</p>
        </main>}
    </div>
  );
}

export default App;
