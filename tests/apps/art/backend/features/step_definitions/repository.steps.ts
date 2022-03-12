import { Given } from 'cucumber';
import container from '../../../../../../src/apps/art/backend/dependency-injection';
import PictureRepository from '../../../../../../src/Contexts/Art/Pictures/domain/PictureRepository';
import { Picture } from '../../../../../../src/Contexts/Art/Pictures/domain/Picture';
import Money from '../../../../../../src/Contexts/Art/Pictures/domain/Money';
import { PictureId } from '../../../../../../src/Contexts/Art/Shared/domain/Pictures/PictureId';

const pictureRepository: PictureRepository = container.get('Art.pictures.PictureRepository');

Given('there is the picture:', async (picture: any) => {
  const { id, name, path, money, symbol } = JSON.parse(picture);
  await pictureRepository.save(new Picture(new PictureId(id), name, path, new Money(money, symbol)));
});
