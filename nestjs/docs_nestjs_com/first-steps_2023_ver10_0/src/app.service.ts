import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async forwardGetRequest(): Promise<any> {
    const data = this.httpService
      .get('https://XXXXXX')
      .pipe(
        map((res) => res.data?.data),
        map((data) => {
          return {
            data: data,
          };
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
    return data;
  }

  forwardPostRequest(): string {
    return 'Forward POST Reequest!';
  }
}
