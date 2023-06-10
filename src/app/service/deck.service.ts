import { Deck } from './../model/deck';
import { Injectable } from "@angular/core";
import { Card } from "../model/card";

@Injectable({
  providedIn: 'root',
})

export class DeckService {

  decks!: Deck[];
  card!: Card;
  constructor() {

  }

  test(){
    alert('foi');
  }

  returnById(id: number): Deck{
    this.decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    let index = this.decks.findIndex((i) => i.id == id);

    return this.decks[index];
  }

  returnAll(): Deck[]{
    this.decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);
    return this.decks;
  }

  save(d: Deck){
    this.decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    if(this.decks.length > 0){
      d.id = this.decks[this.decks.length - 1].id +1 ;
    }else{
      d.id = 1;
    }

    this.decks.push(d);

    localStorage.setItem('baralhos-exemplo',JSON.stringify(this.decks));
  }

  delete(d: Deck){
    this.decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    this.decks = this.decks.filter((i) => i.id != d.id);

    localStorage.setItem('baralhos-exemplo',JSON.stringify(this.decks));

  }

  update(d: Deck){
    this.decks = <Deck[]> JSON.parse(localStorage.getItem('baralhos-exemplo')!);

    let index = this.decks.findIndex((u) => u.id == d.id);

    this.decks[index] = d;

    localStorage.setItem('baralhos-exemplo',JSON.stringify(this.decks));
  }
}
