import { PizzaStore } from './pizza-store';
import { Pizza } from './pizza';

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch(type){
      case 'cheese':
        return new NYStyleCheesePizza(type);

      case 'pepperoni':
        return new NYStylePepperoniPizza(type);

      default:
        throw DOMException;
    }
  }

}

export class NYStyleCheesePizza extends Pizza {
  prepare(): void {
      throw new Error('Method not implemented.');
  }
  constructor(type: string) {
    super(type);

    super.name = 'Ny Style Sauce and Cheese Pizza';
    super.dough = 'Thin Crust Dough';
    super.sauce = 'Marinara Sauce';
    // super.toppings = [];
    super.toppings=['Grated Reggiano Cheese'];
  }
}

export class NYStylePepperoniPizza extends Pizza {
  prepare(): void {
      throw new Error('Method not implemented.');
  }
  constructor(type: string) {
    super(type);

    super.name = 'Ny Style Pepperoni Pizza';
    super.dough = 'Thin Crust Dough';
    super.sauce = 'Marinara Sauce';
    super.toppings = [];
    super.toppings= ['Pepperoni'];
  }
}
