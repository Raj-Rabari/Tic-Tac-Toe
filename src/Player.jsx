import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function onEdit() {
    setIsEditing((isEditing) => !isEditing);
  }

  function onNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" onChange={onNameChange} value={playerName} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
