import { Member } from 'src/member/entities/member.entity';
import { Message } from 'src/message/entities/message.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from 'typeorm';

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @ManyToOne(() => Member, member => member.match)
    member: Member[];

    @OneToMany(() => Message, message => message.match)
    messages: Message[];

    constructor() {
        this.date = new Date();
    }
}
