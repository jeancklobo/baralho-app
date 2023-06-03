import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

  cartas1: String[];
  cartas2: String[];
  cartas3: String[] = [];
  cartas!: String[];

  constructor(private route: ActivatedRoute){
    this.cartas1 = ['carta1', 'teste1','exemplo1'];
    this.cartas2 = ['carta2'];
  }

  ngOnInit():void{

    let id: number = this.route.snapshot.params['id'];

    if (id == 1) {
      this.cartas = this.cartas1;

    } else {
      if (id == 2) {

        this.cartas = this.cartas2;
      } else {

        this.cartas = this.cartas3;
      }
    }

  }

  onAlterationEvent(id: Number){
    alert('Tabela Clicada!');
  }
}
