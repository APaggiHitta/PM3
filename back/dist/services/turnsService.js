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
exports.cancelTurnService = exports.createTurnService = exports.getTurnsByIdService = exports.getTurnsService = void 0;
const data_source_1 = require("../config/data-source");
let turns = [];
let id = 1;
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield data_source_1.TurnModel.find({
        relations: {
            user: true,
            activity: true,
        },
    });
    return turns;
});
exports.getTurnsService = getTurnsService;
const getTurnsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOne({
        where: { id },
        relations: {
            user: true,
        },
    });
    return turn;
});
exports.getTurnsByIdService = getTurnsByIdService;
const createTurnService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOneBy({ id: data.userId });
    if (!user) {
        throw new Error(`Usuario con ID ${data.userId} no encontrado`);
    }
    const activity = yield data_source_1.ActivityModel.findOneBy({ id: data.activity_id });
    if (!activity) {
        throw new Error(`Actividad con ID ${data.activity_id} no encontrada`);
    }
    const turn = data_source_1.TurnModel.create({
        date: new Date(data.date),
        time: data.time,
        status: "active",
        user: user,
        activity: activity,
    });
    return yield data_source_1.TurnModel.save(turn);
});
exports.createTurnService = createTurnService;
const cancelTurnService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOneBy({ id });
    if (!turn) {
        throw new Error(`Turno con ID ${id} no encontrado`);
    }
    if (turn.status === "cancelled") {
        throw new Error(`El turno ya está cancelado`);
    }
    turn.status = "cancelled";
    return yield data_source_1.TurnModel.save(turn);
});
exports.cancelTurnService = cancelTurnService;
