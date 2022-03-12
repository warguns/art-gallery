import {Picture} from '../domain/Picture';

export class ArtPicturesResponse {
  readonly pictures: Array<Picture>;

  constructor(pictures: Array<Picture>) {
    this.pictures = pictures;
  }
}
