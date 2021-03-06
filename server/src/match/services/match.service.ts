import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PubSub } from 'graphql-subscriptions';
import { Member } from 'src/member/entities/member.entity';
import { Repository } from 'typeorm';
import { Match } from '../entities/match.entity';

@Injectable()
export class MatchService {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        @InjectRepository(Match)
        private readonly matchRepository: Repository<Match>,
        @InjectRepository(Member)
        private readonly memberRepository: Repository<Member>
    ) { }

    async createMatch(userId1: number, userId2: number) {
        const newMatch = new Match()
        await this.matchRepository.save(newMatch)

        const newMember1 = new Member(newMatch.id, userId1, userId2)
        const newMember2 = new Member(newMatch.id, userId2, userId1)
        await this.memberRepository.save([newMember1, newMember2])

        this.pubSub.publish('newMatch', { ...newMatch, userId1, userId2 })

        return newMatch
    }

    findByUserId(userId: number) {
        return this.matchRepository.find({
            relations: ['users']
        })
    }
}
