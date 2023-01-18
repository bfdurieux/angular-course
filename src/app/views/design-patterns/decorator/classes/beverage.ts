export abstract class Beverage {
  private _description: string = 'Unknown Beverage';

  get description(): string {
    return this._description;
  }

  public abstract cost(): number;

  constructor(description: string) {
    this._description = description;
  }
}
