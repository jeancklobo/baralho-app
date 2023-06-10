import { Injectable } from "@angular/core";
import { Card } from "../model/card";
import { Deck } from "../model/deck";

@Injectable({
  providedIn: 'root',
})

export class CardService {

  cards!: Card[];
  id!: number;

  constructor() {

  }

  returnCards(id: number) : Card[]{
    this.id = id;

    let decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    decks = <Deck[]> decks.filter((u) => u.id == id);

    this.cards = decks[0].cards;

    return this.cards;
  }

  save(c: Card){
    let decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    let index = decks.findIndex((u) => u.id == this.id); //decks.indexOf(deck2);

    if(this.cards.length > 0){

      c.id = this.cards[this.cards.length-1].id + 1;

    } else{
      c.id = 1;
    }

    this.cards.push(c);

    decks[index].cards = this.cards;

    localStorage.setItem('baralhos-exemplo',JSON.stringify(decks));
  }

  delete(c: Card){
    let decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    let index = decks.findIndex((u) => u.id == this.id);

    this.cards = this.cards.filter((i) => i.name != c.name);

    decks[index].cards = this.cards;

    localStorage.setItem('baralhos-exemplo',JSON.stringify(decks));
  }

  update(c: Card){
    let decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    let index = decks.findIndex((u) => u.id == this.id);

    let index2 = this.cards.findIndex((u) => u.id == this.id);

    decks[index].cards[index2] = c;

    localStorage.setItem('baralhos-exemplo',JSON.stringify(decks));
  }
}
