import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>BL layer said Hello World!</h1><br><h2>Nest APP is alive!</h2>';
  }
}
