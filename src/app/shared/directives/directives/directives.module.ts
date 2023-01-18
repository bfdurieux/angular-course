import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassDirective} from '../class.directive';
import {TimesDirective} from '../times.directive';

@NgModule({
  declarations: [
    ClassDirective,
    TimesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClassDirective,
    TimesDirective
  ]
})
export class DirectivesModule { }
