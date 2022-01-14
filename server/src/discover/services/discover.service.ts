import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dislike } from 'src/dislike/entities/dislike.entity';
import { Like } from 'src/like/entities/like.entity';
import { Member } from 'src/member/entities/member.entity';
import { User } from 'src/user/entities/user.entity';
import { In, Not, Repository } from 'typeorm';

@Injectable()
export class DiscoverService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Dislike)
        private readonly dislikeRepository: Repository<Dislike>,
        @InjectRepository(Member)
        private readonly memberRepository: Repository<Member>,
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>
    ) { }

    async search(userId: number) {
        const dislikes = await this.dislikeRepository.find({
            where: { userId },
            select: ['toUserId']
        });

        const matches = await this.memberRepository.find({
            where: { userId },
            select: ['matchedUserId']
        });
        
        const likes = await this.likeRepository.find({
            where: { userId },
            select: ['toUserId']
        });

        const ids = [userId];

        dislikes.forEach(dislike => ids.push(dislike.toUserId));
        matches.forEach(match => ids.push(match.matchedUserId));
        likes.forEach(like => ids.push(like.toUserId));

        return await this.userRepository.find({
            where: { id: Not(In(ids)) }
        });
    }
}
