import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AddDeckComponent } from './add-deck/add-deck.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ListDecksComponent } from './list-decks/list-decks.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { CardTableComponent } from './card-table/card-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AddDeckComponent,
    MainMenuComponent,
    ListDecksComponent,
    ListCardsComponent,
    CardTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
