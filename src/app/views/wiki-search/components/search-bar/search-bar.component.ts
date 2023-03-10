import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  term: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
