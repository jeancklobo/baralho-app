import { DeckServicePromice } from './../service/deck.service.promice';
import { DeckService } from './../service/deck.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Deck } from '../model/deck';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit{

  @ViewChild('form') form!: NgForm;
  baralho: Deck;
  save: boolean = true;
  text!: string;
  color!: string;

  tipos: String[] = 'Competitivo Semi-Competitivo Casual'.split(' ');
  jogos: String[] = [ 'Magic','Pokemon','Yu-Gi-Oh'];
  constructor(
    private deckService: DeckService,
    private router: Router,
    private route: ActivatedRoute,
    private deckServicePromice: DeckServicePromice){
    this.baralho = new Deck('','','');

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if(params['id'] > 0){
        this.deckServicePromice.getAll().then((val)=>{
          let decks = val;
          let index = val.findIndex(u => u.id == params['id']);
          this.baralho = decks[index];
        }).catch(() => {
          console.log('erro');
          this.baralho = this.deckService.returnById(params['id']);
        });
        this.save = false;
        this.text = 'EDITAR';
        this.color = 'amber';
      } else {
        this.baralho = new Deck('','','');
        this.save = true;
        this.text = 'SALVAR';
        this.color = 'red';
      }

    });
  }

  onClick(){
    if(this.save){

      this.deckServicePromice.save(this.baralho)
      .then((value) => {

        this.deckService.save(this.baralho);

        console.log(`Baralho Salvo!!
            Nome: ${value.name}
            Jogo: ${value.game}
            Tipo: ${value.type}`);

            this.router.navigate(['listar']);
      }).catch(()=>{
        console.log('Erro! Não foi possível adicionar baralho!');
      });

    } else {
      this.deckServicePromice.patch(this.baralho).then(()=>{
        this.router.navigate(['listar']);

      }).catch(()=>{
        console.log('Erro! Não foi possível atualizar baralho!');
      });

    }

  }

  clean(){
    if(this.save){

      this.baralho = new Deck('','','');
      this.text = 'SALVAR';
      this.color = 'red';
      this.form.reset();
    }
    else{
      this.router.navigate(['listar']);
    }
  }

  compareGames(s1: string, s2: string) {
    if (s1 != null && s2 != null) {
      return s1 === s2;
    }
    return false;
  }

  compareTypes(s1: string, s2: string) {
    if (s1 != null && s2 != null) {
      return s1 === s2;
    }
    return false;
  }

}
