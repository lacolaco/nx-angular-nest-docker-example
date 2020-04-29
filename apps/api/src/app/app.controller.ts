import { Controller, Get } from '@nestjs/common';

import { Message } from '@angular-nest-docker-example/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/hello')
  getData(): Message {
    return this.appService.getData();
  }
}
