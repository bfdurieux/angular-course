import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wiki-search-home',
  templateUrl: './wiki-search-home.component.html',
  styleUrls: ['./wiki-search-home.component.css']
})
export class WikiSearchHomeComponent implements OnInit {
  pages = [];
  constructor(private _wikipediaService: WikipediaService) { }

  ngOnInit(): void {
  }

  onTerm(term: string) {
    this._wikipediaService.search(term).subscribe((x: any) => {
      this.pages = x.query.search;
    });
  }
}
