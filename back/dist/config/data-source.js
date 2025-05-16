"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = exports.CredentialModel = exports.TurnModel = exports.UserModel = exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Credential_1 = require("../entities/Credential");
var Turn_1 = require("../entities/Turn");
var User_1 = require("../entities/User");
var Activity_1 = require("../entities/Activity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "amazing_amazonas_db",
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Turn_1.Turn, Credential_1.Credential, Activity_1.Activity],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.TurnModel = exports.AppDataSource.getRepository(Turn_1.Turn);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_1.Credential);
exports.ActivityModel = exports.AppDataSource.getRepository(Activity_1.Activity);
