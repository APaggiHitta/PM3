import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const createCredentialsService = async (data: {
  username: string;
  password: string;
  user: User;
}): Promise<Credential> => {
  const credential = CredentialModel.create(data);
  return await CredentialModel.save(credential);
};

// export const validateCredentialsService = async (
//   credentialData: CredentialDto
// ): Promise<number | null> => {
//   const existing = credentials.find(
//     (cred) =>
//       cred.userName === credentialData.userName &&
//       cred.password === credentialData.password
//   );

//   return existing ? existing.id : null;
// };
