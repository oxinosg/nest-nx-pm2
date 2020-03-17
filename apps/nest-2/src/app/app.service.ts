import { Injectable } from '@nestjs/common';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('asd: ', process.env);
    return { message: `Welcome to nest-2! env: ${environment.production}` };
  }
}
