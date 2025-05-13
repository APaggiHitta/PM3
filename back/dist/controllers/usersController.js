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
exports.userLoginController = exports.createUserController = exports.getUserByIdController = exports.getUsersController = void 0;
const usersService_1 = require("../services/usersService");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, usersService_1.getUsersService)();
    res.status(200).json(users);
});
exports.getUsersController = getUsersController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
    }
    const user = yield (0, usersService_1.getUsersByIdService)(userId);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.status(200).json(user);
});
exports.getUserByIdController = getUserByIdController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, usersService_1.createUserService)(req.body);
        // res.status(201).json(newUser);
        res.status(201).json({ message: "Usuario creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ error: "Error al crear el usuario." });
    }
});
exports.createUserController = createUserController;
const userLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: "Faltan credenciales" });
        return;
    }
    try {
        const user = yield (0, usersService_1.userLoginService)(username, password);
        res.status(200).json({
            login: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                nDni: user.nDni,
            },
        });
        return;
    }
    catch (error) {
        res.status(400).json({ login: false, message: "Credenciales incorrectas" });
        return;
    }
});
exports.userLoginController = userLoginController;
