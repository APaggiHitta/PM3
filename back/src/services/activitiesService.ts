import { ActivityModel } from "../config/data-source";
import { Activity } from "../entities/Activity";

export const getActivitiesService = async (): Promise<Activity[]> => {
  const activities = await ActivityModel.find();
  return activities;
};
