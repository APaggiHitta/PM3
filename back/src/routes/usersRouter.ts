import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  userLoginController,
} from "../controllers/usersController";
import { validateUserData } from "../middlewares/validateUserData";
import { uploadPhoto } from "../middlewares/uploadPhoto";

const usersRouter: Router = Router();

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post(
  "/register",
  uploadPhoto.single("photo"),
  validateUserData,
  createUserController
);
usersRouter.post("/login", userLoginController);

export default usersRouter;
