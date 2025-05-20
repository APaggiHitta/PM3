export enum turnStatus {
  ACTIVE = "acive",
  CANCELLED = "cancelled",
}

interface ITurn {
  date: Date;
  time: string;
  userId: number;
  activityId: number;
  status: turnStatus;
}
export default ITurn;
