import { AbstractControl } from '@angular/forms';

export class MathValidators {
  //these parameters are key names
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];
      return firstNumber + secondNumber == parseInt(sum) ? null : {addition: true};
    }
  }
}
