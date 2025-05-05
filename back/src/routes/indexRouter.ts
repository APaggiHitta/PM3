import { Router } from "express";
import turnsRouter from "./turnsRouter";
import usersRouter from "./usersRouter";

const indexRouter: Router = Router();

indexRouter.use("/turns", turnsRouter);
indexRouter.use("/users", usersRouter);

export default indexRouter;
