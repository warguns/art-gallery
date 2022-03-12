import PictureRepository from '../../domain/PictureRepository';
import { SaveCommand } from './SaveCommand';
import {Picture} from '../../domain/Picture';
import {Uuid} from '../../../../Shared/domain/value-object/Uuid';
import {PictureId} from '../../../Shared/domain/Pictures/PictureId';
import Money from '../../domain/Money';
import {CommandHandler} from '../../../../Shared/domain/CommandHandler';
import {Command} from '../../../../Shared/domain/Command';

export default class SaveHandler implements CommandHandler<SaveCommand> {

    private pictureRepository: PictureRepository;

    constructor(pictureRepository: PictureRepository) {
        this.pictureRepository = pictureRepository;
    }

    async handle(command: SaveCommand): Promise<void> {
      const picture = new Picture(
        new PictureId(Uuid.random().value),
        command.name,
        command.path,
        new Money(command.money, command.symbol)
      );
      console.log(picture.toPrimitives());
      await this.pictureRepository.save(picture);
    }

    subscribedTo(): Command {
      return SaveCommand;
    }
}
