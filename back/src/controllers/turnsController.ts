import { Request, Response } from "express";

export const getTurnsController = async (req: Request, res: Response) => {
  // res
  //   .status(200)
  //   .json({ message: "Ejecutando controlador para obtener todos los turnos" });
  res.send("Ejecutando controlador para obtener todos los turnos");
};

export const getTurnsByIdController = async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Ejecutando controlador para obtener un turno por id" });
};

export const createTurnController = async (req: Request, res: Response) => {
  res
    .status(201)
    .json({ message: "Ejecutando controlador para crear un nuevo turno" });
};

export const cancelTurnController = async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Ejecutando controlador para cancelar un turno" });
};
