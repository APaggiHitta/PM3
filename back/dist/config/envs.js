"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.DATABASE_URL = process.env.DATABASE_URL;
