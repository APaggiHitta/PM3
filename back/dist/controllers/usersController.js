"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.userLoginController = exports.createUserController = exports.getUserByIdController = exports.getUsersController = void 0;
var usersService_1 = require("../services/usersService");
var getUsersController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, usersService_1.getUsersService)()];
            case 1:
                users = _a.sent();
                res.status(200).json(users);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: error_1.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsersController = getUsersController;
var getUserByIdController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = Number(req.params.id);
                if (isNaN(userId)) {
                    res.status(400).json({ message: "Invalid user ID" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, usersService_1.getUserByIdService)(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                    return [2 /*return*/];
                }
                res.status(200).json(user);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: error_2.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserByIdController = getUserByIdController;
var createUserController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var photoFilename, newUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                photoFilename = req.file ? req.file.filename : undefined;
                return [4 /*yield*/, (0, usersService_1.createUserService)(__assign(__assign({}, req.body), { photo: photoFilename }))];
            case 1:
                newUser = _a.sent();
                res.status(201).json({ message: "Usuario creado correctamente" });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res
                    .status(400)
                    .json({ error: error_3.message || "Error al crear el usuario." });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUserController = createUserController;
var userLoginController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                if (!username || !password) {
                    res.status(400).json({ message: "Faltan credenciales" });
                    return [2 /*return*/];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, usersService_1.userLoginService)(username, password)];
            case 2:
                user = _b.sent();
                res.status(200).json({
                    login: true,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        birthdate: user.birthdate,
                        nDni: user.nDni,
                        photo: user.photo,
                    },
                });
                return [2 /*return*/];
            case 3:
                error_4 = _b.sent();
                res.status(400).json({ login: false, message: "Credenciales incorrectas" });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.userLoginController = userLoginController;
