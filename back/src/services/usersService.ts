import UserDto from "../dtos/UserDto";
import { createCredentialsService } from "./credentialsService";
import { CredentialModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";

export const getUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find({
    relations: {
      turns: true,
      // credential: true,
    },
  });
  return users;
};

export const getUsersByIdService = async (id: number): Promise<User | null> => {
  const user = await UserModel.findOne({
    where: { id },
    relations: {
      turns: true,
      // credential: true,
    },
  });
  return user;
};

export const createUserService = async (userData: UserDto): Promise<User> => {
  const user = UserModel.create({
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    photo: userData.photo,
  });

  const newUser = await UserModel.save(user);

  const credential = await createCredentialsService({
    username: userData.username,
    password: userData.password,
    user: newUser,
  });

  newUser.credential = credential;

  return newUser;
};

export const userLoginService = async (username: string, password: string) => {
  const credential = await CredentialModel.findOne({
    where: { username },
    relations: ["user"],
  });

  if (!credential || credential.password !== password) {
    throw new Error("Credenciales inválidas");
  }

  return credential.user;
};
