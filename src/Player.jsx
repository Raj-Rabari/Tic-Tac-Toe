import { useState } from "react";

export default function Player({ initialName, symbol,isActive,onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function onEdit() {
    setIsEditing((isEditing) => !isEditing);

    if(isEditing) {
      onSave(symbol,playerName);
    }
  }

  function onNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
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
