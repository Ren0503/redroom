import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/service/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @Inject('bcrypt') private readonly bcrypt: any,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) { }

    async getUserById(id: number, relations: string[] = []) {
        return await this.userRepository.findOne(id, { relations });
    }
}
