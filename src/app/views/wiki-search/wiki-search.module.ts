import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiSearchRoutingModule } from './wiki-search-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { WikiSearchHomeComponent } from './wiki-search-home/wiki-search-home.component';


@NgModule({
  declarations: [
    WikiSearchHomeComponent,
    SearchBarComponent,
    PageListComponent
  ],
  imports: [
    CommonModule,
    WikiSearchRoutingModule
  ]
})
export class WikiSearchModule { }
