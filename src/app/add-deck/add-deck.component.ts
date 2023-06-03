import { Component } from '@angular/core';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent {

  disable: boolean;
  baralho: String;
  jogo: String;
  tipo: String;

  tipos: String[] = 'Competitivo Semi-Competitivo Casual'.split(' ');
  jogos: String[] = [ 'Magic','Pokemon','Yu-Gi-Oh'];
  constructor(){
    this.disable = false;
    this.baralho = '';
    this.jogo = '';
    this.tipo = '';
  }

  onClick(){
    alert(`Baralho Salvo!!
            Nome: ${this.baralho}
            Jogo: ${this.jogo}
            Tipo: ${this.tipo}`);
    this.disable = true;
  }

  clean(){
    this.baralho = '';
    this.disable = false;
  }
}
