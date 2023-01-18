import { Component } from '@angular/core';
import { Beverage } from './classes/beverage';
import { Mocha } from './classes/mocha';
import { HouseBlend } from './classes/house-blend';
import { Espresso } from './classes/espresso';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent {
  total: number = 0;
  description: string = '';
  beverageActive: boolean = false;
  condimentActive: boolean = false;

  beverage: Beverage | undefined;
  condiment: Beverage | undefined;

  constructor() { }

  calculate() {
    if(this.condiment){
      this.total = this.condiment.cost();
      this.description = this.condiment.description;
    }
    else{
      this.total = this.beverage!.cost();
       this.description = this.beverage!.description;
    }
  }

  setNone() {
    this.condiment = undefined;
  }

  setMocha() {
    this.condiment = new Mocha(this.beverage!);
  }

  setHouseBlend() {
    this.beverage = new HouseBlend();
  }

  setEspresso() {
    this.beverage = new Espresso();
  }
}
