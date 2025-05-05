import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

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
  user: User;
}
