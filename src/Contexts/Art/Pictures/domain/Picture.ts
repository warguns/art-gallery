import {PictureId} from '../../Shared/domain/Pictures/PictureId';
import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import Money from './Money';
import { ObjectLiteral } from 'typeorm';

export class Picture extends AggregateRoot implements ObjectLiteral {

    public readonly id: PictureId;

    constructor(id: PictureId, public readonly name: string, public readonly path: string, public money: Money) {
        super();
        this.id = id;
    }

    toPrimitives(): any {
      return {
        id: this.id.toString(),
        name: this.name,
        path: this.path,
        value: this.money.value,
        symbol: this.money.symbol
      };
    }
}
