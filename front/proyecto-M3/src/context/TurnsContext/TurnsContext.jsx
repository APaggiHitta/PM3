import { createContext } from "react";

export const TurnsContext = createContext({
  turns: [],
  setTurns: () => {},
  updateTurnById: () => {},
});
