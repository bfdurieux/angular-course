import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFetchComponent } from './photo-fetch/photo-fetch.component';

const routes: Routes = [
  { path: '', component: PhotoFetchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoFetchRoutingModule { }
