import { Router } from "express";
import { getActivitiesController } from "../controllers/activitiesController";

const activitiesRouter: Router = Router();

activitiesRouter.get("/", getActivitiesController);

export default activitiesRouter;
