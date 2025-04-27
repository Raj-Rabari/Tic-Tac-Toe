import { useState } from "react";

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(board);
  const [isPlayer1,setIsPlayer1] = useState(true);

  function handleClick(index1,index2) {
    setIsPlayer1((isPlayer1) => !isPlayer1);
    setGameBoard((prevGameBoard) => {
        const tempBoard = structuredClone(prevGameBoard);
        tempBoard[index1][index2] = isPlayer1 ? 'X' : 'O';
        return tempBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, index2) => (
              <li key={index2}>
                <button onClick={() => handleClick(index,index2)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
