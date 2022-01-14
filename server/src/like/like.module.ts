import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchModule } from 'src/match/match.module';
import { PubSupProvider } from 'src/PubSubProvider';
import { Like } from './entities/like.entity';
import { LikeResolver } from './resolvers/like.resolver';
import { LikeService } from './services/like.service';


@Module({
  imports: [TypeOrmModule.forFeature([Like]), MatchModule],
  providers: [LikeResolver, LikeService, PubSupProvider]
})
export class LikeModule {}
