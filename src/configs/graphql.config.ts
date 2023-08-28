import { GraphqlConfigType } from './config.type';

export class GraphqlConfig {
  private static instance: GraphqlConfig;
  private _config: GraphqlConfigType;

  private constructor() {
    this._config = {
      playground: process.env.GRAPHQL_PLAYGROUND === 'true',
      schema: process.env.GRAPHQL_SCHEMA_PATH ?? 'graphql/schema.graphql',
    };
  }

  static getInstance(): GraphqlConfig {
    if (!GraphqlConfig.instance) {
      GraphqlConfig.instance = new GraphqlConfig();
    }
    return GraphqlConfig.instance;
  }

  get config(): GraphqlConfigType {
    return this._config;
  }
}
