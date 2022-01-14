import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { PubSupProvider } from '../PubSubProvider';
import { MessageResolver } from './resolvers/message.resolver';
import { MessageService } from './services/message.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageResolver, MessageService, PubSupProvider]
})
export class MessageModule { }
