import { Request, Response, NextFunction } from "express";

export const validateUserData = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, birthdate, nDni, username, password } = req.body;

  if (!name || !email || !birthdate || !nDni || !username || !password) {
    res.status(400).json({ message: "Faltan completar campos" });
    return;
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof birthdate !== "string"
  ) {
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
