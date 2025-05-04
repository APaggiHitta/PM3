//GET /turns => Obtiene todos los turnos
//GET /turns/:id => Obtiene un turno por id

//POST /turns/schedule => Crea un nuevo turno

//PUT /turns/cancel => Cancela un turno (cambia el estado a cancelado)

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
turnsRouter.put("/cancel", cancelTurnController);

export default turnsRouter;
