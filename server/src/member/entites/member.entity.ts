import { Match } from 'src/match/entities/match.entity';
import { User } from 'src/user/entities/user.entity';
import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    matchId: number;

    @ManyToOne(() => Match)
    @JoinColumn()
    match: Match;

    @Column()
    userId: number;

    @ManyToOne(() => User, user => user.matches)
    user: User;

    @Column()
    matchedUserId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'matchedUserId' })
    matchedUser: User;

    constructor(matchId: number, userId: number, matchedUserId: number) {
        this.matchId = matchId;
        this.userId = userId;
        this.matchedUserId = matchedUserId;
    }
}
