import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryComponent } from './factory/factory.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  { path: 'factory', component: FactoryComponent },
  { path: 'decorator', component: DecoratorComponent },
  { path: 'command', component: CommandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternsRoutingModule { }
