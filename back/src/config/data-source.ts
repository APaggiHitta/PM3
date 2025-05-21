import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";
import { Activity } from "../entities/Activity";
import { DATABASE_URL } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL,
  dropSchema: false,
  synchronize: true,
  logging: false,
  entities: [User, Turn, Credential, Activity],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const TurnModel = AppDataSource.getRepository(Turn);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const ActivityModel = AppDataSource.getRepository(Activity);
