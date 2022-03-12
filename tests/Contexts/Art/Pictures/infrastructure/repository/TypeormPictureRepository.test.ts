import container from '../../../../../../src/apps/art/backend/dependency-injection';
import PictureRepository from '../../../../../../src/Contexts/Art/Pictures/domain/PictureRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { PictureMother } from '../../domain/PictureMother';

const repository: PictureRepository = container.get('Art.pictures.PictureRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Art.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('PictureRepository', () => {
  describe('#save', () => {
    it('should save a picture', async () => {
      const picture = PictureMother.random();

      await repository.save(picture);
    });
  });

  describe('#search', () => {
    it('should return an existing picture', async () => {
      const expectedPicture = PictureMother.random();
      const afterSavePicture = await repository.save(expectedPicture);

      const picture = await repository.search(expectedPicture.id);
      expect(picture).toEqual(afterSavePicture.toPrimitives());
    });

    it('should not return a non existing picture', async () => {
      expect(await repository.search(PictureMother.random().id)).toBeFalsy();
    });
  });
});
