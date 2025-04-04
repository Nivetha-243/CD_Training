import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentsDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    school: string

    @Column()
    language: string

    @Column()
    email: string

    @Column()
    password: string
}
