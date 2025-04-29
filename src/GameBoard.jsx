import { useState } from "react";

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({turns,onSelectSquare}) {

  let gameBoard = board;

  for (const turn of turns) {
    const {square,player} = turn;
    const {row,col} = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, index2) => (
              <li key={index2}>
                <button onClick={() => onSelectSquare(index,index2)} disabled={playerSymbol}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
