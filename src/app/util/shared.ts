import { Card } from './../model/card';
import { Deck } from './../model/deck';
export class Shared{
  constructor(){}

  public static initializeWebStorage(): void{
    if(localStorage.getItem('baralhos-exemplo') != null){

      return;

    } else {

      let decks: Deck[];
      let cards: Card[];

      decks = [
        new Deck('Baralho 1','Magic','Casual'),
        new Deck('Baralho 2','Magic','Casual'),
        new Deck('Baralho 3','Pokemon','Competitivo')];

        decks[0].id = 1;
        decks[1].id = 2;
        decks[2].id = 3;

        decks[0].cards = [new Card('carta1',3), new Card('teste1',1), new Card('exemplo1',2)];

        decks[0].cards[0].id = 1;
        decks[0].cards[1].id = 2;
        decks[0].cards[2].id = 3;

        decks[1].cards = [new Card('carta 2',3)];

        decks[1].cards[0].id = 1;

        decks[2].cards = [];

        localStorage.setItem('baralhos-exemplo',JSON.stringify(decks));
    }
  }
}
