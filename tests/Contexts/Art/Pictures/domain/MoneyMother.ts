import Money from '../../../../../src/Contexts/Art/Pictures/domain/Money';
import {IntegerMother} from '../../../Shared/domain/IntegerMother';

export class MoneyMother {
  static create(value: number, symbol: string): Money {
    return new Money(value, symbol);
  }

  static creator() {
    return () => MoneyMother.random();
  }

  static random(): Money {
    return this.create(IntegerMother.random(), '$');
  }
}
