import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number ;
    @Column()
    name: string;
    @Column({nullable:true})
    description: string;
    @Column({nullable:true})
    releaseDate: Date;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}