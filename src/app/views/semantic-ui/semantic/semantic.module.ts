import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticRoutingModule } from './semantic-routing.module';
import { SemanticHomeComponent } from './semantic-home/semantic-home.component';


@NgModule({
  declarations: [
    SemanticHomeComponent
  ],
  imports: [
    CommonModule,
    SemanticRoutingModule,
  ],
  exports: [
    SemanticHomeComponent
  ]
})
export class SemanticModule { }
