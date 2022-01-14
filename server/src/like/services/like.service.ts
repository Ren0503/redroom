import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PubSub } from 'graphql-subscriptions';
import { MatchService } from 'src/match/services/match.service';
import { Repository } from 'typeorm';
import { LikeInput } from '../dtos/like.dto';
import { Like } from '../entities/like.entity';

@Injectable()
export class LikeService {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>,
        private readonly matchService: MatchService
    ) { }

    getById(id: number) {
        return this.likeRepository.findOne(id);
    }

    getByUserIdAndCount(userId: number) {
        return this.likeRepository
            .createQueryBuilder('like')
            .where('like.toUserId = :userId', { userId })
            .andWhere(`like.date > (now() - interval '1 day')`)
            .getCount()
    }

    async like(like: LikeInput) {
        const { userId, toUserId } = like;

        const isMatch = await this.likeRepository.findOne({
            where: { userId: toUserId, toUserId: userId }
        });

        if (isMatch) {
            this.matchService.createMatch(userId, toUserId);

            this.likeRepository.remove(isMatch);

            return 'match';
        }

        const newLike = this.likeRepository.create({
            ...like,
            date: new Date()
        });
        await this.likeRepository.save(newLike);

        this.pubSub.publish('newLike', newLike);
    }
}
