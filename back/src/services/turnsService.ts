import ITurn from "../interfaces/ITurn";
import TurnDto from "../dtos/TurnDto";
import { TurnModel, UserModel } from "../config/data-source";
import { Turn } from "../entities/Turn";

let turns: ITurn[] = [];
let id = 1;

export const getTurnsService = async (): Promise<Turn[]> => {
  const turns = await TurnModel.find({
    relations: {
      user: true,
    },
  });
  return turns;
};

export const getTurnsByIdService = async (id: number): Promise<Turn | null> => {
  const turn = await TurnModel.findOne({
    where: { id },
    relations: {
      user: true,
    },
  });
  return turn;
};

export const createTurnService = async (data: TurnDto) => {
  const user = await UserModel.findOneBy({ id: data.userId });

  if (!user) {
    throw new Error(`Usuario con ID ${data.userId} no encontrado`);
  }

  const turn = TurnModel.create({
    date: new Date(data.date),
    time: data.time,
    status: data.status,
    user: user,
  });

  return await TurnModel.save(turn);
};

export const cancelTurnService = async (id: number): Promise<Turn> => {
  const turn = await TurnModel.findOneBy({ id });

  if (!turn) {
    throw new Error(`Turno con ID ${id} no encontrado`);
  }

  if (turn.status === "cancelled") {
    throw new Error(`El turno ya está cancelado`);
  }

  turn.status = "cancelled";
  return await TurnModel.save(turn);
};

// export const cancelTurnService = async (
//   turnId: number
// ): Promise<ITurn | undefined> => {
//   const turnIndex = turns.findIndex((t) => t.id === turnId);

//   if (turnIndex === -1) {
//     return undefined;
//   }

//   // Si el turno existe, lo actualizamos
//   turns[turnIndex].status = "cancelled";

//   return turns[turnIndex];
// };
