import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @Column({
    type: "time",
  })
  time: string;

  @Column()
  status: string;
}
