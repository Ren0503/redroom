import { Inject } from '@nestjs/common';
import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { MemberService } from 'src/member/services/member.service';
import { MatchService } from '../services/match.service';

@Resolver()
export class MatchResolver {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        private readonly matchService: MatchService,
        private readonly memberService: MemberService,
    ) { }

    @Query('matches')
    matches(@Args('userId') userId: number) {
        return this.matchService.findByUserId(userId);
    }

    @Subscription('newMatch')
    createdMessage() {
        return {
            resolve: async (payload, args) => {
                if (
                    payload.userId1 !== args.userId &&
                    payload.userId2 !== args.userId
                ) {
                    return null;
                }

                return await this.memberService.findByMatchId(
                    payload.id,
                    args.userId,
                    ['matchedUser']
                );
            },
            subscribe: () => this.pubSub.asyncIterator('newMatch')
        }
    }
}
