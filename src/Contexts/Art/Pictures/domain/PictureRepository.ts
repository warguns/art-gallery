import {Picture} from './Picture';
import {PictureId} from '../../Shared/domain/Pictures/PictureId';

export default interface PictureRepository {
    all(): Promise<Picture[]>;
    save(picture: Picture): Promise<Picture>;
    search(id: PictureId): Promise<Picture|undefined>;
}
