import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, map } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async forwardGetRequest(request: Request): Promise<any> {
    const data = this.httpService
      .get(this.configService.get<string>('BASE_URL') + request.url)
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

  forwardPostRequest(request: Request): string {
    return 'Forward POST Reequest!';
  }
}
