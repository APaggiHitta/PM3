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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadTurnsData = exports.preloadUsersData = exports.preloadActivitiesData = void 0;
var data_source_1 = require("../config/data-source");
var preloadActivities = [
    {
        name: "Excursión de pesca",
    },
    {
        name: "Rafting",
    },
    {
        name: "Canotaje",
    },
    {
        name: "Campamento",
    },
    {
        name: "Senderismo nocturno",
    },
    {
        name: "Circuito indígena",
    },
    {
        name: "Avistamiento de aves",
    },
    {
        name: "Fotografía extrema",
    },
];
var preloadUsers = [
    {
        name: "Alvaro Paggi",
        email: "apaggi@mail.com",
        birthdate: new Date("2010-03-12"),
        nDni: 9384938,
        username: "apaggi@mail.com",
        password: "holanda",
    },
];
var preloadTurns = [
    {
        date: new Date("2025-06-12"),
        time: "12:30",
        status: "active",
        userId: 1,
        activityId: 2,
    },
    {
        date: new Date("2025-06-13"),
        time: "13:30",
        status: "cancelled",
        userId: 1,
        activityId: 1,
    },
    {
        date: new Date("2025-06-20"),
        time: "14:30",
        status: "active",
        userId: 1,
        activityId: 4,
    },
    {
        date: new Date("2025-07-18"),
        time: "10:30",
        status: "cancelled",
        userId: 1,
        activityId: 5,
    },
    {
        date: new Date("2025-07-18"),
        time: "10:30",
        status: "cancelled",
        userId: 1,
        activityId: 6,
    },
    {
        date: new Date("2025-07-18"),
        time: "10:30",
        status: "active",
        userId: 1,
        activityId: 7,
    },
    {
        date: new Date("2025-07-18"),
        time: "10:30",
        status: "cancelled",
        userId: 1,
        activityId: 8,
    },
];
var preloadActivitiesData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.transaction(function (transactionalEntityManager) { return __awaiter(void 0, void 0, void 0, function () {
                    var activities, _a, preloadActivities_1, preloadActivities_1_1, activity, newActivity, e_1_1;
                    var _b, e_1, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: return [4 /*yield*/, data_source_1.ActivityModel.find()];
                            case 1:
                                activities = _e.sent();
                                if (activities.length)
                                    return [2 /*return*/, console.log("Activities data was not preloaded because it already exists in the database")];
                                _e.label = 2;
                            case 2:
                                _e.trys.push([2, 9, 10, 15]);
                                _a = true, preloadActivities_1 = __asyncValues(preloadActivities);
                                _e.label = 3;
                            case 3: return [4 /*yield*/, preloadActivities_1.next()];
                            case 4:
                                if (!(preloadActivities_1_1 = _e.sent(), _b = preloadActivities_1_1.done, !_b)) return [3 /*break*/, 8];
                                _d = preloadActivities_1_1.value;
                                _a = false;
                                activity = _d;
                                return [4 /*yield*/, data_source_1.ActivityModel.create(activity)];
                            case 5:
                                newActivity = _e.sent();
                                return [4 /*yield*/, transactionalEntityManager.save(newActivity)];
                            case 6:
                                _e.sent();
                                _e.label = 7;
                            case 7:
                                _a = true;
                                return [3 /*break*/, 3];
                            case 8: return [3 /*break*/, 15];
                            case 9:
                                e_1_1 = _e.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 15];
                            case 10:
                                _e.trys.push([10, , 13, 14]);
                                if (!(!_a && !_b && (_c = preloadActivities_1.return))) return [3 /*break*/, 12];
                                return [4 /*yield*/, _c.call(preloadActivities_1)];
                            case 11:
                                _e.sent();
                                _e.label = 12;
                            case 12: return [3 /*break*/, 14];
                            case 13:
                                if (e_1) throw e_1.error;
                                return [7 /*endfinally*/];
                            case 14: return [7 /*endfinally*/];
                            case 15:
                                console.log("Activities preload completed successfully");
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.preloadActivitiesData = preloadActivitiesData;
var preloadUsersData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.transaction(function (transactionalEntityManager) { return __awaiter(void 0, void 0, void 0, function () {
                    var users, _a, preloadUsers_1, preloadUsers_1_1, user, newUser, newCredential, e_2_1;
                    var _b, e_2, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: return [4 /*yield*/, data_source_1.UserModel.find()];
                            case 1:
                                users = _e.sent();
                                if (users.length)
                                    return [2 /*return*/, console.log("User data was not preloaded because it already exists in the database")];
                                _e.label = 2;
                            case 2:
                                _e.trys.push([2, 11, 12, 17]);
                                _a = true, preloadUsers_1 = __asyncValues(preloadUsers);
                                _e.label = 3;
                            case 3: return [4 /*yield*/, preloadUsers_1.next()];
                            case 4:
                                if (!(preloadUsers_1_1 = _e.sent(), _b = preloadUsers_1_1.done, !_b)) return [3 /*break*/, 10];
                                _d = preloadUsers_1_1.value;
                                _a = false;
                                user = _d;
                                return [4 /*yield*/, data_source_1.UserModel.create(user)];
                            case 5:
                                newUser = _e.sent();
                                return [4 /*yield*/, transactionalEntityManager.save(newUser)];
                            case 6:
                                _e.sent();
                                return [4 /*yield*/, data_source_1.CredentialModel.create({
                                        username: user.username,
                                        password: user.password,
                                        user: newUser, // asociación OneToOne
                                    })];
                            case 7:
                                newCredential = _e.sent();
                                return [4 /*yield*/, transactionalEntityManager.save(newCredential)];
                            case 8:
                                _e.sent();
                                _e.label = 9;
                            case 9:
                                _a = true;
                                return [3 /*break*/, 3];
                            case 10: return [3 /*break*/, 17];
                            case 11:
                                e_2_1 = _e.sent();
                                e_2 = { error: e_2_1 };
                                return [3 /*break*/, 17];
                            case 12:
                                _e.trys.push([12, , 15, 16]);
                                if (!(!_a && !_b && (_c = preloadUsers_1.return))) return [3 /*break*/, 14];
                                return [4 /*yield*/, _c.call(preloadUsers_1)];
                            case 13:
                                _e.sent();
                                _e.label = 14;
                            case 14: return [3 /*break*/, 16];
                            case 15:
                                if (e_2) throw e_2.error;
                                return [7 /*endfinally*/];
                            case 16: return [7 /*endfinally*/];
                            case 17:
                                console.log("Users data preload completed successfully");
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.preloadUsersData = preloadUsersData;
var preloadTurnsData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.transaction(function (transactionalEntityManager) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, preloadTurns_1, preloadTurns_1_1, turn, newTurn, user, activity, e_3_1;
                    var _b, e_3, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                _e.trys.push([0, 9, 10, 15]);
                                _a = true, preloadTurns_1 = __asyncValues(preloadTurns);
                                _e.label = 1;
                            case 1: return [4 /*yield*/, preloadTurns_1.next()];
                            case 2:
                                if (!(preloadTurns_1_1 = _e.sent(), _b = preloadTurns_1_1.done, !_b)) return [3 /*break*/, 8];
                                _d = preloadTurns_1_1.value;
                                _a = false;
                                turn = _d;
                                return [4 /*yield*/, data_source_1.TurnModel.create(turn)];
                            case 3:
                                newTurn = _e.sent();
                                return [4 /*yield*/, transactionalEntityManager.save(newTurn)];
                            case 4:
                                _e.sent();
                                return [4 /*yield*/, data_source_1.UserModel.findOneBy({ id: turn.userId })];
                            case 5:
                                user = _e.sent();
                                if (user) {
                                    newTurn.user = user;
                                    transactionalEntityManager.save(newTurn);
                                }
                                return [4 /*yield*/, data_source_1.ActivityModel.findOneBy({ id: turn.activityId })];
                            case 6:
                                activity = _e.sent();
                                if (activity) {
                                    newTurn.activity = activity;
                                    transactionalEntityManager.save(newTurn);
                                }
                                _e.label = 7;
                            case 7:
                                _a = true;
                                return [3 /*break*/, 1];
                            case 8: return [3 /*break*/, 15];
                            case 9:
                                e_3_1 = _e.sent();
                                e_3 = { error: e_3_1 };
                                return [3 /*break*/, 15];
                            case 10:
                                _e.trys.push([10, , 13, 14]);
                                if (!(!_a && !_b && (_c = preloadTurns_1.return))) return [3 /*break*/, 12];
                                return [4 /*yield*/, _c.call(preloadTurns_1)];
                            case 11:
                                _e.sent();
                                _e.label = 12;
                            case 12: return [3 /*break*/, 14];
                            case 13:
                                if (e_3) throw e_3.error;
                                return [7 /*endfinally*/];
                            case 14: return [7 /*endfinally*/];
                            case 15:
                                console.log("Turns data preload completed successfully");
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.preloadTurnsData = preloadTurnsData;
