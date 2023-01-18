import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemanticHomeComponent } from './semantic-home/semantic-home.component';

const routes: Routes = [
  {
    path: 'collections',
    loadChildren: () => import('../semantic-collections/semantic-collections.module').then(mod => mod.SemanticCollectionsModule)
  },
  {
    path: 'elements',
    loadChildren: () => import('../semantic-elements/semantic-elements.module').then(mod => mod.SemanticElementsModule)
  },
  {
    path: 'views',
    loadChildren: () => import('../semantic-views/semantic-views.module').then(mod => mod.SemanticViewsModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('../semantic-modules/semantic-modules.module').then(mod => mod.SemanticModulesModule)
  },
  { path: 'home', component: SemanticHomeComponent },
  { path: '', redirectTo: '/semantic/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemanticRoutingModule { }
