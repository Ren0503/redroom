import * as bcrypt from 'bcryptjs';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule)
  ],
  providers: [
    UserService,
    UserResolver,
    {
      provide: 'bcrypt',
      useValue: bcrypt
    }
  ],
  exports: [UserService]
})
export class UserModule { }
