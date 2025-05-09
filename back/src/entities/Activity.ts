import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Turn } from "./Turn";

@Entity({
  name: "activities",
})
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Turn, (turn) => turn.activity)
  turns: Turn[];
}
