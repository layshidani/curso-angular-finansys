import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importar HttpClientModule
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import HttpClientInMemoryWebApiModule e a classe criada InMemoryDatabase
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add nos imports (quando for ligar um backend real, HttpClientInMemoryWebApiModule deverá ser removido, pois é para simular backend)
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
