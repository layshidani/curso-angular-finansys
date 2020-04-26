import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDatabase } from './in-memory-database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add nos imports (quando for ligar um backend real, HttpClientInMemoryWebApiModule deverá ser removido, pois é para simular backend)
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
