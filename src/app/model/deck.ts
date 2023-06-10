import { Card } from './card';

export class Deck {
  id: number = 0;
  name: string;
  game: string;
  type: string;
  cards: Card[];
  constructor(name: string, game: string, type: string) {
    this.name = name;
    this.game = game;
    this.type = type;
    this.cards = [];
  }
}
