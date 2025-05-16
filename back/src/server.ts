import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
import cors from "cors";
import path from "path";

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/uploads", express.static(path.join(__dirname, "../uploads")));

server.use(indexRouter);

export default server;
