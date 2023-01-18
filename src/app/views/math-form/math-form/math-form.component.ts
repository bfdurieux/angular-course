import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from './math-validators';
import { delay, filter, scan, tap } from 'rxjs';

@Component({
  selector: 'app-math-form',
  templateUrl: './math-form.component.html',
  styleUrls: ['./math-form.component.css']
})
export class MathFormComponent {
  mathForm = new FormGroup({
    a: new FormControl(this.generateRandomNumber()),
    b: new FormControl(this.generateRandomNumber()),
    answer: new FormControl('')
  },[MathValidators.addition('answer', 'a', 'b')]);

  get a() {
    return this.mathForm.value.a;
  }
  get b() {
    return this.mathForm.value.b;
  }

  secondsPerSolution: number = 0;

  generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
        tap(),
        filter(value => value == 'VALID'),
        delay(100),
        scan((acc) => {
          return {
            numberSolved:acc.numberSolved + 1,
            startTime:acc.startTime
          }
        },{ numberSolved: 0, startTime: new Date() })
      )
      .subscribe(({numberSolved, startTime}) => {
        this.secondsPerSolution =
          ((new Date().getTime() - startTime.getTime()) / numberSolved) / 1000;

        this.mathForm.controls['a'].setValue(this.generateRandomNumber());
        this.mathForm.controls['b'].setValue(this.generateRandomNumber());
        this.mathForm.controls['answer'].setValue('');
      });
  }
}
