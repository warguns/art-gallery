import {Command} from '../../../../Shared/domain/Command';

export class SaveCommand extends Command  {

    private readonly _name: string;

    private readonly _path: string;

    private readonly _money: number;

    private readonly _symbol: string;

    constructor(name: string, path: string, money: number, symbol: string) {
      super();
      this._name = name;
      this._path = path;
      this._money = money;
      this._symbol = symbol;
    }

    get name(): string {
        return this._name;
    }

    get path(): string {
        return this._path;
    }

    get money(): number {
        return this._money;
    }

    get symbol(): string {
      return this._symbol;
    }
}
