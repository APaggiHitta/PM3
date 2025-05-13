"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activitiesController_1 = require("../controllers/activitiesController");
const activitiesRouter = (0, express_1.Router)();
activitiesRouter.get("/", activitiesController_1.getActivitiesController);
exports.default = activitiesRouter;
