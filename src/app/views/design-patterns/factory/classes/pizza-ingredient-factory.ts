export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}

export class Dough {}
export class Sauce {}
export class Cheese {}
export class Veggies {}
export class Pepperoni {}
export class Clams {}

export class NYIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }
    createSauce(): Sauce {
      return new MarinaraSauce;
    }
    createCheese(): Cheese {
      return new ReggianoCheese();
    }
    createVeggies(): Veggies[] {
        return [new Garlic, new Onion, new Mushroom, new RedPepper];
    }
    createPepperoni(): Pepperoni {
        return new SlicedPepperoni;
    }
    createClam(): Clams {
        return new FreshClams;
    }
}

export class ReggianoCheese extends Cheese{}
export class MozzarellaCheese extends Cheese{}


export class ThinCrustDough extends Dough {}
export class ThickCrustDough extends Dough {}

export class MarinaraSauce extends Sauce {}
export class PlumTomatoSauce extends Sauce {}

export class Garlic extends Veggies {}
export class Onion extends Veggies {}
export class Mushroom extends Veggies {}
export class RedPepper extends Veggies {}

export class SlicedPepperoni extends Pepperoni {}

export class FreshClams extends Clams {}
export class FrozenClams extends Clams {}



export class ChicagoIngredientFactory implements PizzaIngredientFactory {
  createCheese(): Cheese {
    return new MozzarellaCheese;
  }

  createClam(): Clams {
    return new FrozenClams;
  }

  createDough(): Dough {
    return new ThickCrustDough;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni;
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce;
  }

  createVeggies(): Veggies[] {
    return [new Garlic, new Onion, new Mushroom, new RedPepper];
  }
}
