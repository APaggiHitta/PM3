import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import {
  preloadActivitiesData,
  preloadTurnsData,
  preloadUsersData,
} from "./helpers/preloadData";
import { appendFile } from "fs";

const initializeApp = async () => {
  await AppDataSource.initialize();
  await preloadActivitiesData();
  await preloadUsersData();
  await preloadTurnsData();

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

initializeApp();
