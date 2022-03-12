import config from '../../config';
import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions';

export class TypeormConfigFactory {
  static createConfig(): MysqlConnectionOptions {
    return {
      name: 'default',
      type: 'mysql',
      host: config.get('typeorm.host'),
      port: config.get('typeorm.port'),
      username: config.get('typeorm.username'),
      password: config.get('typeorm.password'),
      database: config.get('typeorm.database'),
      synchronize: config.get('typeorm.synchronize'),
      logging: config.get('typeorm.logging'),
      entities: [
        `${config.get('typeorm.entities_dir')}/*.ts`
      ],
      migrations: [
        `${config.get('typeorm.migrations_dir')}/*.ts`
      ],
      subscribers: [
        `${config.get('typeorm.subscriptions_dir')}/*.ts`
      ],
      cli: {
        entitiesDir: config.get('typeorm.entities_dir'),
        migrationsDir: config.get('typeorm.migrations_dir'),
        subscribersDir: config.get('typeorm.subscriptions_dir')
      }
    };
  }
}
