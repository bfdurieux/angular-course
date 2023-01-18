import { Component, OnInit } from '@angular/core';
import { PizzaStore } from './classes/pizza-store';
import { NYPizzaStore } from './classes/ny-pizza-store';
import { ChicagoPizzaStore } from './classes/chicago-pizza-store';
import { Pizza } from './classes/pizza';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  nyStore: PizzaStore = new NYPizzaStore();
  chicagoStore: PizzaStore = new ChicagoPizzaStore();
  selectedType: string = '';
  result: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveOrderNY() {
    let pizza: Pizza = this.nyStore.orderPizza(this.selectedType);
    this.result = JSON.stringify(pizza);
  }

  receiveOrderChicago() {
    let pizza: Pizza = this.chicagoStore.orderPizza(this.selectedType);
    this.result = JSON.stringify(pizza)
  }

}
