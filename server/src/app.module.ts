import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DiscoverModule } from './discover/discover.module';
import { LikeModule } from './like/like.module';
import { DislikeModule } from './dislike/dislike.module';
import { MatchModule } from './match/match.module';
import { MemberModule } from './member/member.module';
import { MessageModule } from './message/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    UserModule,
    AuthModule,
    DiscoverModule,
    LikeModule,
    DislikeModule,
    MatchModule,
    MemberModule,
    MessageModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      url: process.env.DATABASE_URL,
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        ssl: true
      }
    }),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class'
      },
      path: '/'
    })
  ],
})
export class AppModule { }
