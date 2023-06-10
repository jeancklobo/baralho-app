import { CardService } from './../service/card.service';
import { Card } from './../model/card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Shared } from '../util/shared';
@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit{

  @ViewChild('form') form!: NgForm;

  cartas!: Card[];
  carta!: Card;
  id!: number;
  save: boolean = true;
  text: string = 'CADASTRAR';

  constructor(private route: ActivatedRoute, private cardService: CardService){}

  ngOnInit():void{
    Shared.initializeWebStorage();
    this.carta = new Card('',1);
    this.id = this.route.snapshot.params['id'];
    this.cartas = this.cardService.returnCards(this.id);
    this.save = true;
    this.text = 'CADASTRAR';
  }

  onSubmit(){

    if(this.save){
      this.cardService.save(this.carta);
    } else{
      this.cardService.update(this.carta);
      this.save = true;
    }
    this.cartas = this.cardService.returnCards(this.id);
    this.carta = new Card('',1);
    this.form.reset();
  }

  onDelete(c: Card){
    this.cardService.delete(c);
    this.cartas = this.cardService.returnCards(this.id);
  }

  onAlterationEvent(c: Card){
    this.save = false;
    this.text = 'EDITAR';
    let clone = new Card('',0);

    clone.id = c.id;
    clone.name = c.name;
    clone.qtd = c.qtd;

    this.carta = clone;
  }
}
