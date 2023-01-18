import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from '../../../../shared/interfaces/accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: AccordionItem[] = [];
  openItemIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if (index == this.openItemIndex)
      this.openItemIndex = -1;
    else
      this.openItemIndex = index;
  }
}
