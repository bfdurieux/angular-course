import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsChildTestComponent } from './semantic-collections/collections-child-test/collections-child-test.component';
import { CollectionsHomeComponent } from './semantic-collections/collections-home/collections-home.component';
import { BiographyComponent } from './semantic-collections/biography/biography.component';
import { CompaniesComponent } from './semantic-collections/companies/companies.component';
import { PartnersComponent } from './semantic-collections/partners/partners.component';

const routes: Routes = [
  { path: 'child', component: CollectionsChildTestComponent },
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemanticCollectionsRoutingModule { }
