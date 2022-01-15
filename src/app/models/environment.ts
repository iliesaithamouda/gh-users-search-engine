export type EnvironmentType =
  | 'dev'
  | 'test'
  | 'production';

export type Environment = {
  production: boolean,
  api: {
    host: string
  }
};
