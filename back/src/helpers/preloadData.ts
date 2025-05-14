import {
  ActivityModel,
  AppDataSource,
  TurnModel,
  UserModel,
} from "../config/data-source";
import { User } from "../entities/User";
import ITurn from "../interfaces/ITurn";
import IUser from "../interfaces/IUser";
import IActivity from "../interfaces/IActivity";

const preloadActivities: IActivity[] = [
  {
    name: "Excursión de pesca",
  },
  {
    name: "Rafting",
  },
  {
    name: "Canotaje",
  },
  {
    name: "Campamento",
  },
  {
    name: "Senderismo nocturno",
  },
  {
    name: "Circuito indígena",
  },
];

const preloadUsers: IUser[] = [
  {
    name: "Juan Perez",
    email: "jperez@mail.com",
    birthdate: new Date("2010-03-12"),
    nDni: 345345345,
    username: "jperez",
    password: "juanperez",
  },
  {
    name: "Alvaro Paggi",
    email: "apaggi@mail.com",
    birthdate: new Date("2010-03-12"),
    nDni: 9384938,
    username: "apaggi",
    password: "alvaro",
  },
  {
    name: "Ruben Aguilera",
    email: "raguilera@mail.com",
    birthdate: new Date("2010-08-12"),
    nDni: 93958989,
    username: "raguilera",
    password: "ruben",
  },
  {
    name: "Facundo Paggi",
    email: "fpaggi@mail.com",
    birthdate: new Date("2011-03-12"),
    nDni: 238785,
    username: "fpaggi",
    password: "facundo",
  },
];

const preloadTurns: ITurn[] = [
  {
    date: new Date("2025-06-12"),
    time: "12:30",
    status: "active",
    userId: 1,
    activityId: 2,
  },
  {
    date: new Date("2025-06-13"),
    time: "13:30",
    status: "cancelled",
    userId: 1,
    activityId: 1,
  },
  {
    date: new Date("2025-06-20"),
    time: "14:30",
    status: "active",
    userId: 2,
    activityId: 4,
  },
  {
    date: new Date("2025-07-18"),
    time: "10:30",
    status: "cancelled",
    userId: 3,
    activityId: 5,
  },
];

export const preloadActivitiesData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const activities = await ActivityModel.find();
      if (activities.length)
        return console.log(
          "Activities data was not preloaded because it already exists in the database"
        );
      for await (const activity of preloadActivities) {
        const newActivity = await ActivityModel.create(activity);
        await transactionalEntityManager.save(newActivity);
      }
      console.log("Activities preload completed successfully");
    }
  );
};

export const preloadUsersData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const users = await UserModel.find();
      if (users.length)
        return console.log(
          "User data was not preloaded because it already exists in the database"
        );

      for await (const user of preloadUsers) {
        const newUser = await UserModel.create(user);
        await transactionalEntityManager.save(newUser);
      }

      console.log("Users data preload completed successfully");
    }
  );
};

export const preloadTurnsData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      for await (const turn of preloadTurns) {
        const newTurn = await TurnModel.create(turn);
        await transactionalEntityManager.save(newTurn);

        const user = await UserModel.findOneBy({ id: turn.userId });
        if (user) {
          newTurn.user = user;
          transactionalEntityManager.save(newTurn);
        }

        const activity = await ActivityModel.findOneBy({ id: turn.activityId });
        if (activity) {
          newTurn.activity = activity;
          transactionalEntityManager.save(newTurn);
        }
      }
      console.log("Turns data preload completed successfully");
    }
  );
};
