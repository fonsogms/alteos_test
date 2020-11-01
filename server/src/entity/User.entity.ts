import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Gender } from "./gender.enum";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  _id: string;
  @Column()
  age: number;
  @Column()
  eyeColor: string;
  @Column()
  name: string;
  @Column()
  gender: Gender;
  @Column()
  company!: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  address: string;
}
