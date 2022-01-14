import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/services/user.service';
import { JwtPayload } from '../interface/auth.interface';

@Injectable()
export class AuthService {
    constructor (
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async signId(id: number) {
        const user: JwtPayload = { id };
        return this.jwtService.sign(user);
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.getUserById(payload.id);
    }
}
