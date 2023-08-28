export type DataBaseConfigType = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  debug: boolean;
};

export type RedisConfigType = {
  host: string;
  port: number;
};

export type RabbitMQConfigType = {
  host: string;
  port: number;
  queue: string;
};

export type GraphqlConfigType = {
  playground: boolean;
  schema: string;
};

export type EnvironmentVariables = {
  database: DataBaseConfigType;
  redis: RedisConfigType;
  rabbitmq: RabbitMQConfigType;
  graphql: GraphqlConfigType;
};
