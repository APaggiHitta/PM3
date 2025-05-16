"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var activitiesController_1 = require("../controllers/activitiesController");
var activitiesRouter = (0, express_1.Router)();
activitiesRouter.get("/", activitiesController_1.getActivitiesController);
exports.default = activitiesRouter;
