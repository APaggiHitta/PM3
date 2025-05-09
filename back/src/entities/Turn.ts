import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Activity } from "./Activity";

@Entity({
  name: "turns",
})
export class Turn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "date",
  })
  date: Date;

  @Column()
  time: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.turns)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Activity, (activity) => activity.turns)
  @JoinColumn({ name: "activity_id" })
  activity: Activity;
}
