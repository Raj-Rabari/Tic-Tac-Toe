import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";
import Logs from "./Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./GameOver";
const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function deriveWinner(gameBoard, players, winner) {
  for (let combination of WINNING_COMBINATIONS) {
    let firstSymbol = gameBoard[combination[0].row][combination[0].column];
    let secondSymbol = gameBoard[combination[1].row][combination[1].column];
    let thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol
    ) {
      !winner && (winner = players[firstSymbol]);
      break;
    }
  }

  return winner;
}

function setGameBoard(turns) {
  let gameBoard = structuredClone(INITIAL_GAMEBOARD);

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [turns, setTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  let currPlayer = "X";
  if (turns.length && turns[0].player === "X") {
    currPlayer = "O";
  }

  function onNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }

  let winner = null;

  function restartGame() {
    setTurns([]);
  }

  let gameBoard = setGameBoard(turns);
  winner = deriveWinner(gameBoard, players, winner);

  function handleSelectionSquare(row, col) {
    setTurns((prevTurns) => [
      { square: { row, col }, player: currPlayer },
      ...prevTurns,
    ]);
  }

  const hasDraw = turns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS["X"]}
            symbol="X"
            isActive={currPlayer === "X"}
            onSave={onNameChange}
          />
          <Player
            initialName={PLAYERS["O"]}
            symbol="0"
            isActive={currPlayer === "O"}
            onSave={onNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={restartGame}></GameOver>
        )}
        <GameBoard
          onSelectSquare={handleSelectionSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Logs turns={turns} />
    </main>
  );
}

export default App;
