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
exports.cancelTurnController = exports.createTurnController = exports.getTurnsByUserIdController = exports.getTurnsByIdController = exports.getTurnsController = void 0;
const turnsService_1 = require("../services/turnsService");
const getTurnsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield (0, turnsService_1.getTurnsService)();
    res.status(200).json(turns);
});
exports.getTurnsController = getTurnsController;
const getTurnsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = Number(req.params.id);
    if (isNaN(turnId)) {
        res.status(400).json({ message: "Invalid turn ID" });
        return;
    }
    const turn = yield (0, turnsService_1.getTurnsByIdService)(turnId);
    if (!turn) {
        res.status(404).json({ message: "Turn not found" });
        return;
    }
    res.status(200).json(turn);
});
exports.getTurnsByIdController = getTurnsByIdController;
const getTurnsByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
    }
    const turns = yield (0, turnsService_1.getTurnsByUserIdService)(userId);
    if (!turns) {
        res.status(404).json({ message: "Turn not found" });
        return;
    }
    res.status(200).json(turns);
});
exports.getTurnsByUserIdController = getTurnsByUserIdController;
const createTurnController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTurn = yield (0, turnsService_1.createTurnService)(req.body);
        res.status(201).json({
            message: "Turno creado exitosamente",
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.createTurnController = createTurnController;
const cancelTurnController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = Number(req.params.id);
    if (isNaN(turnId)) {
        res.status(400).json({ message: "Invalid turn ID" });
        return;
    }
    try {
        const turn = yield (0, turnsService_1.cancelTurnService)(turnId);
        res.status(200).json(turn);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
    // const turnId = Number(req.params.id);
    // if (isNaN(turnId)) {
    //   res.status(400).json({ message: "Invalid turn ID" });
    //   return;
    // }
    // const turn = await cancelTurnService(turnId);
    // if (!turn) {
    //   res.status(404).json({ message: "Turn not found" });
    //   return;
    // }
    // res.status(200).json(turn);
});
exports.cancelTurnController = cancelTurnController;
