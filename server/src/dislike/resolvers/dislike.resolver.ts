import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guard/auth.guard';
import { UserDecorator } from 'src/user/decorators/user.decorator';
import { DislikeService } from '../services/dislike.service';

@Resolver()
export class DislikeResolver {
    constructor(private readonly dislikeService: DislikeService) { }

    @Mutation('dislike')
    @UseGuards(new GqlAuthGuard())
    dislike(@Args('toUserId') toUserId: number, @UserDecorator() user: any) {
        return this.dislikeService.createDislike(user.id, toUserId);
    }
}
