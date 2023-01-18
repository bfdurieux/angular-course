import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticModulesRoutingModule } from './semantic-modules-routing.module';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    ModulesHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    SemanticModulesRoutingModule,
    SharedModule
  ]
})
export class SemanticModulesModule { }
