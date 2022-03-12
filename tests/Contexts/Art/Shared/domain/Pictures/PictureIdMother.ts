import { UuidMother } from '../../../../Shared/domain/UuidMother';
import {PictureId} from '../../../../../../src/Contexts/Art/Shared/domain/Pictures/PictureId';

export class PictureIdMother {
  static create(value: string): PictureId {
    return new PictureId(value);
  }

  static creator() {
    return () => PictureIdMother.random();
  }

  static random(): PictureId {
    return this.create(UuidMother.random());
  }
}
