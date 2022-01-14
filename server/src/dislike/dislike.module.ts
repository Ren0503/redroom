import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dislike } from './entities/dislike.entity';
import { DislikeResolver } from './resolvers/dislike.resolver';
import { DislikeService } from './services/dislike.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dislike])],
  providers: [DislikeService, DislikeResolver]
})
export class DislikeModule { }
