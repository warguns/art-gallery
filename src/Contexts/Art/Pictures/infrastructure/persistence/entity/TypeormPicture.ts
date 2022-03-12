import {EntitySchema} from 'typeorm';
import {Picture} from '../../../domain/Picture';

const EmbeddedMoney = {
  value: {
    type: Number,
  },
  symbol: {
    type: String,
  }
};

export const PictureEntity = new EntitySchema<Picture>({
    name: 'picture',
    columns: {
        id: {
            type: String,
            primary: true
        },
        name: {
            type: String
        },
        path: {
            type: String
        },
        ...EmbeddedMoney
    }
});
