import { Inject, UseGuards } from '@nestjs/common';
import { 
    Args, 
    Mutation, 
    Query, 
    Resolver, 
    Subscription 
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GqlAuthGuard } from 'src/auth/guard/auth.guard';
import { UserDecorator } from 'src/user/decorators/user.decorator';
import { LikeInput } from '../dtos/like.dto';
import { LikeService } from '../services/like.service';

@Resolver()
export class LikeResolver {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        private readonly likeService: LikeService
    ) { }

    @Query('likes')
    @UseGuards(new GqlAuthGuard())
    likes(@UserDecorator() user) {
        return this.likeService.getByUserIdAndCount(user.id)
    }

    @Mutation('like')
    like(@Args('input') like: LikeInput) {
        return this.likeService.like(like)
    }

    @Subscription('newLike')
    newLike() {
        return {
            resolve: (payload, args) => {
                if (payload.toUserId !== args.userId) {
                    return null
                }
                return true
            },
            subscribe: () => this.pubSub.asyncIterator('newLike')
        }
    }
}
