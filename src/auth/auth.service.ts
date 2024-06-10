import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserCreateDTO } from './auth.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService{
  constructor(private prisma: PrismaService){}

    async create(dto: UserCreateDTO){
      return await this.prisma.users.create(
        {data: dto}
      );
    }

    async authenticate(idnp: string){
      const user = await this.prisma.users.findUnique({
        where: {
          idnp: idnp
        }
      });
      return user
    }
}


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    // Here I need to make a table with credentials and then to import UsersService
  ) {}

  async validateUser(idnp: string, password: string): Promise<any> {
    let user = await this.usersService.authenticate(idnp);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // Supposing on front there will be a verification of the role
    const payload = { idnp: user.idnp, sub: user.userId, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
