import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignPatternsRoutingModule } from './design-patterns-routing.module';
import { FactoryComponent } from './factory/factory.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FormsModule } from '@angular/forms';
import { CommandComponent } from './command/command.component';


@NgModule({
  declarations: [
    FactoryComponent,
    DecoratorComponent,
    CommandComponent
  ],
	imports: [
		CommonModule,
		DesignPatternsRoutingModule,
		FormsModule
	]
})
export class DesignPatternsModule { }
