//GET /users => Obtiene todos los usuarios
//GET /users/:id => Obtiene un usuario por id
//POST /users/register => Crea un nuevo usuario
//POST /users/login => Inicia sesion de un usuario

// Los controladores de cada ruta solo enviaran un mensaje

import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  userLoginController,
} from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", createUserController);
usersRouter.post("/login", userLoginController);

export default usersRouter;
