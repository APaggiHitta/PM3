import { Router } from "express";
import {
  getTurnsController,
  getTurnsByIdController,
  createTurnController,
  cancelTurnController,
} from "../controllers/turnsController";

const turnsRouter: Router = Router();

turnsRouter.get("/", getTurnsController);
turnsRouter.get("/:id", getTurnsByIdController);
turnsRouter.post("/schedule", createTurnController);
turnsRouter.put("/cancel/:id", cancelTurnController);

export default turnsRouter;
