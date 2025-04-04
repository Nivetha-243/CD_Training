import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Classification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  under: number;

  @Column()
  normal: number;

  @Column()
  over: number;
}
