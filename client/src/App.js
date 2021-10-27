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
          <img src="./images/index.png" height="650" alt="Castle Logo"/>
          <p><button className="play-button" onClick={handleStartGameClick}>Play</button></p>
          
          <h1>Game Rules</h1>
          
          <h2>Goal of the game</h2>
          <p>Be the first to build your castle</p>
          <p>To ensure your victory you must complete 2 objectives:</p>
            <ul>
                <li>Gathering all necessary raw material on your building site (Yellow/Material cards) these include Money, Wood, Stone, Labour and Mortar</li>
                <li>Amassing 20 points or more of technology(Blue/Technology cards) to reach your goal</li>
            </ul>
          <p>Your opponent can also sabotage your materials by using attack cards(red cards)</p>
          <p>These attacks are:</p>
            <ul>
                <li>
                    Bankruptcy to sabotage Money 
                </li>
                <li>
                    Fire to sabotage Wood 
                </li>
                <li>
                    Shortage to sabotage Stone 
                </li>
                <li>
                    Plague to sabotage Labour 
                </li>
                <li>
                    Frost to sabotage Mortar
                </li>
            </ul>
          <p>Luckily you also have defence(Green) cards you can use to thwart the enemies attack on your materials</p>
          <p>These defence cards include</p>
          <ul>
              <li>
                Loan to defend against Bankruptcy
              </li>
              <li>
                Water to defend against Fire
              </li>
              <li>
                Quarry to defend against Shortage
              </li>
              <li>
                Apothecary to defend against Plague
              </li>
              <li>
                Thaw to defend against Frost
              </li>
          </ul>
        <p>If an attack is successful and the player has no defence the material card that was attacked is discarded along with the attack card used by your opponent</p>
        <p>If the player has a defence card to protect his materials then both the defence and attack cards are discarded and the material card stays in play</p>

        <h3>Game Walkthrough</h3>

        <p>At the start of the game each player draws 5 cards,</p>
        <p>each turn the player must draw a card and play a card, if they have no cards they can play they must discard one from their hand </p>
        <p>a player must have no more than 5 cards in their hand at any time</p>
        <p>If the deck runs out of cards the players draw from the discarded pile</p>
        </main>}
    </div>
  );
}

export default App;
