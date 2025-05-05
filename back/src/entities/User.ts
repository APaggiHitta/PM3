import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Turn } from "./Turn";
import { Credential } from "./Credential";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  nDni: number;

  @OneToMany(() => Turn, (turn) => turn.user)
  turns: Turn[];

  @OneToOne(() => Credential, (credential) => credential.user)
  credential: Credential;
}
