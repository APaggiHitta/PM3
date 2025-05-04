import { Router } from "express";
import turnsRouter from "./turnsRouter";
import usersRouter from "./usersRouter";

const router: Router = Router();

router.use("/turns", turnsRouter);
router.use("/users", usersRouter);

export default router;
