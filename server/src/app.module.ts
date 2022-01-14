import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DiscoverModule } from './discover/discover.module';
import { LikeModule } from './like/like.module';
import { DislikeModule } from './dislike/dislike.module';
import { MatchModule } from './match/match.module';
import { MemberModule } from './member/member.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [UserModule, AuthModule, DiscoverModule, LikeModule, DislikeModule, MatchModule, MemberModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
