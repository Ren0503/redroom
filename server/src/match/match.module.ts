import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './entities/match.entity';
import { Member } from 'src/member/entities/member.entity';
import { MemberModule } from 'src/member/member.module';
import { PubSupProvider } from 'src/PubSubProvider';
import { MatchService } from './services/match.service';
import { MatchResolver } from './resolvers/match.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Member]), MemberModule],
  providers: [MatchResolver, MatchService, PubSupProvider],
  exports: [MatchService]
})
export class MatchModule {}
