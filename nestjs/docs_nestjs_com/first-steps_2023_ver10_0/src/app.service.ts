import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  forwardGetRequest(): string {
    return 'Forward GET Request!';
  }

  forwardPostRequest(): string {
    return 'Forward POST Reequest!';
  }

}
