import { Request, Response } from "express";
import { Activity } from "../entities/Activity";
import { getActivitiesService } from "../services/activitiesService";

export const getActivitiesController = async (req: Request, res: Response) => {
  const activities: Activity[] = await getActivitiesService();
  res.status(200).json(activities);
};
