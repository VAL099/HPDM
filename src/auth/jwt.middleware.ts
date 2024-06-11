// src/auth/jwt.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

// => https://chatgpt.com/c/0bd451b5-ed57-4381-8e2c-50b6d680a692 

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (req.path.startsWith('/auth')) {
      return next();
    }

    const token = req.cookies['jwt'];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });
      console.log(req.body)
      req.user = payload;
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  }
}
