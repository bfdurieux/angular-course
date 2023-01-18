import { CondimentDecorator } from './condiment-decorator';
import { Beverage } from './beverage';

export class Mocha extends CondimentDecorator {
  private _beverage: Beverage;

  constructor(beverage:Beverage) {
    super(beverage.description + ', Mocha');
    this._beverage = beverage;
  }

  cost(): number {
    return .20 + this._beverage.cost();
  }

  getDescription(): string {
    return this._beverage.description + ', Mocha';
  }

}
