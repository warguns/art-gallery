import {EntitySchema} from 'typeorm';
import { PictureEntity } from '../entity/TypeormPicture';
import PictureRepository from '../../../domain/PictureRepository';
import { Picture } from '../../../domain/Picture';
import { TypeormRepository } from '../../../../../Shared/infrastructure/persistence/typeorm/TypeormRepository';
import {PictureId} from '../../../../Shared/domain/Pictures/PictureId';

export default class TypeormPictureRepository extends TypeormRepository<Picture> implements PictureRepository {

  async all(): Promise<Picture[]> {
    return (await this.collection()).find();
  }

  async save(picture: Picture): Promise<Picture> {
      return await this.persist(picture);
  }

  async search(id: PictureId): Promise<Picture|undefined> {
    return (await this.collection())
      .createQueryBuilder('p')
      .where('p.id = :id', { id: id.toString() })
      .getOne();
  }

  protected moduleEntity(): EntitySchema {
    return PictureEntity;
  }
}
