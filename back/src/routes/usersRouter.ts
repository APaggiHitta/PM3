import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  userLoginController,
} from "../controllers/usersController";
import { validateUserData } from "../middlewares/validateUserData";

const usersRouter: Router = Router();

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", validateUserData, createUserController);
usersRouter.post("/login", userLoginController);

export default usersRouter;
