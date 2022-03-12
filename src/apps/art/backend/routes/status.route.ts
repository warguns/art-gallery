import { Express } from 'express';
import container from '../dependency-injection';
import { StatusGetController } from '../controllers/StatusGetController';

export const register = (app: Express) => {
  const controller: StatusGetController = container.get('Apps.Art.Backend.controllers.StatusGetController');
  app.get('/status', controller.run.bind(controller));
};
