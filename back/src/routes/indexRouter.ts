import { Router } from "express";
import turnsRouter from "./turnsRouter";
import usersRouter from "./usersRouter";
import activitiesRouter from "./activitiesRouter";

const indexRouter: Router = Router();

indexRouter.use("/turns", turnsRouter);
indexRouter.use("/users", usersRouter);
indexRouter.use("/activities", activitiesRouter);

export default indexRouter;
