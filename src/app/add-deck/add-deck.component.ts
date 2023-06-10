import { DeckService } from './../service/deck.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Deck } from '../model/deck';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit{

  //disable: boolean;
  baralho: Deck;
  save: boolean = true;
  text!: string;

 /*  @ViewChild('typeSelect') typeSelect!: ElementRef;
  @ViewChild('gameSelect') gameSelect!: ElementRef; */

  tipos: String[] = 'Competitivo Semi-Competitivo Casual'.split(' ');
  jogos: String[] = [ 'Magic','Pokemon','Yu-Gi-Oh'];
  constructor(private deckService: DeckService, private router: Router, private route: ActivatedRoute){
    //this.disable = false;
    this.baralho = new Deck('','','');

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if(params['id'] > 0){
        this.baralho = this.deckService.returnById(params['id']);
        this.save = false;
        this.text = 'Editar';
      } else {
        this.baralho = new Deck('','','');
        this.save = true;
        this.text = 'Salvar';
      }

    });
  }

  onClick(){
    alert(`Baralho Salvo!!
            Nome: ${this.baralho.name}
            Jogo: ${this.baralho.game}
            Tipo: ${this.baralho.type}`);
    //this.disable = true;

    if(this.save){

      this.deckService.save(new Deck(this.baralho.name,this.baralho.game,this.baralho.type));
      this.router.navigate(['listar']);
    } else {
      this.deckService.update(this.baralho);
      this.router.navigate(['listar']);

    }

  }

  clean(){
    this.baralho = new Deck('','','');
    //this.disable = false;
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

  /* listTypes(){
    //atualiza o select para apresentar o elemento selecionado
    setTimeout(() => {
      M.FormSelect.init(this.typeSelect.nativeElement);
      M.FormSelect.init(this.gameSelect.nativeElement);
    }, 100);
  } */
}
