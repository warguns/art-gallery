import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot';
import {Connection, EntitySchema, ObjectLiteral, Repository} from 'typeorm';

export abstract class TypeormRepository<T extends AggregateRoot & ObjectLiteral> {
  constructor(private _client: Promise<Connection>) {}

  protected abstract moduleEntity(): EntitySchema;

  protected async collection(): Promise<Repository<T>> {
    return (await this.getRepository());
  }

  private async getRepository(): Promise<Repository<T>> {
    return (await this._client).manager.getRepository<T>(this.moduleEntity());
  }

  protected async persist(aggregateRoot: T): Promise<T> {
    return new Promise(async (resolve) =>  {
      await (await this.getRepository()).save(aggregateRoot.toPrimitives());
      resolve(aggregateRoot);
    });
  }
}
