import {PictureId} from '../../../../../src/Contexts/Art/Shared/domain/Pictures/PictureId';
import {Picture} from '../../../../../src/Contexts/Art/Pictures/domain/Picture';
import Money from '../../../../../src/Contexts/Art/Pictures/domain/Money';
import {SaveCommand} from '../../../../../src/Contexts/Art/Pictures/application/Create/SaveCommand';
import {PictureIdMother} from '../../Shared/domain/Pictures/PictureIdMother';
import {PictureNameMother} from './PictureNameMother';
import {PicturePathMother} from './PicturePathMother';
import {MoneyMother} from './MoneyMother';

export class PictureMother {
  static create(id: PictureId, name: string, path: string, money: Money): Picture {
    return new Picture(id, name, path, money);
  }

  static fromCommand(command: SaveCommand): Picture {
    return this.create(
      PictureIdMother.random(),
      command.name,
      command.path,
      new Money(command.money, '$')
    );
  }

  static random(): Picture {
    return this.create(
      PictureIdMother.random(),
      PictureNameMother.random(),
      PicturePathMother.random(),
      MoneyMother.random()
    );
  }
}
