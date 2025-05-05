import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dtos/CredentialDto";

let credentials: ICredential[] = [];
let credentialsId = 1;

export const createCredentialsService = async (
  credentialData: CredentialDto
): Promise<number> => {
  const newCredentials: ICredential = {
    id: credentialsId,
    userName: credentialData.userName,
    password: credentialData.password,
  };

  credentials.push(newCredentials);
  credentialsId++;
  return newCredentials.id;
};

export const validateCredentialsService = async (
  credentialData: CredentialDto
): Promise<number | null> => {
  const existing = credentials.find(
    (cred) =>
      cred.userName === credentialData.userName &&
      cred.password === credentialData.password
  );

  return existing ? existing.id : null;
};
