import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TypingViewComponent } from './views/typing-view/typing-view.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MathFormComponent } from './views/math-form/math-form/math-form.component';

const routes: Routes = [
  { path: 'typing', component: TypingViewComponent },
  {
    path: 'semantic',
    loadChildren: () => import('./views/semantic-ui/semantic/semantic.module').then(mod => mod.SemanticModule)
  },
  {
    path: 'design-patterns',
    loadChildren: () => import('./views/design-patterns/design-patterns.module').then(mod => mod.DesignPatternsModule)
  },
  {
    path: 'wiki',
    loadChildren: () => import('./views/wiki-search/wiki-search.module').then(mod => mod.WikiSearchModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./views/photo-fetch/photo-fetch.module').then(mod => mod.PhotoFetchModule)
  },
  {
    path: 'math',
    component: MathFormComponent
  },
  { path: 'home', component: HomeComponent }, //should be at the end of the array to work properly
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
