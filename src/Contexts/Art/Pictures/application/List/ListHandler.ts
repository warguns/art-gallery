import { ListQuery } from './ListQuery';
import PictureRepository from '../../domain/PictureRepository';
import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {ArtPicturesResponse} from '../ArtPicturesResponse';
import {Query} from '../../../../Shared/domain/Query';

export class ListHandler implements QueryHandler<PictureRepository, ArtPicturesResponse>  {
  constructor(private pictureRepo: PictureRepository) {}

  subscribedTo(): Query {
    return ListQuery;
  }

  async handle(_query: ListQuery): Promise<ArtPicturesResponse> {
      return new ArtPicturesResponse(await this.pictureRepo.all());
  }
}
