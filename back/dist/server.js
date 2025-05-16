"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var indexRouter_1 = __importDefault(require("./routes/indexRouter"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var server = (0, express_1.default)();
server.use((0, morgan_1.default)("dev"));
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
server.use(indexRouter_1.default);
exports.default = server;
