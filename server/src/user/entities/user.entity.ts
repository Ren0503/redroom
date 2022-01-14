import { Member } from 'src/member/entites/member.entity';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToMany 
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column()
    age: number;

    @Column({ nullable: true })
    job: string;

    @Column({ nullable: true })
    education: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => Member, member => member.user)
    matches: Member[];
}
