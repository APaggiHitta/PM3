"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
var validateUserData = function (req, res, next) {
    var _a = req.body, name = _a.name, email = _a.email, birthdate = _a.birthdate, nDni = _a.nDni, username = _a.username, password = _a.password;
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        res.status(400).json({ message: "Faltan completar campos" });
        return;
    }
    if (typeof name !== "string" ||
        typeof email !== "string" ||
        typeof username !== "string" ||
        typeof password !== "string" ||
        typeof birthdate !== "string") {
        res
            .status(400)
            .json({ message: "Chequear los valores que deben ser tipo texto" });
        return;
    }
    if (isNaN(Date.parse(birthdate))) {
        res
            .status(400)
            .json({ message: "El formato de fecha de nacimiento es incorrecto" });
        return;
    }
    if (isNaN(nDni)) {
        res
            .status(400)
            .json({ message: "El documento debe tener formato numerico" });
        return;
    }
    next();
};
exports.validateUserData = validateUserData;
