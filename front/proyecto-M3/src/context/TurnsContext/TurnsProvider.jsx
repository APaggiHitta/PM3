import { useState } from "react";
import { TurnsContext } from "./TurnsContext";

export const TurnsProvider = ({ children }) => {
  const [turns, setTurns] = useState([]);

  const addTurn = (turn) => {
    setTurns([...turns, turn]);
  };

  //Aca puedo crear cancleTurn

  const turnsValue = { turns, addTurn };

  return (
    <TurnsContext.Provider value={turnsValue}>{children}</TurnsContext.Provider>
  );
};
