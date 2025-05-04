import { Request, Response } from "express";

export const getUsersController = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Ejecutando controlador para obtener todos los usuarios",
  });
};
export const getUserByIdController = async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Ejecutando controlador para obtener un usuario por id" });
};
export const createUserController = async (req: Request, res: Response) => {
  res
    .status(201)
    .json({ message: "Ejecutando controlador para crear un nuevo usuario" });
};
export const userLoginController = async (req: Request, res: Response) => {
  res
    .status(201)
    .json({ message: "Ejecutando controlador para loguear usuario" });
};
