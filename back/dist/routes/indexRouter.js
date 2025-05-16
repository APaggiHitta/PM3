"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var turnsRouter_1 = __importDefault(require("./turnsRouter"));
var usersRouter_1 = __importDefault(require("./usersRouter"));
var activitiesRouter_1 = __importDefault(require("./activitiesRouter"));
var indexRouter = (0, express_1.Router)();
indexRouter.use("/turns", turnsRouter_1.default);
indexRouter.use("/users", usersRouter_1.default);
indexRouter.use("/activities", activitiesRouter_1.default);
exports.default = indexRouter;
