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

  @Column({ unique: true })
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  nDni: number;

  @Column({ nullable: true })
  photo: string;

  @OneToMany(() => Turn, (turn) => turn.user)
  turns: Turn[];

  @OneToOne(() => Credential, (credential) => credential.user)
  credential: Credential;
}
