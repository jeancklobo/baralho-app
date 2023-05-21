import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteTesteComponent } from './componente-teste/componente-teste.component';
import { ComponenteDoisComponent } from './componente-dois/componente-dois.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteTesteComponent,
    ComponenteDoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
