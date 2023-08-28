import { DataBaseConfigType } from './config.type';

export class DataBaseConfig {
  private static instance: DataBaseConfig;
  private _config: DataBaseConfigType;

  private constructor() {
    this._config = {
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: parseInt(process.env.DATABASE_PORT ?? '5432'),
      username: process.env.DATABASE_USERNAME ?? 'postgres',
      password: process.env.DATABASE_PASSWORD ?? 'postgres',
      database: process.env.DATABASE_NAME ?? 'postgres',
      debug: process.env.DATABASE_DEBUG === 'true',
    };
  }

  static getInstance(): DataBaseConfig {
    if (!DataBaseConfig.instance) {
      DataBaseConfig.instance = new DataBaseConfig();
    }
    return DataBaseConfig.instance;
  }

  get config(): DataBaseConfigType {
    return this._config;
  }
}
