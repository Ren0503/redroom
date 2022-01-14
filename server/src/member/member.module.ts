import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { MemberService } from './services/member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule { }
