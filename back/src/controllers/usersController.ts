import { Request, Response } from "express";

import {
  getUsersService,
  getUsersByIdService,
  createUserService,
} from "../services/usersService";

import { User } from "../entities/User";

export const getUsersController = async (req: Request, res: Response) => {
  const users: User[] = await getUsersService();
  res.status(200).json(users);
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);

  if (isNaN(userId)) {
    res.status(400).json({ message: "Invalid user ID" });
    return;
  }

  const user = await getUsersByIdService(userId);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json(user);
};

export const createUserController = async (req: Request, res: Response) => {
  // const { name, email, birthdate, nDni, username, password } = req.body;
  const newUser: User = await createUserService(req.body);
  res.status(201).json(newUser);
};

// export const userLoginController = async (req: Request, res: Response) => {
//   res
//     .status(201)
//     .json({ message: "Ejecutando controlador para loguear usuario" });
// };
