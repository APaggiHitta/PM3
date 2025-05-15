import { Request, Response } from "express";
import {
  getTurnsService,
  getTurnsByIdService,
  createTurnService,
  cancelTurnService,
} from "../services/turnsService";

import { Turn } from "../entities/Turn";

export const getTurnsController = async (req: Request, res: Response) => {
  const turns: Turn[] = await getTurnsService();
  res.status(200).json(turns);
};

export const getTurnsByIdController = async (req: Request, res: Response) => {
  const turnId = Number(req.params.id);

  if (isNaN(turnId)) {
    res.status(400).json({ message: "Invalid turn ID" });
    return;
  }

  const turn = await getTurnsByIdService(turnId);

  if (!turn) {
    res.status(404).json({ message: "Turn not found" });
    return;
  }

  res.status(200).json(turn);
};

export const createTurnController = async (req: Request, res: Response) => {
  try {
    const newTurn: Turn = await createTurnService(req.body);
    res.status(201).json({
      message: "Turno creado exitosamente",
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const cancelTurnController = async (req: Request, res: Response) => {
  const turnId = Number(req.params.id);

  if (isNaN(turnId)) {
    res.status(400).json({ message: "Invalid turn ID" });
    return;
  }

  try {
    const turn = await cancelTurnService(turnId);
    res.status(200).json(turn);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }

  // const turnId = Number(req.params.id);

  // if (isNaN(turnId)) {
  //   res.status(400).json({ message: "Invalid turn ID" });
  //   return;
  // }

  // const turn = await cancelTurnService(turnId);

  // if (!turn) {
  //   res.status(404).json({ message: "Turn not found" });
  //   return;
  // }

  // res.status(200).json(turn);
};
