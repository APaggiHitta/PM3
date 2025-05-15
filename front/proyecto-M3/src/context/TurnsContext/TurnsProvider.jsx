import { useState } from "react";
import { TurnsContext } from "./TurnsContext";

export const TurnsProvider = ({ children }) => {
  const [turns, setTurns] = useState([]);

  const updateTurnById = (id, updatedData) => {
    setTurns((prevTurns) =>
      prevTurns.map((turn) =>
        turn.id === id ? { ...turn, ...updatedData } : turn
      )
    );
  };

  const turnsValue = { turns, setTurns, updateTurnById };

  return (
    <TurnsContext.Provider value={turnsValue}>{children}</TurnsContext.Provider>
  );
};
