import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guard/auth.guard';
import { UserDecorator } from '../decorators/user.decorator';
import { LoginInput } from '../dtos/login.dto';
import { RegisterInput } from '../dtos/register.dto';
import { UserService } from '../services/user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query('me')
    @UseGuards(new GqlAuthGuard())
    me(@UserDecorator() user) {
        return this.userService.getUserById(user.id, [
            'matches',
            'matches.match',
            'matches.matchedUser'
        ]);
    }

    @Query('user')
    getUser(@Args('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Query('users')
    getUsers() {
        return this.userService.getAllUser();
    }

    @Mutation('register')
    register(@Args('input') register: RegisterInput) {
        return this.userService.register(register);
    }

    @Mutation('login')
    login(@Args('input') login: LoginInput) {
        return this.userService.login(login);
    }
}
