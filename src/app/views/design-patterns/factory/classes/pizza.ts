import { Dough, Sauce, Veggies } from './pizza-ingredient-factory';

export abstract class Pizza {
  name: string = 'Pizza';
  dough: Dough = new Dough;
  sauce: Sauce = new Sauce;
  toppings: Veggies[] = []
  public state: string = 'unprepared';
  private _type: string = '';
  constructor(type: string) {
    this._type = type
  }

  abstract prepare(): void

  bake() {
    this.state += ', baked';
  }

  cut() {
    this.state += ', cut';
  }

  box() {
    this.state += ', boxed';
  }

  getName(): string {
    return this.name;
  }
}
