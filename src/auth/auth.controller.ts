import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService, UsersService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserCreateDTO, UserLoginDTO } from './auth.dto';
import { Request, Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @ApiBody({ type: UserLoginDTO })
  @UseGuards(AuthService)
  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { access_token } = await this.authService.login(req.body);
    res.cookie('jwt', access_token, { httpOnly: true });
    return res.send({ message: 'Login successful' });
  }

  @Post('register')
  @ApiBody({ type: UserCreateDTO })
  async register(@Req() req) {
    return this.usersService.create(req.body);
  }
}
