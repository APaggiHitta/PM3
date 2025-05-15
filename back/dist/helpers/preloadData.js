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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadTurnsData = exports.preloadUsersData = exports.preloadActivitiesData = void 0;
const data_source_1 = require("../config/data-source");
const preloadActivities = [
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
const preloadUsers = [
    {
        name: "Alvaro Paggi",
        email: "apaggi@mail.com",
        birthdate: new Date("2010-03-12"),
        nDni: 9384938,
        username: "apaggi@mail.com",
        password: "holanda",
    },
];
const preloadTurns = [
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
];
const preloadActivitiesData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const activities = yield data_source_1.ActivityModel.find();
        if (activities.length)
            return console.log("Activities data was not preloaded because it already exists in the database");
        try {
            for (var _d = true, preloadActivities_1 = __asyncValues(preloadActivities), preloadActivities_1_1; preloadActivities_1_1 = yield preloadActivities_1.next(), _a = preloadActivities_1_1.done, !_a; _d = true) {
                _c = preloadActivities_1_1.value;
                _d = false;
                const activity = _c;
                const newActivity = yield data_source_1.ActivityModel.create(activity);
                yield transactionalEntityManager.save(newActivity);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadActivities_1.return)) yield _b.call(preloadActivities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log("Activities preload completed successfully");
    }));
});
exports.preloadActivitiesData = preloadActivitiesData;
const preloadUsersData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_2, _b, _c;
        const users = yield data_source_1.UserModel.find();
        if (users.length)
            return console.log("User data was not preloaded because it already exists in the database");
        try {
            for (var _d = true, preloadUsers_1 = __asyncValues(preloadUsers), preloadUsers_1_1; preloadUsers_1_1 = yield preloadUsers_1.next(), _a = preloadUsers_1_1.done, !_a; _d = true) {
                _c = preloadUsers_1_1.value;
                _d = false;
                const user = _c;
                const newUser = yield data_source_1.UserModel.create(user);
                yield transactionalEntityManager.save(newUser);
                const newCredential = yield data_source_1.CredentialModel.create({
                    username: user.username,
                    password: user.password,
                    user: newUser, // asociación OneToOne
                });
                yield transactionalEntityManager.save(newCredential);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadUsers_1.return)) yield _b.call(preloadUsers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        console.log("Users data preload completed successfully");
    }));
});
exports.preloadUsersData = preloadUsersData;
const preloadTurnsData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_3, _b, _c;
        try {
            for (var _d = true, preloadTurns_1 = __asyncValues(preloadTurns), preloadTurns_1_1; preloadTurns_1_1 = yield preloadTurns_1.next(), _a = preloadTurns_1_1.done, !_a; _d = true) {
                _c = preloadTurns_1_1.value;
                _d = false;
                const turn = _c;
                const newTurn = yield data_source_1.TurnModel.create(turn);
                yield transactionalEntityManager.save(newTurn);
                const user = yield data_source_1.UserModel.findOneBy({ id: turn.userId });
                if (user) {
                    newTurn.user = user;
                    transactionalEntityManager.save(newTurn);
                }
                const activity = yield data_source_1.ActivityModel.findOneBy({ id: turn.activityId });
                if (activity) {
                    newTurn.activity = activity;
                    transactionalEntityManager.save(newTurn);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadTurns_1.return)) yield _b.call(preloadTurns_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        console.log("Turns data preload completed successfully");
    }));
});
exports.preloadTurnsData = preloadTurnsData;
