import ITurn from "../interfaces/ITurn";
import TurnDto from "../dtos/TurnDto";
import { TurnModel, UserModel, ActivityModel } from "../config/data-source";
import { Turn } from "../entities/Turn";

let turns: ITurn[] = [];
let id = 1;

export const getTurnsService = async (): Promise<Turn[]> => {
  const turns = await TurnModel.find({
    relations: {
      user: true,
      activity: true,
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

  const activity = await ActivityModel.findOneBy({ id: data.activity_id });
  if (!activity) {
    throw new Error(`Actividad con ID ${data.activity_id} no encontrada`);
  }

  const turn = TurnModel.create({
    date: new Date(data.date),
    time: data.time,
    status: "active",
    user: user,
    activity: activity,
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
