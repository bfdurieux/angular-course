import { Beverage } from './beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super('House Blend Coffee');
  }

  cost(): number {
    return .89;
  }

}
