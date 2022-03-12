import {Connection} from 'typeorm';
import { EnvironmentArranger } from '../arranger/EnvironmentArranger';
import {PictureEntity} from '../../../../../src/Contexts/Art/Pictures/infrastructure/persistence/entity/TypeormPicture';

export class TypeormEnvironmentArranger extends EnvironmentArranger {

  constructor(private _client: Promise<Connection>) {
    super();
  }

  public async arrange(): Promise<void> {
    await this.cleanDatabase();
  }

  protected async cleanDatabase(): Promise<void> {
    const collections = await this.collections();
    const client = await this.client();

    for (const collection of collections) {
      await client.getRepository(collection).clear();
    }
  }

  private async collections(): Promise<any[]> {
    return new Promise((resolve) => resolve([
      PictureEntity
    ]));
  }

  protected client(): Promise<Connection> {
    return this._client;
  }

  public async close(): Promise<void> {
    return (await this.client()).close();
  }
}
