"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivitiesController = void 0;
const activitiesService_1 = require("../services/activitiesService");
const getActivitiesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const activities = yield (0, activitiesService_1.getActivitiesService)();
    res.status(200).json(activities);
});
exports.getActivitiesController = getActivitiesController;
