import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DataBaseConfigType,
  EnvironmentVariables,
} from 'src/configs/config.type';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService<EnvironmentVariables>) {}

  @Get()
  getHello() {
    return this.config.get<DataBaseConfigType>('database')!.host;
  }
}
