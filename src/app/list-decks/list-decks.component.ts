import { DeckService } from './../service/deck.service';
import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/deck';
import { Shared } from '../util/shared';
import { Router } from '@angular/router';
import { DeckServicePromice } from '../service/deck.service.promice';

@Component({
  selector: 'app-list-decks',
  templateUrl: './list-decks.component.html',
  styleUrls: ['./list-decks.component.css']
})
export class ListDecksComponent implements OnInit{

  decks?: Deck[];
  constructor(private deckService: DeckService, private router: Router, private deckServicePromice: DeckServicePromice){  }

  ngOnInit(){
    Shared.initializeWebStorage();
    this.deckServicePromice.getAll().then((value)=>{
      this.decks = value;
    }).catch(()=>{

      this.decks = this.deckService.returnAll();
    });
  }

  onClick(d: Deck){
    this.router.navigate(['adicionar'],{queryParams: {id: d.id}});
    //alert('id: ' + d.id);
  }

  onDelete(d: Deck){
    /* this.deckService.delete(d);
    this.decks = this.deckService.returnAll(); */
    this.deckServicePromice.delete(d);
    this.deckServicePromice.getAll().then((value)=>{
      this.decks = value;
    }).catch(()=>{

      this.decks = this.deckService.returnAll();
    }).finally(()=>{
      this.router.navigate(['inicio']);

    });
    alert('Baralho apagado');
  }
}
