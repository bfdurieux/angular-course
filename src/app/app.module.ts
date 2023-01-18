import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypingViewComponent } from './views/typing-view/typing-view.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DirectivesModule } from './shared/directives/directives/directives.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MathFormModule } from './views/math-form/math-form.module';

@NgModule({
  declarations: [
    AppComponent,
    TypingViewComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    HttpClientModule,
    MathFormModule
  ],
  providers: [HttpClient],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
