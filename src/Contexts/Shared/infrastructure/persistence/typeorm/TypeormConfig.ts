type TypeormDirectories = {
  entitiesDir: string,
  migrationsDir: string,
  subscribersDir: string
};

type TypeormConfig = {
  name: string,
  type: string,
  database: string,
  synchronize: boolean,
  logging: boolean,
  entities: string[],
  migrations: string[],
  subscribers: string[],
  cli: TypeormDirectories
};

export default TypeormConfig;
