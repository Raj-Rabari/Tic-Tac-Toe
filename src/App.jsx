import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";
import Logs from "./Log";

function App() {
  const [turns,setTurns] = useState([]);
  let currPlayer = 'X';
    if (turns.length && turns[0].player === 'X') {
      currPlayer = 'O'
    }

  function handleSelectionSquare(row,col) {
    setTurns((prevTurns) => [{square : {row,col},player : currPlayer},...prevTurns])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="0"
            isActive={currPlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectionSquare}
          turns={turns}
        />
      </div>
      <Logs turns={turns}/>
    </main>
  );
}

export default App;
