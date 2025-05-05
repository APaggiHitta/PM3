import IUser from "../interfaces/IUser";
import UserDto from "../dtos/UserDto";
import { createCredentialsService } from "./credentialsService";

let users: IUser[] = [];
let id = 1;

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const getUsersByIdService = async (
  userId: number
): Promise<IUser | undefined> => {
  const user = users.find((u) => u.id === userId);
  return user;
};

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  const credentialId = await createCredentialsService({
    userName: userData.name,
    password: "temporal123",
  });

  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentialsId: credentialId,
  };
  users.push(newUser);
  id++;
  return newUser;
};
