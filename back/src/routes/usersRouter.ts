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
