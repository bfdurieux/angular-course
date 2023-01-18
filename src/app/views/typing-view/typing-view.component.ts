import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing-view',
  templateUrl: './typing-view.component.html',
  styleUrls: ['./typing-view.component.css']
})
export class TypingViewComponent implements OnInit {
  randomMessage:string = lorem.sentence();
  showSuccess: boolean = false;
  inputValue:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  inputChange($event: any){
    this.inputValue = $event.target.value;
    if(this.inputValue == '')
      $event.target.style.color = 'gray'
    else if(this.randomMessage.includes(this.inputValue))
      $event.target.style.color = 'green'
    else
      $event.target.style.color = 'red'


    if ($event.target.value == this.randomMessage){
      this.showSuccess = true;
    }
  }

  compare(letter:string, input:string){
    if(!input)
      return 'pending';

      return letter == input ? 'correct' : 'incorrect';
  }

}
