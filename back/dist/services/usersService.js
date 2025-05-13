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
exports.userLoginService = exports.createUserService = exports.getUsersByIdService = exports.getUsersService = void 0;
const credentialsService_1 = require("./credentialsService");
const data_source_1 = require("../config/data-source");
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find({
        relations: {
            turns: true,
            // credential: true,
        },
    });
    return users;
});
exports.getUsersService = getUsersService;
const getUsersByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOne({
        where: { id },
        relations: {
            turns: true,
            // credential: true,
        },
    });
    return user;
});
exports.getUsersByIdService = getUsersByIdService;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = data_source_1.UserModel.create({
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
    });
    const newUser = yield data_source_1.UserModel.save(user);
    const credential = yield (0, credentialsService_1.createCredentialsService)({
        username: userData.username,
        password: userData.password,
        user: newUser,
    });
    newUser.credential = credential;
    return newUser;
});
exports.createUserService = createUserService;
const userLoginService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield data_source_1.CredentialModel.findOne({
        where: { username },
        relations: ["user"],
    });
    if (!credential || credential.password !== password) {
        throw new Error("Credenciales inválidas");
    }
    return credential.user;
});
exports.userLoginService = userLoginService;
