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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurnService = exports.createTurnService = exports.getTurnsByUserIdService = exports.getTurnsByIdService = exports.getTurnsService = void 0;
var data_source_1 = require("../config/data-source");
var emailService_1 = require("./emailService");
var turns = [];
var id = 1;
var getTurnsService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var turns;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.TurnModel.find({
                    relations: {
                        user: true,
                        activity: true,
                    },
                })];
            case 1:
                turns = _a.sent();
                return [2 /*return*/, turns];
        }
    });
}); };
exports.getTurnsService = getTurnsService;
var getTurnsByIdService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var turn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.TurnModel.findOne({
                    where: { id: id },
                    relations: {
                        user: true,
                    },
                })];
            case 1:
                turn = _a.sent();
                return [2 /*return*/, turn];
        }
    });
}); };
exports.getTurnsByIdService = getTurnsByIdService;
var getTurnsByUserIdService = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var turns;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.TurnModel.find({
                    where: {
                        user: {
                            id: userId,
                        },
                    },
                    relations: {
                        user: true,
                        activity: true,
                    },
                    order: {
                        id: "ASC",
                        date: "ASC",
                        time: "ASC",
                    },
                })];
            case 1:
                turns = _a.sent();
                return [2 /*return*/, turns];
        }
    });
}); };
exports.getTurnsByUserIdService = getTurnsByUserIdService;
var createTurnService = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var user, activity, turn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.UserModel.findOneBy({ id: data.userId })];
            case 1:
                user = _a.sent();
                if (!user) {
                    throw new Error("Usuario con ID ".concat(data.userId, " no encontrado"));
                }
                return [4 /*yield*/, data_source_1.ActivityModel.findOneBy({ id: data.activity_id })];
            case 2:
                activity = _a.sent();
                if (!activity) {
                    throw new Error("Actividad con ID ".concat(data.activity_id, " no encontrada"));
                }
                turn = data_source_1.TurnModel.create({
                    date: new Date(data.date),
                    time: data.time,
                    status: "active",
                    user: user,
                    activity: activity,
                });
                return [4 /*yield*/, data_source_1.TurnModel.save(turn)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, emailService_1.sendTurnConfirmationEmail)(user.email, user, activity, new Date(data.date), data.time)];
            case 4:
                _a.sent();
                return [2 /*return*/, turn];
        }
    });
}); };
exports.createTurnService = createTurnService;
var cancelTurnService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var turn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.TurnModel.findOneBy({ id: id })];
            case 1:
                turn = _a.sent();
                if (!turn) {
                    throw new Error("Turno con ID ".concat(id, " no encontrado"));
                }
                if (turn.status === "cancelled") {
                    throw new Error("El turno ya est\u00E1 cancelado");
                }
                turn.status = "cancelled";
                return [4 /*yield*/, data_source_1.TurnModel.save(turn)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.cancelTurnService = cancelTurnService;
