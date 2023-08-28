import * as dotenv from 'dotenv';
import * as path from 'path';
import { EnvironmentVariables } from './config.type';
import { DataBaseConfig } from './database.config';
import { GraphqlConfig } from './graphql.config';
import { RabbitMQConfig } from './rabbitmq.config';
import { RedisConfig } from './redis.config';

export class Configuration {
  private static instance: Configuration;

  private constructor() {
    if (process.env.NODE_ENV) {
      const filename = process.env.NODE_ENV;
      const envFileWithPath = path.resolve(
        process.cwd(),
        'environments',
        `.env.${filename}`,
      );
      dotenv.config({ path: envFileWithPath });
    }
  }

  static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }
    return Configuration.instance;
  }

  getConfig(): EnvironmentVariables {
    return {
      database: DataBaseConfig.getInstance().config,
      redis: RedisConfig.getInstance().config,
      rabbitmq: RabbitMQConfig.getInstance().config,
      graphql: GraphqlConfig.getInstance().config,
    };
  }
}
