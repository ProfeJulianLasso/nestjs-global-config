import { RedisConfigType } from './config.type';

export class RedisConfig {
  private static instance: RedisConfig;
  private _config: RedisConfigType;

  private constructor() {
    this._config = {
      host: process.env.REDIS_HOST ?? 'localhost',
      port: parseInt(process.env.REDIS_PORT ?? '6379'),
    };
  }

  static getInstance(): RedisConfig {
    if (!RedisConfig.instance) {
      RedisConfig.instance = new RedisConfig();
    }
    return RedisConfig.instance;
  }

  get config(): RedisConfigType {
    return this._config;
  }
}
