export default function GameBoard({onSelectSquare,gameBoard}) {

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
