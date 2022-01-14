import { Inject } from '@nestjs/common';
import { 
    Args, 
    Mutation, 
    Query, 
    Resolver, 
    Subscription 
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { MessageInput } from '../dtos/message.dto';
import { MessageService } from '../services/message.service';

@Resolver()
export class MessageResolver {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        private readonly messageService: MessageService
    ) { }

    @Query('messages')
    messages(@Args('matchId') matchId: number, @Args('cursor') cursor: string) {
        return this.messageService.getByMatchId(matchId, cursor);
    }

    @Mutation('createMessage')
    createMessage(@Args('input') message: MessageInput) {
        this.messageService.createMessage(message);
    }

    @Subscription('createdMessage')
    createdMessage() {
        return {
            resolve: (payload, args) => {
                if (payload.matchId !== parseInt(args.matchId, 10)) {
                    return null;
                }
                return payload;
            },
            subscribe: () => this.pubSub.asyncIterator('createdMessage')
        }
    }
}
