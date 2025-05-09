import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";
import { Activity } from "../entities/Activity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "amazing_amazonas_db",
  // dropSchema: true,
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
