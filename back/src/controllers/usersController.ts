import { Request, Response } from "express";

import {
  getUsersService,
  getUsersByIdService,
  createUserService,
  userLoginService,
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
  try {
    const photoFilename = req.file ? req.file.filename : undefined;

    const newUser: User = await createUserService({
      ...req.body,
      photo: photoFilename,
    });

    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error: any) {
    res
      .status(400)
      .json({ error: error.message || "Error al crear el usuario." });
  }
};

export const userLoginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Faltan credenciales" });
    return;
  }

  try {
    const user = await userLoginService(username, password);

    res.status(200).json({
      login: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        photo: user.photo,
      },
    });
    return;
  } catch (error) {
    res.status(400).json({ login: false, message: "Credenciales incorrectas" });
    return;
  }
};
