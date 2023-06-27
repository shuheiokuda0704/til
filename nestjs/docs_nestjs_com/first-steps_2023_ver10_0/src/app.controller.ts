import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('*')
  forwardGetRequest(@Req() request: Request): any {
    console.log(request.headers);

    return this.appService.forwardGetRequest();
  }

  @Post('*')
  forwardPostRequest(): string {
    return this.appService.forwardPostRequest();
  }
}
