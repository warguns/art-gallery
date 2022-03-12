export default class Money {

    public readonly _value: number;

    public readonly _symbol: string;

    constructor(value: number, symbol: string) {
        this._value = value;
        this._symbol = symbol;
    }

    get value(): number {
        return this._value;
    }

    get symbol(): string {
        return this._symbol;
    }

    toPrice() {
        return `{this._value} {this._symbol}`;
    }

    equals(money: Money): boolean {
        return (money.value === this._value && money.symbol === this._symbol);
    }
}
