import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dislike } from 'src/dislike/entities/dislike.entity';
import { Like } from 'src/like/entities/like.entity';
import { Member } from 'src/member/entities/member.entity';
import { User } from 'src/user/entities/user.entity';
import { DiscoverResolver } from './resolvers/discover.resolver';
import { DiscoverService } from './services/discover.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Dislike, Member, Like])],
  providers: [DiscoverResolver, DiscoverService]
})
export class DiscoverModule { }
