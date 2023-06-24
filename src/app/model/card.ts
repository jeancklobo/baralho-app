export class Card {
  id!: number;
  name: string;
  qtd: number;
  deckId!: number;
  constructor(name: string, qtd: number) {
    this.name = name;
    this.qtd = qtd;
    //this.deckId = 0;
  }
}
