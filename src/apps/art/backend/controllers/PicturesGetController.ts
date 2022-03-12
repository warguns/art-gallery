import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { QueryBus } from '../../../../Contexts/Shared/domain/QueryBus';
import { Controller } from './Controller';
import { ArtPicturesResponse } from '../../../../Contexts/Art/Pictures/application/ArtPicturesResponse';
import { Picture } from '../../../../Contexts/Art/Pictures/domain/Picture';
import { ListQuery } from '../../../../Contexts/Art/Pictures/application/List/ListQuery';

export class PicturesGetController implements Controller {
  constructor(private queryBus: QueryBus) {}

  async run(_req: Request, res: Response) {
    const query = new ListQuery();
    const queryResponse: ArtPicturesResponse = await this.queryBus.ask(query);

    res.header('Access-Control-Allow-Origin', '*');
    res.status(httpStatus.OK).send(this.toResponse(queryResponse.pictures));
  }

  private toResponse(pictures: Array<Picture>) {
    return pictures;
  }
}
