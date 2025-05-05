import UserDto from "../dtos/UserDto";
import { createCredentialsService } from "./credentialsService";
import { UserModel } from "../config/data-source";
import { User } from "../entities/User";

export const getUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find({
    relations: {
      turns: true,
      credential: true,
    },
  });
  return users;
};

export const getUsersByIdService = async (id: number): Promise<User | null> => {
  const user = await UserModel.findOne({
    where: { id },
    relations: {
      turns: true,
      credential: true,
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
  });

  const newUser = await UserModel.save(user);

  const credential = await createCredentialsService({
    username: userData.username,
    password: userData.password,
    user: newUser, // asignar el usuario
  });

  newUser.credential = credential;

  return newUser;
};
