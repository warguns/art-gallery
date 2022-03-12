import { Nullable } from '../../../domain/Nullable';
import {Connection, createConnection} from 'typeorm';
import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions';

export class TypeormClientFactory {
  private static clients: { [key: string]: Connection } = {};

  static async createClient(contextName: string, config: MysqlConnectionOptions): Promise<Connection> {
    let client = TypeormClientFactory.getClient(contextName);

    if (!client) {
      client = await TypeormClientFactory.createAndConnectClient(config);

      TypeormClientFactory.registerClient(client, contextName);
    }

    return client;
  }

  private static getClient(contextName: string): Nullable<Connection> {
    return TypeormClientFactory.clients[contextName];
  }

  private static async createAndConnectClient(config: MysqlConnectionOptions): Promise<Connection> {
    return await createConnection(config);
  }

  private static registerClient(client: Connection, contextName: string): void {
    TypeormClientFactory.clients[contextName] = client;
  }
}
