import { Component, Input, OnInit } from '@angular/core';
import { Stats } from '../../../../shared/interfaces/Stats';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() data: Stats[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
