import { RabbitMQConfigType } from './config.type';

export class RabbitMQConfig {
  private static instance: RabbitMQConfig;
  private _config: RabbitMQConfigType;

  private constructor() {
    this._config = {
      host: process.env.RABBITMQ_HOST ?? 'localhost',
      port: parseInt(process.env.RABBITMQ_PORT ?? '5672'),
      queue: process.env.RABBITMQ_QUEUE ?? 'queue',
    };
  }

  static getInstance(): RabbitMQConfig {
    if (!RabbitMQConfig.instance) {
      RabbitMQConfig.instance = new RabbitMQConfig();
    }
    return RabbitMQConfig.instance;
  }

  get config(): RabbitMQConfigType {
    return this._config;
  }
}
