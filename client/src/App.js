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
      <h1>Castle</h1>
      {gameStarted ? <GameContainer/> :
        <main>
          <button onClick={handleStartGameClick}>Play</button>
        </main>}
    </div>
  );
}

export default App;
