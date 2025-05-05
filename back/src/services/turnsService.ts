import ITurn from "../interfaces/ITurn";
import TurnDto from "../dtos/TurnDto";

let turns: ITurn[] = [];
let id = 1;

export const getTurnsService = async (): Promise<ITurn[]> => {
  return turns;
};

export const getTurnsByIdService = async (
  turnId: number
): Promise<ITurn | undefined> => {
  const turn = turns.find((t) => t.id === turnId);
  return turn;
};

export const createTurnService = async (turnDate: TurnDto): Promise<ITurn> => {
  const newTurn: ITurn = {
    id,
    date: turnDate.date,
    time: turnDate.time,
    userId: turnDate.userId,
    status: turnDate.status,
  };
  turns.push(newTurn);
  id++;
  return newTurn;
};

export const cancelTurnService = async (
  turnId: number
): Promise<ITurn | undefined> => {
  const turnIndex = turns.findIndex((t) => t.id === turnId);

  if (turnIndex === -1) {
    return undefined;
  }

  // Si el turno existe, lo actualizamos
  turns[turnIndex].status = "cancelled";

  return turns[turnIndex];
};
