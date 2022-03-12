import { Express } from 'express';
import container from '../dependency-injection';
import { PicturesGetController } from '../controllers/PicturesGetController';
import { PicturesPostController } from '../controllers/PicturesPostController';

export const register = (app: Express) => {
  const picturesGetController: PicturesGetController = container.get(
    'Apps.Art.Backend.controllers.PicturesGetController'
  );

  const picturePostController: PicturesPostController = container.get(
    'Apps.Art.Backend.controllers.PicturesPostController'
  );

  app.get('/pictures', picturesGetController.run.bind(picturesGetController));
  app.post('/pictures', picturePostController.run.bind(picturePostController));
};
