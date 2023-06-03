import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddDeckComponent } from './add-deck/add-deck.component';
import { ListDecksComponent } from './list-decks/list-decks.component';
import { ListCardsComponent } from './list-cards/list-cards.component';

const routes: Routes = [

  {path: 'inicio', component: MainMenuComponent},
  {path: 'adicionar', component: AddDeckComponent},
  {path: 'listar', component: ListDecksComponent},
  {path: 'listar/cartas/:id', component: ListCardsComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
