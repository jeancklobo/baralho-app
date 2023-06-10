import { DeckService } from './../service/deck.service';
import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/deck';
import { Shared } from '../util/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-decks',
  templateUrl: './list-decks.component.html',
  styleUrls: ['./list-decks.component.css']
})
export class ListDecksComponent implements OnInit{

  decks?: Deck[];
  constructor(private deckService: DeckService, private router: Router){  }

  ngOnInit(){
    Shared.initializeWebStorage();
    this.decks = this.deckService.returnAll();
  }

  onClick(d: Deck){
    this.router.navigate(['adicionar'],{queryParams: {id: d.id}});
  }

  onDelete(d: Deck){
    this.deckService.delete(d);
    this.decks = this.deckService.returnAll();
  }
}
