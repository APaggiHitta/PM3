import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const createCredentialsService = async (data: {
  username: string;
  password: string;
  user: User;
}): Promise<number> => {
  const credential = CredentialModel.create(data);
  return (await CredentialModel.save(credential)).id;
};

export const validateCredentialsService = async (data: {
  username: string;
  password: string;
}): Promise<number | null> => {
  const { username, password } = data;

  const credential = await CredentialModel.findOne({
    where: { username },
  });

  if (!credential) throw new Error("No existe el nombre de usuario");

  if (credential.password !== password)
    throw new Error("La contraseña es incorrecta");

  return credential.user.id;
};
