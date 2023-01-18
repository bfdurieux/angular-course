import { Component, Input, OnInit } from '@angular/core';
import { SemanticItem } from '../../../../shared/interfaces/semantic-item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() items: SemanticItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
