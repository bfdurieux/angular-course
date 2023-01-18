import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFetchRoutingModule } from './photo-fetch-routing.module';
import { PhotoFetchComponent } from './photo-fetch/photo-fetch.component';


@NgModule({
  declarations: [
    PhotoFetchComponent
  ],
  imports: [
    CommonModule,
    PhotoFetchRoutingModule
  ]
})
export class PhotoFetchModule { }
