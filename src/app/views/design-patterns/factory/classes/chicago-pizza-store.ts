import { PizzaStore } from './pizza-store';
import { Pizza } from './pizza';

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch(type){
      case 'cheese':
        return new ChicagoStyleCheesePizza(type);

      case 'pepperoni':
        return new ChicagoStylePepperoniPizza(type);

      default:
        throw new DOMException()
    }
  }

}

export class ChicagoStyleCheesePizza extends Pizza {
  prepare(): void {
      throw new Error('Method not implemented.');
  }
  constructor(type: string) {
    super(type);

    super.name = 'Chicago Style Deep Dish Cheese Pizza';
    super.dough = 'Extra Thick Crust Dough';
    super.sauce = 'Plum Tomato Sauce';
    super.toppings = ['Shredded Mozzarella Cheese'];
  }

  override cut() {
    super.state += ', cut into squares';
  }
}

export class ChicagoStylePepperoniPizza extends Pizza {
  prepare(): void {
      throw new Error('Method not implemented.');
  }
  constructor(type: string) {
    super(type);

    super.name = 'Chicago Style Pepperoni Pizza';
    super.dough = 'Trick Crust Dough';
    super.sauce = 'Plum Tomato Sauce';
    super.toppings = ['Pepperoni'];
  }
}
