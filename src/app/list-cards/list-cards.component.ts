import { CardService } from './../service/card.service';
import { Card } from './../model/card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Shared } from '../util/shared';
import { CardServiceObservable } from '../service/card.service.observable';
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
  delete: boolean = false;
  text: string = 'SALVAR';
  color: String = 'red accent-3';

  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private cardServiceObservable: CardServiceObservable){}

  ngOnInit():void{
    Shared.initializeWebStorage();
    this.carta = new Card('',1);
    this.id = this.route.snapshot.params['id'];
    this.carta.deckId = this.id;
    //this.cartas = this.cardService.returnCards(this.id);
    this.getDecks();
    this.save = true;
    this.text = 'SALVAR';
  }

  onSubmit(){

    if(this.save){
      //this.cardService.save(this.carta);
      this.cardServiceObservable.save(this.carta).subscribe(
        ()=>{console.log("Saved");
        this.ngOnInit();
        });
    } else{
      //this.cardService.update(this.carta);
      this.cardServiceObservable.patch(this.carta).subscribe(
        ()=>{console.log("Updated");
        this.ngOnInit();
        });
      this.save = true;
      this.color = 'red accent-3';
    }
    //this.cartas = this.cardService.returnCards(this.id);
    //this.ngOnInit();
    //this.getDecks();
    this.carta = new Card('',1);
    //this.carta.id = this.id;
    this.form.reset();
    this.text = 'SALVAR';
  }

  onDelete(c: Card){
    // this.cardService.delete(c);
    this.delete = true;
    this.cardServiceObservable.delete(c).subscribe(
      ()=>{console.log("Deleted");
      this.ngOnInit();
      });
    // this.cartas = this.cardService.returnCards(this.id);
    //this.getDecks();
  }

  onAlterationEvent(c: Card){
    if(!this.delete){
      this.save = false;
      this.text = 'EDITAR';
      this.color = 'amber darken-4';
      let clone = new Card('',0);

      clone.id = c.id;
      clone.name = c.name;
      clone.qtd = c.qtd;

      this.carta = clone;
    }
    else
      this.delete = false;
  }

  reset(){
    alert('reset');
    this.carta = new Card('',1);
    this.carta.deckId = this.id;
    this.form.reset();
    this.text = 'SALVAR';
    this.color = 'red accent-3';
  }

  getDecks(){
    this.cardServiceObservable.getByDeckId(this.id).subscribe(
      (data: Card[]) => {
        this.cartas = data;
      }
    );
  }
}

