import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    // add nos imports (quando for ligar um backend real, HttpClientInMemoryWebApiModule deverá ser removido, pois é para simular backend)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
