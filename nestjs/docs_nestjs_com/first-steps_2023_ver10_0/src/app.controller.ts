import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('*')
  forwardGetRequest(): string {
    return this.appService.forwardGetRequest();
  }

  @Post('*')
  forwardPostRequest(): string {
    return this.appService.forwardPostRequest();
  }
}
