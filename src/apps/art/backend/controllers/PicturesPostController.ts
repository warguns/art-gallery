import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { SaveCommand } from '../../../../Contexts/Art/Pictures/application/Create/SaveCommand';

export class PicturesPostController implements Controller {
  constructor(private commandBus: CommandBus) {}

  async run(req: Request, res: Response) {
    const name: string = req.body.name;
    const path: string = req.body.path;
    const money: number = req.body.money;
    const symbol: string = req.body.symbol;

    const command = new SaveCommand( name, path, money, symbol);

    try {
      await this.commandBus.dispatch(command);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.CREATED).send();
  }
}
