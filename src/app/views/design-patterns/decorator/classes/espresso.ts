import { Beverage } from './beverage';

export class Espresso extends Beverage {
  constructor() {
    super('Espresso');
  }

  public cost(): number {
    return 1.99;
  }

}
