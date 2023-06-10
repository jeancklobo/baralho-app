export class Card {
  id: number = 0;
  name: string;
  qtd: number;
  constructor(name: string, qtd: number) {
    this.name = name;
    this.qtd = qtd;
  }
}
