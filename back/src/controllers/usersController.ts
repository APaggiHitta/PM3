import { Request, Response } from "express";

import sharp from "sharp";
import fs from "fs";
import path from "path";

import {
  getUsersService,
  getUserByIdService,
  createUserService,
  userLoginService,
} from "../services/usersService";

import { User } from "../entities/User";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      res.status(400).json({ message: "Invalid user ID" });
      return;
    }

    const user = await getUserByIdService(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    let processedFilename: string | undefined;

    if (req.file) {
      const originalPath = req.file.path;
      processedFilename = `profile-${Date.now()}.jpeg`;
      const outputDir = path.join(__dirname, "../../uploads");
      const outputPath = path.join(outputDir, processedFilename);

      await sharp(originalPath)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 80 })
        .toFile(outputPath);

      fs.unlinkSync(originalPath);
    }

    const newUser: User = await createUserService({
      ...req.body,
      photo: processedFilename,
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
