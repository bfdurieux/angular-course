import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../../../../shared/interfaces/accordion-item';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items: AccordionItem[] = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like an orange' },
    { title: 'What color is that cat?', content: 'The cat is an orange color' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
