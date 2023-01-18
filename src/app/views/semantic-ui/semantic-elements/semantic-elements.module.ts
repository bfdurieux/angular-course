import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticElementsRoutingModule } from './semantic-elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { DirectivesModule } from '../../../shared/directives/directives/directives.module';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    SegmentComponent,
  ],
  imports: [
    CommonModule,
    SemanticElementsRoutingModule,
    DirectivesModule,
    SharedModule
  ],
  exports: [
    ElementsHomeComponent
  ]
})
export class SemanticElementsModule { }
