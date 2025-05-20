import { Request, Response } from "express";
import {
  getTurnsService,
  getTurnsByIdService,
  getTurnsByUserIdService,
  createTurnService,
  cancelTurnService,
} from "../services/turnsService";

import { Turn } from "../entities/Turn";

export const getTurnsController = async (req: Request, res: Response) => {
  try {
    const turns: Turn[] = await getTurnsService();
    res.status(200).json({
      success: true,
      turns,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTurnsByIdController = async (req: Request, res: Response) => {
  try {
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

    res.status(200).json({
      success: true,
      turn,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTurnsByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      res.status(400).json({ message: "Invalid user ID" });
      return;
    }

    const turns = await getTurnsByUserIdService(userId);

    if (!turns) {
      res.status(404).json({ message: "Turn not found" });
      return;
    }
    res.status(200).json(turns);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createTurnController = async (req: Request, res: Response) => {
  try {
    const newTurn: Turn = await createTurnService(req.body);
    res.status(201).json({
      message: "Turno creado exitosamente",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const cancelTurnController = async (req: Request, res: Response) => {
  try {
    const turnId = Number(req.params.id);

    if (isNaN(turnId)) {
      res.status(400).json({ message: "Invalid turn ID" });
      return;
    }

    const turn = await cancelTurnService(turnId);
    res.status(200).json(turn);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
