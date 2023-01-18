import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MathFormComponent } from './math-form/math-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnswerHighlightDirective } from './answer-highlight.directive';



@NgModule({
  declarations: [
    MathFormComponent,
    AnswerHighlightDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: JsonPipe
  }]
})
export class MathFormModule { }
