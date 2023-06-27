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
    console.log(request.url);
    console.log(request.method);
    console.log(request.query);
    console.log(request.headers);
    console.log(request.cookies);

    return this.appService.forwardGetRequest(request);
  }

  @Post('*')
  forwardPostRequest(@Req() request: Request): any {
    return this.appService.forwardPostRequest(request);
  }
}
