import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/service/auth.service';
import { Repository } from 'typeorm';
import { LoginInput } from '../dtos/login.dto';
import { RegisterInput } from '../dtos/register.dto';
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

    async getAllUser() {
        return await this.userRepository.find({
            relations: ['matches', 'matches.match', 'matches.matchesUser']
        });
    }

    async register(register: RegisterInput) {
        const { email, password } = register;

        const emailExists = await this.userRepository.findOne({
            where: { email }
        });

        if (emailExists) {
            return;
        }

        const hash = await this.bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            ...register,
            password: hash
        });
        await this.userRepository.save(newUser);

        return true;
    }

    async login(login: LoginInput) {
        const { email, password } = login;

        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            return;
        }

        const comparePasswords = await this.bcrypt.compare(
            password,
            user.password
        );

        if (!comparePasswords) {
            return;
        }

        const token = await this.authService.signId(user.id);

        return token;
    }
}
