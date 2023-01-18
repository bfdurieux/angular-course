import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticCollectionsRoutingModule } from './semantic-collections-routing.module';
import { CollectionsHomeComponent } from './semantic-collections/collections-home/collections-home.component';
import { CollectionsChildTestComponent } from './semantic-collections/collections-child-test/collections-child-test.component';
import { TableComponent } from './semantic-collections/table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './semantic-collections/biography/biography.component';
import { CompaniesComponent } from './semantic-collections/companies/companies.component';
import { PartnersComponent } from './semantic-collections/partners/partners.component';
import { TabsComponent } from './semantic-collections/tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    CollectionsChildTestComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
	imports: [
		CommonModule,
		SemanticCollectionsRoutingModule,
		SharedModule
	],
  exports: [
    CollectionsHomeComponent
  ]
})
export class SemanticCollectionsModule { }
